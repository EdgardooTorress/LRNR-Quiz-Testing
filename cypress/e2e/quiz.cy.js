describe("Quiz Generation Page", () => {
  const baseUrl = "http://localhost:5173/quiz-generation";

  it("loads the Quiz Generation page and allows selecting options", () => {
    cy.visit(baseUrl);

    // Title renders
    cy.contains("Quiz Generation Options").should("be.visible");

    // Select a topic
    cy.get("select").eq(0).select("javascript");
    cy.get("select").eq(0).should("have.value", "javascript");

    // Select expertise
    cy.get("select").eq(1).select("novice");
    cy.get("select").eq(1).should("have.value", "novice");

    // Select number of questions
    cy.get("select").eq(2).select("10");
    cy.get("select").eq(2).should("have.value", "10");

    // Select style
    cy.get("select").eq(3).select("jedi");
    cy.get("select").eq(3).should("have.value", "jedi");

    // The submit button should be visible
    cy.contains("SUBMIT").should("be.visible");
  });
});
