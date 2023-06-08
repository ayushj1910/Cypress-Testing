///<reference types="cypress" />

import { LoginPage } from "./pages/LoginPage";

const loginpage = new LoginPage();

describe("All Login tests", () => {
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
});
//Test with valid credentials
