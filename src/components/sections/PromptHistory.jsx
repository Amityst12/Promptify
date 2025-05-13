import { useEffect, useState } from "react";
import { fallbackCopy } from "../../utils/fallbackCopy";

export const PromptHistory = ({ onReuse, history, setHistory }) => {
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("promptHistory")) || [];
    setHistory(saved);
  }, []);

  const clearHistory = () => {
    const confirmed = window.confirm("Are you sure you want to clear the prompt history?");
    if (!confirmed) return;

    localStorage.removeItem("promptHistory");
    setHistory([]);
  };

  if (history.length === 0) return null;

  return (
    <div className="mt-12 bg-cyan-900/40 p-4 rounded-md text-white text-sm max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4 cursor-pointer" 
            onClick={() => setShowHistory(!showHistory)}>
        <h3 className="text-3xl font-bold text-blue-500 ">Prompt History: </h3>
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="text-blue-700 text-xl underline hover:text-blue-300 font-bold"
        >
          {showHistory ? "Hide" : "Show"}
        </button>
      </div>

      {showHistory && (
        <>
          <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {history.map((item, index) => (
              <li
                key={index}
                className="border-b border-white/10 pb-2 hover:bg-white/5 p-2 rounded transition"
              >
                <div>
                  <span className="font-semibold text-sky-700">Input: </span>
                  <span className="break-words text-white">{item.input}</span>
                </div>
                <div className="mt-2">
                  <span className="font-semibold text-green-300">Improved: </span>
                  <span className="break-words whitespace-pre-line text-blue-100">{item.improved}</span>
                </div>
                <button
                  className="mt-2 text-s underline text-blue-700 hover:text-blue-500 font-bold"
                  onClick={() => onReuse(item.input)}
                >
                  Reuse prompt
                </button>
                <span>   --  </span>
                <button
                  className="mt-2 text-s underline text-blue-700 hover:text-blue-500 font-bold"
                  onClick={() => {
                        if (navigator.clipboard && window.isSecureContext) {
                          navigator.clipboard.writeText(item.improved)
                            .then(() => alert("Prompt copied to clipboard!"))
                            .catch((err) => {
                            console.error("Clipboard error:", err);
                            fallbackCopy(item.improved);
                            });
                        } else {
                          fallbackCopy(item.improved);
                        }
                     }}
                >
                  Copy result
                </button>
              </li>
            ))}
          </ul>

          <div className="text-center mt-6">
            <button
              onClick={clearHistory}
              className="text-base bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition flex items-center justify-center gap-2"
            >
              🗑 Clear history
            </button>
          </div>
        </>
      )}
    </div>
  );
};
