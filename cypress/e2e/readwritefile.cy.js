it("Testing fixtures", () => {
  cy.fixture("example.json").then((data) => {
    cy.log(data.name);
    cy.log(data.email);
  });
});
it("read files using ReadFile()", () => {
  cy.readFile("./cypress/fixtures/example.json").then((data) => {
    cy.log(data.name);
  });
});
