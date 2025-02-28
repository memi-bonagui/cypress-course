describe("Fundamentals test", () => {
  it("Contains correct header text", () => {
    cy.visit("/fundamentals");
    // cy.get('[data-test="funtamentals-header"]').contains(
    //   /Testing fundamentals/i
    // );
    cy.get('[data-test="funtamentals-header"]').should(
      "contain.text",
      "Testing Fundamentals"
    );
  });
});
