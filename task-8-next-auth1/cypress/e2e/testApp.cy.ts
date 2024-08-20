describe("Bookmark Functionality with Authentication", () => {
  beforeEach(() => {
    cy.visit("/api/auth/signin");

    cy.get("#email").type("xaxitil907@biowey.com");
    cy.get("#password").type("1234567890");

    cy.get("#submit").click().as("login");

    cy.url({ timeout: 100000 }).should("include", "/posts");
  });
  //check the bookmark toggle button
  it("should bookmark a job when the bookmark button is clicked", () => {
    cy.get('[data-cy="bookmark-button"]').first().click();
    cy.get('[data-cy="bookmark-button"]').first().find("svg");
  });
  // test the bookmarks page
  it("should display the job in the bookmarked list after bookmarking", () => {
    cy.get('[data-cy="bookmark-button"]').first().click();
    cy.visit("/bookmarks");
    cy.get('[data-cy="bookmarked-job"]', { timeout: 100000 }).should(
      "be.visible"
    );
  });
});
