describe('Login to Tokopedia', () => {
  beforeEach(() => {
    cy.visit('https://www.tokopedia.com/', { headers: { 'Accept-Encoding': 'gzip, deflate' } });
    cy.wait(10000);
    cy.get('a[data-testid="icnHeaderIcon"]').should('be.visible'); // Assertion after success open page
  });

  it('Success Login Tokopedia', () => {
    const email = Cypress.env('EMAIL');
    const password = Cypress.env('PASSWORD');

    // Click "Masuk" in Header
    cy.get('button[data-testid="btnHeaderLogin"]').click();
    cy.wait(2000);
    cy.get('h3[data-unify="Typography"]').contains('Masuk').should('be.visible');

    // Input phone number
    cy.get('input[id="email-phone"]').type(email).should('have.value', email);
    cy.wait(1000);

    // Click "Selanjutnya" button
    cy.get('button[data-testid="email-phone-submit"]').click();
    cy.wait(2000);
    cy.get('label[for="password-input"]').should('be.visible');

    // Input Password
    cy.get('input[id="password-input"]').type(password).should('have.value', password);
    cy.wait(1000);
    cy.get('button[type="submit"]').contains('Masuk').click();
    cy.wait(10000);

    // Assert success login
    cy.get('div[id="my-profile-header"]').should('be.visible');
  });

  it('Failed Login Tokopedia - Not Registered Email', () => {
    // Click "Masuk" in Header
    cy.get('button[data-testid="btnHeaderLogin"]').click({ force: true });
    cy.wait(2000);
    cy.get('h3[data-unify="Typography"]').contains('Masuk').should('be.visible');

    // Input Email Not Registered
    cy.get('input[id="email-phone"]').type('nortergistokopedia@gmail.com').should('have.value', 'nortergistokopedia@gmail.com');
    cy.wait(1000);

    // Click "Selanjutnya" button
    cy.get('button[data-testid="email-phone-submit"]').click();
    cy.wait(2000);
    cy.get('h5').contains('Email belum terdaftar').should('be.visible');
  });
});
