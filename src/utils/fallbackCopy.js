// ALWAYS works even if normal Copy to clipboard doesn't work

export function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed"; // avoid scrolling to bottom
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    document.execCommand("copy");
    alert("Prompt copied (f)");
  } catch (err) {
    alert("Copy failed. Please select and copy manually.");
  }

  document.body.removeChild(textarea);
}