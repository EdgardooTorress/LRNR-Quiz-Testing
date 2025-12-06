const { validateQuizForm } = require("../utils/validateQuizForm.js");

test("requires both topic and expertise", () => {
  expect(validateQuizForm("", "")).toBe("Topic and expertise required.");
});

test("requires topic only", () => {
  expect(validateQuizForm("", "novice")).toBe("Topic is required.");
});

test("requires expertise only", () => {
  expect(validateQuizForm("javascript", "")).toBe("Expertise level is required.");
});

test("returns OK when both fields are provided", () => {
  expect(validateQuizForm("javascript", "expert")).toBe("OK");
});
