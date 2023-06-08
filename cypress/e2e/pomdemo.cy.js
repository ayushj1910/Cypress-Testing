it("POM demo", () => {
  let arr = [1, 2, 3, 4, 5, 6];
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //     cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input")
  //       .type(`${arr[i]}`)
  //       .clear();

  cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input")
    .type("admin123")
    .wait(2000)
    .clear();

  //   cy.get(".oxd-button").click();
});
