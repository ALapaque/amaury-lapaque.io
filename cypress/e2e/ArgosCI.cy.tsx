describe('ArgosCI', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('navigate to home and screenshot', () => {
    cy.wait(2000);

    cy.argosScreenshot('home');
  });

  it('navigate to about and screenshot', () => {
    cy.visit('http://localhost:3000/about');

    cy.wait(2000);

    cy.argosScreenshot('about');
  });

  it('navigate to experiences and screenshot', () => {
    cy.visit('http://localhost:3000/experiences');

    cy.wait(2000);

    cy.argosScreenshot('experiences');
  });

  it('navigate to skills and screenshot', () => {
    cy.visit('http://localhost:3000/skills');

    cy.wait(2000);

    cy.argosScreenshot('skills');
  });

  it('navigate to projects and screenshot', () => {
    cy.visit('http://localhost:3000/projects');

    cy.wait(2000);

    cy.argosScreenshot('projects');
  });

  it('navigate to services and screenshot', () => {
    cy.visit('http://localhost:3000/services');

    cy.wait(2000);

    cy.argosScreenshot('services');
  });

  it('navigate to testimonials and screenshot', () => {
    cy.visit('http://localhost:3000/testimonials');

    cy.wait(2000);

    cy.argosScreenshot('testimonials');
  });
});
