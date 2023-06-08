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

it("Writing files using writeFile()", () => {
  cy.writeFile("sample.txt", "Hello world\n");
  cy.writeFile("sample.txt", "I am using Cypress for testing", { flag: "a+" });
});
