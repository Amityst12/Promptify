import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { improvePrompt } from "../../utils/openai";
import { fallbackCopy } from "../../utils/fallbackCopy";

export const BetterPrompt = () => {
  const [input, setInput] = useState("");
  const [improvedPrompt, setImprovedPrompt] = useState("");

  const handleImprove = async () => {
  if (!input.trim()) {
    setImprovedPrompt("Oops! Looks like you forgot to enter a prompt.");
    return;
  }

  setImprovedPrompt("⏳ Improving your prompt...");
  
  try{
    const result = await improvePrompt(input);
    setImprovedPrompt(result);
  } catch (error){
    console.error("OpenAI API error", error);
    setImprovedPrompt("Failed to improve the prompt. Please try again later.");
  }
    };

  return (
    <section
      id="better"
      className="min-h-screen flex items-center justify-center relative bg-white text-white px-4 bg-gradient-to-r from-blue-100 to-green-50 "
    >
      <RevealOnScroll>
        <div className="text-center z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-bold mb-5 bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent leading-normal pb-1">
            Improve your prompt instantly↓
          </h2>

          <p className="text-black text-lg mb-8">
            Enter a basic question or instruction, and let <span className="text-blue-400 font-semibold">Promptify</span> refine it for better AI results.
          </p>

          <input
            type="text"
            className="w-full p-3 rounded bg-blue-600 border border-gray-500 mb-4"
            placeholder="Type your prompt..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            onClick={handleImprove}
            className="bg-blue-600 border border-gray-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer ">
            Improve Prompt!
          </button>

          {improvedPrompt && (
            <div className="mt-6 p-4 bg-cyan-800 rounded text-blue-300 border border-gray-700 text-left relative">
              <strong>Improved Prompt:</strong>
                <p
                  className="mt-2 break-words whitespace-pre-line text-left"
                >
                    {improvedPrompt}
                </p>
                <button
                onClick={() => {
                  if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(improvedPrompt)
                      .then(() => alert("Prompt copied to clipboard!"))
                      .catch((err) => {
                        console.error("Clipboard error:", err);
                        fallbackCopy(improvedPrompt);
                      });
                  } else {
                    fallbackCopy(improvedPrompt);
                  }
                }}
                className="cursor-pointer mt-2 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
              >
                Copy to clipboard
              </button>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
