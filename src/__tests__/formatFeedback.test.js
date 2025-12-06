const { formatFeedback } = require("../utils/formatFeedback.js");

test("formats feedback by adding line breaks after sentences", () => {
  const input = "This is a test.It should break here.And here too.";

  const result = formatFeedback(input);

  expect(result).toBe(
    "This is a test.\nIt should break here.\nAnd here too."
  );
});

test("returns empty string for null or empty input", () => {
  expect(formatFeedback("")).toBe("");
  expect(formatFeedback(null)).toBe("");
  expect(formatFeedback(undefined)).toBe("");
});
