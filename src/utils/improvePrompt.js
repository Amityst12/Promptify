// src/utils/improvePrompt.js
export const improvePrompt = async (userPrompt) => {
  const resp = await fetch("/.netlify/functions/improvePrompt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: userPrompt })
  });

  if (!resp.ok) {
    const err = await resp.json();
    throw new Error(err.error || "Network error");
  }
  const { text } = await resp.json();
  return text;
};
