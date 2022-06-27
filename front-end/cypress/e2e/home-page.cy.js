describe("Typical user journey through our website", () => {
  it("should visit the page and check that an expected element is visible", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.contains("Immutably changing arrays").should("be.visible");
  });

  it("should click the general button, select a link and open it correctly", () => {
    cy.get(".home-container > :nth-child(2) > :nth-child(3)").click();
    cy.get('[href="https://www.youtube.com/watch?v=lwqeNnboh_4"]')
      .invoke("removeAttr", "target")
      .click();
    cy.url().should("include", "youtube");
  });

  it("Return to React app and select the Search button on the navbar", () => {
    cy.visit("http://localhost:3000");
    cy.get("nav > :nth-child(2) > :nth-child(2)").click();
    cy.get(".search-header > :nth-child(5)").should("be.visible");
  });

  it("Click the random button and check a result is displayed", () => {
    cy.get(".search-header > :nth-child(5)").click();
    cy.get(".result").should("be.visible");
  });

  it("Select the text input, type in react and check it is updated", () => {
    cy.get("#search-bar").type("react").should("have.value", "react");
  });

  it("Click the search button and check a result is displayed", () => {
    cy.get(".search-header > :nth-child(4)").click();
    cy.get(".result").should("be.visible");
  });

  it("Select the text input, type in banana and check it is updated", () => {
    cy.get("#search-bar").clear().type("banana").should("have.value", "banana");
  });

  it("Click the search button and check no results found", () => {
    cy.get(".search-header > :nth-child(4)").click();
    cy.contains("No results found").should("be.visible");
  });

  it("Click the Submit a Link button and check category input is visible", () => {
    cy.get("nav > :nth-child(2) > :nth-child(3)").click();
    cy.get("#category-input").should("be.visible");
  });

  it("Select the category form input, type in react and check it is updated", () => {
    cy.get("#category-input").type("react").should("have.value", "react")
      .clear()
      .click()
    cy.get("#links-category option")
      .first()
      .should('have.text', 'Array Methods')
    cy.get("#category-input")
      .type("testCat")
      .should("have.value", "testCat");
  });

  it("Select the link form input, type in google URL and check it is updated", () => {
    cy.get("#link-input")
      .type("https://www.google.com")
      .should("have.value", "https://www.google.com");
  });

  it("Select the description form input, type in description and check it is updated", () => {
    cy.get("#description-input")
      .type("Google search engine")
      .should("have.value", "Google search engine");
  });

  it("Select the name form input, type in Team 16 and check it is updated", () => {
    cy.get("#name-input").type("Team 16").should("have.value", "Team 16");
  });

  /*This currently posts to the database (i think) and we need to delete it*/
  it("Click the submit button, check Category input is clear and FormResult is visible", () => {
    cy.get("form > button").click();
    cy.get("#category-input").should("have.value", "");
    cy.get(".description").should("be.visible");
  });

  it("Clicks on Home button and checks if new category is visible ", () => {
    cy.get('nav > :nth-child(2) > :nth-child(1)').click()
    cy.contains('testCat').should("be.visible");
  })
  
  it("Clicks on testCat button and checks if new link is visible ", () => {
    cy.contains('testCat').click()
    cy.contains('Google search engine').should('be.visible');
  })

  it("Visits our delete route on the backend to delete testCat and revisits Localhost:3000 to ensure deletion", () => {
    cy.request('DELETE', 'http://localhost:5001/links').as('deleteLinks')
    cy.wait(5000);
    cy.visit("http://localhost:3000")
    cy.wait(1000);
    cy.contains('testCat').should('not.exist');
  })
});
