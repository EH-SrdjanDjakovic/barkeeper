describe('<App>', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Initial test', () => {
    cy.get("div").contains("test")
  })
})