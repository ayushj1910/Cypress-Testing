///<reference types="cypress" />

import { LoginPage } from "./pages/LoginPage";

const loginpage = new LoginPage();

describe("All Login tests", () => {
  //beforeEach helps to run the same command before each testing block
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });

  //Test with valid credentials

  it("Login test 1", () => {
    loginpage.enterUsername("Admin");
    loginpage.enterPassword("admin123");
    loginpage.clickLogin();
  });

  //Test with invalid credentials

  it("login test 2", () => {
    loginpage.enterUsername("Admin12");
    loginpage.enterPassword("admin123");
    loginpage.clickLogin();
  });
});
