describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('passes', () => {
    cy.login('bropet@mail.ru', '123')
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible')
  })

  it('Non email', () => {
    cy.login(null, '123')
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.")
    })
  })

  it('Non pass', () => {
    cy.login('bropet@mail.ru', null)
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.")
    })
  })

  it('should add a book to favorites and delete', () => {
    cy.login('bropet@mail.ru', '123')
    cy.addBookToFavorites('[href="book/6e7fc213-009f-4873-8b69-fb11543ab898"] > .h-100 > .card-footer > .btn', 'Колобок')
    cy.get('[href="book/6e7fc213-009f-4873-8b69-fb11543ab898"] > .h-100 > .card-footer > .btn').click()  
  })

  it('should create and add a book via checkbox', () => {
    cy.login('bropet@mail.ru', '123')
    cy.createAndAddBookViaCheckbox('Три медведя', 'сказка', 'Толстой Л.Н.')
  })

  it('select a book from favorites', () => {
    cy.login('bropet@mail.ru', '123')
    cy.visit('/favorites')
    cy.selectBookFromFavorites('[href="book/4d76d944-5c3a-4bb8-bc21-56aa7674253d"] > .h-100 > .card-body > .card-title', 'Каштанка')
  })
})
