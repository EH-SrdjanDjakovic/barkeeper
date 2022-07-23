describe('<App>', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display input field and Search button', () => {
    cy.get('input').should("be.visible")
    cy.get('button').contains("Search").should("be.visible")
  })

  it('should fetch data from api successfully', () => {
    const cocktailName: string = "sun"
    cy.get('input').type(cocktailName)
    cy.get('button').click()
    cy.intercept(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`, (req) => {
      req.continue((res) => {
        expect(res.body.drinks.length).to.be.gt(0)
      })
    })
  })

  it('should display recipe details', () => {
    cy.get('input').type("sour")
    cy.get('button').click()
    cy.get(".recipe-details").should("have.length.greaterThan", 0)
  })
})