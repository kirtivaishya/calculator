// my actual first test - does the page load
describe('The main page loads', () => {
    it('successfully loads', () => {
      cy.visit('http://127.0.0.1:5500/index.html')
    }) 
  })
  
  
  // testing basic operations
  describe('Basic Calculator Operations', () => {
    it('checks 7 + 2 equals 9', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5500/index.html')
  
      // Act
      cy.get("#7").click();
      cy.get("#+").click();
      cy.get("#2").click();
      cy.get("#equal").click();
  
      // Assert
      cy.get(".calculator-screen").should("have.value", "9");
    }) 
  })