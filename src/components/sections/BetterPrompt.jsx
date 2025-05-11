import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const BetterPrompt = () => {
  const [input, setInput] = useState("");
  const [improvedPrompt, setImprovedPrompt] = useState("");

  const handleImprove = () => {
  if (!input.trim()) {
    setImprovedPrompt("No prompt were given.");
    return;
  }
  
  const improved = `Please help me with the following in a detailed, clear, and structured way: "${input}"`;
  setImprovedPrompt(improved);
    };

  return (
    <section
      id="better"
      className="min-h-screen flex items-center justify-center relative bg-white text-white px-4 "
    >
      <RevealOnScroll>
        <div className="text-center z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
            Improve your prompt here↓
          </h2>

          <p className="text-black text-lg mb-8">
            Enter a basic question or instruction, and let <span className="text-blue-400 font-semibold">Promptify</span> refine it for better AI results.
          </p>

          <input
            type="text"
            className="w-full p-3 rounded bg-blue-300 border border-gray-500 mb-4"
            placeholder="Type your prompt..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            onClick={handleImprove}
            className="bg-blue-300 border border-gray-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer ">
            Improve Prompt!
          </button>

          {improvedPrompt && (
            <div className="mt-6 p-4 bg-cyan-800 rounded text-blue-300 border border-gray-700 text-left">
              <strong>Improved Prompt:</strong>
              <p className="mt-2">{improvedPrompt}</p>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
