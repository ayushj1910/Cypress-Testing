///<reference types="cypress" />

import { LoginPage } from "./pages/LoginPage";

const loginpage = new LoginPage();

//Test with valid credentials
it("Login test 1", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");

  loginpage.enterUsername("Admin");
  loginpage.enterPassword("admin123");
  loginpage.clickLogin();
});

//Test with invalid credentials
it("login test 2", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");

  loginpage.enterUsername("Admin12");
  loginpage.enterPassword("admin123");
  loginpage.clickLogin();
});
