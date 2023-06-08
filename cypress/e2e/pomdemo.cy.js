///<reference types="cypress" />

import { LoginPage } from "./pages/LoginPage";

const loginpage = new LoginPage();

it("POM demo", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");

  loginpage.enterUsername("Admin");

  loginpage.enterPassword("admin123");
  loginpage.clickLogin();
});
