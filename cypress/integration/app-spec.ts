// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  this.beforeAll(function () {
    cy.visit("/");
  });

  it("Renders the app and finds h1 with Welcome to PK Spots !", function () {
    cy.get("h1").should("contain", "Welcome to PK Spots !");
  });

  it("Should find the username input and type TestMan", function () {
    cy.get("input").first().type("TestMan").should("have.value", "TestMan");
  });

  it("Should find the password input and type testpass", function () {
    cy.get("input").last().type("testpass").should("have.value", "testpass");
  });

  it("Should find the Login button and click it", function () {
    cy.get("button").click();
  });
});

export {};
