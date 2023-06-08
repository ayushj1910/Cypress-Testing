it("Uploading files Test", () => {
  cy.visit("https://trytestingthis.netlify.app/");
  cy.get("#myfile").attachFile("example.json");
});

it("Downlaod file Test", () => {
  cy.downloadFile(
    "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
    "mydownloads",
    "example.jpg"
  );
});
