function formatFeedback(text) {
  if (!text) return "";

  return text
    .replace(/(\.)([A-Z])/g, ".\n$2")
    .replace(/\n+/g, "\n")
    .trim();
}

module.exports = { formatFeedback };
