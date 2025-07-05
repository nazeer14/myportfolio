import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function OraAI() {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState(() => {
    const stored = localStorage.getItem('oraai-history');
    return stored ? JSON.parse(stored) : [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const googleApiKey = import.meta.env.VITE_APP_GEMINI_API_KEY;

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth',
    });
    localStorage.setItem('oraai-history', JSON.stringify(chatHistory));
  }, [chatHistory]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { userText: input, aiTextRaw: null };
    setChatHistory((prev) => [...prev, userMessage]);

    try {
      setIsLoading(true);
      const genAI = new GoogleGenerativeAI(googleApiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

      const result = await model.generateContent(input);
      const aiText = result.response.text();

      setChatHistory((prev) =>
        prev.map((msg) =>
          msg.userText === input ? { ...msg, aiTextRaw: aiText } : msg
        )
      );
    } catch (error) {
      console.error('Error:', error);
      setChatHistory((prev) =>
        prev.map((msg) =>
          msg.userText === input
            ? {
                ...msg,
                aiTextRaw: '⚠️ Error: Unable to fetch response.',
              }
            : msg
        )
      );
    } finally {
      setInput('');
      setIsLoading(false);
    }
  };

  const parseResponse = (response) => {
    if (!response) return null;
    const parts = response.split(/```([\s\S]*?)```/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <CodeBlock key={i} code={part.trim()} />;
      } else {
        return (
          <p key={i} className="text-gray-800 leading-relaxed whitespace-pre-line">
            {part.trim()}
          </p>
        );
      }
    });
  };

  const CodeBlock = ({ code }) => {
    const handleCopy = () => navigator.clipboard.writeText(code);
    return (
      <div className="relative group">
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          customStyle={{ borderRadius: '0.5rem', padding: '1rem' }}
        >
          {code}
        </SyntaxHighlighter>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-white text-gray-800 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition"
        >
          📋 Copy
        </button>
      </div>
    );
  };

  const LoadingDots = () => (
    <div className="flex items-center gap-1 pl-2 py-1">
      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br py-5 px-2 sm:px-4 md:px-6">
      <div className="w-full max-w-3xl sm:p-6 p-4 rounded-xl shadow-xl space-y-4 bg-gradient-to-br from-gray-300 to-purple-200 border border-purple-400">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-700 text-center">🤖 OraAI Assistant</h2>

        <div
          ref={chatContainerRef}
          className="space-y-4 max-h-[65vh] overflow-y-auto pr-2 scroll-smooth"
        >
          {chatHistory.map((val, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-end items-start gap-2">
                <div className="max-w-[80%] sm:max-w-[75%] bg-blue-100 text-blue-800 px-4 py-2 rounded-2xl shadow">
                  {val.userText}
                </div>
                <img src="/user.png" alt="User" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border" />
              </div>

              {val.aiTextRaw && (
                <div className="flex justify-start items-start gap-2">
                  <img src="/robot.png" alt="OraAI" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border" />
                  <div className="max-w-[80%] sm:max-w-[75%] bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl shadow-sm space-y-2">
                    {parseResponse(val.aiTextRaw)}
                  </div>
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start items-start gap-2">
              <img src="/robot.png" alt="OraAI" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border" />
              <div className="bg-gray-100 px-4 py-2 rounded-2xl shadow-sm">
                <LoadingDots />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t">
          <img src="/robot.png" alt="OraAI" className="w-10 h-10" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full flex-1 p-3 rounded-lg border text-black border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className={`w-full sm:w-auto px-5 py-2 rounded-lg font-semibold transition ${
              isLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {isLoading ? 'Typing...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OraAI;
