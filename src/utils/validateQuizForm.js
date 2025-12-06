function validateQuizForm(topic, expertise) {
  if (!topic && !expertise) return "Topic and expertise required.";
  if (!topic) return "Topic is required.";
  if (!expertise) return "Expertise level is required.";
  return "OK";
}

module.exports = { validateQuizForm };
