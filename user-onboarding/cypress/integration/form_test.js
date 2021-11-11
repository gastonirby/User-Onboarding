describe('User App', () => {
    //fresh state!
    beforeEach(() => {
        cy.visit('http://localhost:3001');
    })

    const fNameInput = () => cy.get('input[name=fname]');
    const lNameInput = () => cy.get('input[name=lname]');
    const emailInput = () => cy.get('input[name=email');
    const passwordInput = () => cy.get('input[name=password]');
    const terms =() => cy.get('input[name=terms]');
    const submitBtn = () => cy.get('input[type=submit]');

    it('sanity check', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // === strict equality
        expect({}).to.eql({});
    })

    it('Proper elements showing', () => {
        fNameInput().should('exist');
        lNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        terms().should('exist');
        submitBtn().should('exist');

        cy.contains('Create User').should('exist');
    })

    describe('Filling out inputs and cancelling', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })

        it('can type in inputs & create user', () => {
            fNameInput()
                .should('have.value', '')
                .type('lorem ipsum')
                .should('have.value', 'lorem ipsum');
            lNameInput()
                .should('have.value', '')
                .type('lorem ipsum')
                .should('have.value', 'lorem ipsum');
            emailInput()
                .should('have.value', '')
                .type('lorem ipsum')
                .should('have.value', 'lorem ipsum');
            passwordInput()
                .should('have.value', '')
                .type('lorem ipsum')
                .should('have.value', 'lorem ipsum');
            terms().click();
            submitBtn().click();
            cy.contains('lorem ipsum').should('exist');
        })

       it('checks for validation', () => {
            emailInput()
                .should('have.value', '')
                .type('lorem ipsum')
                .should('have.value', 'lorem ipsum');
            cy.contains('Must be a valid email address').should('exist');

       })


    })



























})