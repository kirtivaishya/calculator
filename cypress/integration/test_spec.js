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
      cy.get("#plus").click();
      cy.get("#2").click();
      cy.get("#equal").click();
  
      // Assert
      cy.get(".calculator-screen").should("have.value", "9");
    }) 
    it('checks 7 - 2 equals 5', () => {
        // Arrange
        cy.visit('http://127.0.0.1:5500/index.html')
    
        // Act
        cy.get("#7").click();
        cy.get("#substract").click();
        cy.get("#2").click();
        cy.get("#equal").click();
    
        // Assert
        cy.get(".calculator-screen").should("have.value", "5");
      })
      it('checks 7 * 2 equals 14', () => {
        // Arrange
        cy.visit('http://127.0.0.1:5500/index.html')
    
        // Act
        cy.get("#7").click();
        cy.get("#mutiply").click();
        cy.get("#2").click();
        cy.get("#equal").click();
    
        // Assert
        cy.get(".calculator-screen").should("have.value", "14");
      })
      it('checks clear screen', () => {
        // Arrange
        cy.visit('http://127.0.0.1:5500/index.html')
    
        // Act
        cy.get("#C").click();       
    
        // Assert
        cy.get(".calculator-screen").should("have.value","0");
      })
      it('checks 8/2 equals 4', () => {
        // Arrange
        cy.visit('http://127.0.0.1:5500/index.html')
    
        // Act
        cy.get("#8").click();
        cy.get("#divide").click();
        cy.get("#2").click();
        cy.get("#equal").click();
    
        // Assert
        cy.get(".calculator-screen").should("have.value", "4");
      })
      it('checks chaining 2*2*2-6*2+2%3 equals 2', () => {
        // Arrange
        cy.visit('http://127.0.0.1:5500/index.html')
    
        // Act
        cy.get("#2").click();
        cy.get("#mutiply").click();
        cy.get("#2").click();
        cy.get("#mutiply").click();
        cy.get("#2").click();
        cy.get("#substract").click();
        cy.get("#6").click();
        cy.get("#mutiply").click();
        cy.get("#2").click();
        cy.get("#plus").click();
        cy.get("#2").click();
        cy.get("#divide").click();
        cy.get("#3").click();
        cy.get("#equal").click();
    
        // Assert
        cy.get(".calculator-screen").should("have.value", "2");
      })
      it('checks decimal values 7.20 * 2 equals 14.4', () => {
        // Arrange
        cy.visit('http://127.0.0.1:5500/index.html')
    
        // Act
        cy.get("#7").click();
        cy.get("#dot").click();
        cy.get("#2").click();
        cy.get("#0").click();
        cy.get("#mutiply").click();
        cy.get("#2").click();
        cy.get("#equal").click();
    
        // Assert
        cy.get(".calculator-screen").should("have.value", "14.4");
      })
  })