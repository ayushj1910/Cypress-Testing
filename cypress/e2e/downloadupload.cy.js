it("Uploading files Test", () => {
  cy.visit("https://trytestingthis.netlify.app/");
  cy.get("#myfile").attachFile("example.json");
});
