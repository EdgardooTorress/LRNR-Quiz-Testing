describe("Homepage Tests", () => {
  const baseUrl = "http://localhost:5173/";

  it("renders the homepage correctly", () => {
    cy.visit(baseUrl);

    cy.contains("Your Guided path to programming enlightenment").should("be.visible");
    cy.get("img[alt='LRNR Logo']").should("be.visible");
    cy.contains("Begin Journey").should("be.visible");
    });
  
    describe("Navigation", () => {
  it("navigates to quiz generation when clicking Begin Journey", () => {
    cy.visit(baseUrl);

    cy.contains("Begin Journey").click();

    cy.url().should("include", "/quiz-generation");
    cy.contains("Quiz Generation Options").should("be.visible");
  });
});

});


