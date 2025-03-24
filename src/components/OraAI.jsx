
import { useState } from "react";
import React from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function OraAI() {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
 
  const handleSend = async () => {
   
    if (input.trim() !== '') {
      
      const userMessage = { userText: input, aiText: '' };
      setChatHistory([...chatHistory, userMessage]);
        
       
      try {
       
        const genAI = new GoogleGenerativeAI(
            "Google API key"
        )

       
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

       
        const result = await model.generateContent(input);

        const aiText = result.response.text(); 
        
        const formattedResponse = aiText.split('\n').map((para, idx) => (
          <p key={idx} className="bot-message2">{para}</p>
        ));
      
        setChatHistory(prevHistory => 
          prevHistory.map(msg =>
            msg.userText === input ? { ...msg, aiText: formattedResponse } : msg
          )
        );

        setInput(''); 

      } catch (error) {
        console.error('Error fetching response from Google API:', error);
      }
    }
  };

  return (
    <div className=" menu flex flex-col items-center justify-center py-10  lg:mt-0 mt-30">
      <div className="chatbot-container w-full max-w-xl p-4 rounded-lg shadow-lg space-y-4 mb-4 border-1 ">
        {chatHistory.map((val, i) => (
          <div key={i} className="message-box">
            <p className="user-message font-bold border-1 border-purple-400 mb-2">{val.userText}</p>
            {val.aiText && <h2 className="bot-message border-1 border-gray-500 ">
              {val.aiText}
              </h2>}
    
          </div>
        ))}
      </div>

      <div className="menu input-container flex w-full max-w-xl p-4 space-x-4">
        <img src="robot.png" alt="ai" className="h-20 w-20" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="menu input-field w-full p-2 border border-gray-300 rounded-lg"
        />
        <button onClick={handleSend} className="send-button bg-blue-500 text-white p-2 rounded-lg">Send</button>
      </div>
    </div>
  );
}

export default OraAI;
