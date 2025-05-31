import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function OraAI() {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const googleApiKey = import.meta.env.VITE_APP_GEMINI_API_KEY;

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { userText: input, aiText: null };
    setChatHistory((prev) => [...prev, userMessage]);

    try {
      setIsLoading(true);
      const genAI = new GoogleGenerativeAI(googleApiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

      const result = await model.generateContent(input);
      const aiText = result.response.text();

      const formattedResponse = aiText.split('\n').map((para, idx) => (
        <p key={idx} className="bot-message2">{para}</p>
      ));

      setChatHistory((prevHistory) =>
        prevHistory.map((msg) =>
          msg.userText === input ? { ...msg, aiText: formattedResponse } : msg
        )
      );
    } catch (error) {
      console.error('Error from Gemini API:', error);
      setChatHistory((prevHistory) =>
        prevHistory.map((msg) =>
          msg.userText === input ? {
            ...msg,
            aiText: <p className="text-red-500">Error: Unable to fetch response.</p>
          } : msg
        )
      );
    } finally {
      setInput('');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-xl p-4 rounded-lg shadow-lg space-y-4 border">
        {chatHistory.map((val, i) => (
          <div key={i} className="border rounded-md p-3 mb-2 bg-gray-50">
            <p className="font-semibold text-purple-700">{val.userText}</p>
            <div className="mt-2 text-gray-800">{val.aiText}</div>
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-xl items-center mt-4 px-4 space-x-4">
        <img src="robot.png" alt="ai" className="h-14 w-14" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export default OraAI;
