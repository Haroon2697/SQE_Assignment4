// ***********************************************
// Custom Commands for Portfolio Visualizer Testing
// Assignment 04 - Cypress Automation
// ***********************************************

// ============================================
// NAVIGATION COMMANDS
// ============================================

/**
 * Navigate to a specific tool/page
 * @param {string} path - The path relative to base URL
 */
Cypress.Commands.add('navigateToTool', (path) => {
  cy.visit(path);
  cy.wait(1000); // Wait for page to stabilize
});

/**
 * Navigate to analysis page
 */
Cypress.Commands.add('goToAnalysis', () => {
  cy.visit('/analysis');
});

// ============================================
// AUTHENTICATION COMMANDS
// ============================================

/**
 * Login to Portfolio Visualizer
 * @param {string} email - User email
 * @param {string} password - User password
 */
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.contains('Sign In', { matchCase: false }).click();
  cy.get('input[type="email"], input[name="email"], input[id*="email"]').type(email);
  cy.get('input[type="password"], input[name="password"], input[id*="password"]').type(password);
  cy.get('button[type="submit"], input[type="submit"]').click();
});

/**
 * Sign up for Portfolio Visualizer
 * @param {object} userData - User registration data
 */
Cypress.Commands.add('signup', (userData) => {
  cy.visit('/');
  cy.contains('Sign Up', { matchCase: false }).click();
  
  if (userData.email) {
    cy.get('input[type="email"], input[name="email"]').type(userData.email);
  }
  if (userData.password) {
    cy.get('input[type="password"]').first().type(userData.password);
  }
  if (userData.confirmPassword) {
    cy.get('input[type="password"]').last().type(userData.confirmPassword);
  }
  if (userData.firstName) {
    cy.get('input[name*="first"], input[id*="first"]').type(userData.firstName);
  }
  if (userData.lastName) {
    cy.get('input[name*="last"], input[id*="last"]').type(userData.lastName);
  }
});

/**
 * Logout from Portfolio Visualizer
 */
Cypress.Commands.add('logout', () => {
  cy.contains('Logout', { matchCase: false }).click();
});

// ============================================
// FORM INTERACTION COMMANDS
// ============================================

/**
 * Fill in a form field by label
 * @param {string} label - Field label
 * @param {string} value - Value to enter
 */
Cypress.Commands.add('fillFieldByLabel', (label, value) => {
  cy.contains('label', label, { matchCase: false })
    .parent()
    .find('input, select, textarea')
    .clear()
    .type(value);
});

/**
 * Select dropdown option by label
 * @param {string} label - Dropdown label
 * @param {string} option - Option to select
 */
Cypress.Commands.add('selectDropdown', (label, option) => {
  cy.contains('label', label, { matchCase: false })
    .parent()
    .find('select')
    .select(option);
});

/**
 * Fill ticker symbol
 * @param {number} index - Ticker input index (1-based)
 * @param {string} ticker - Ticker symbol
 */
Cypress.Commands.add('fillTicker', (index, ticker) => {
  cy.get(`input[name*="symbol"][name*="${index}"], input[id*="symbol${index}"]`).type(ticker);
});

/**
 * Fill allocation percentage
 * @param {number} index - Allocation input index (1-based)
 * @param {string} percentage - Percentage value
 */
Cypress.Commands.add('fillAllocation', (index, percentage) => {
  cy.get(`input[name*="allocation"][name*="${index}"], input[id*="allocation${index}"]`).type(percentage);
});

/**
 * Click Analyze/Submit button
 */
Cypress.Commands.add('clickAnalyze', () => {
  cy.contains('button', /analyze|submit|calculate/i).click();
  cy.wait(2000); // Wait for results
});

/**
 * Take screenshot with test case info
 * @param {string} testName - Name of the test case
 */
Cypress.Commands.add('captureResult', (testName) => {
  cy.screenshot(testName, { capture: 'fullPage' });
});

// ============================================
// VALIDATION COMMANDS
// ============================================

/**
 * Verify error message is displayed
 * @param {string} errorText - Expected error text (partial match)
 */
Cypress.Commands.add('verifyErrorMessage', (errorText) => {
  cy.contains(errorText, { matchCase: false }).should('be.visible');
});

/**
 * Verify success message is displayed
 * @param {string} successText - Expected success text (partial match)
 */
Cypress.Commands.add('verifySuccessMessage', (successText) => {
  cy.contains(successText, { matchCase: false }).should('be.visible');
});

/**
 * Verify results are displayed
 */
Cypress.Commands.add('verifyResultsDisplayed', () => {
  cy.get('table, .chart, #results, .results-container', { timeout: 15000 }).should('be.visible');
});

/**
 * Verify form validation error
 * @param {string} fieldLabel - Field label
 */
Cypress.Commands.add('verifyFieldError', (fieldLabel) => {
  cy.contains(fieldLabel, { matchCase: false })
    .parent()
    .should('have.class', 'error')
    .or('contain', 'required')
    .or('contain', 'invalid');
});

// ============================================
// DATE HANDLING COMMANDS
// ============================================

/**
 * Fill date field
 * @param {string} label - Date field label
 * @param {string} date - Date value (YYYY-MM-DD or MM/DD/YYYY)
 */
Cypress.Commands.add('fillDate', (label, date) => {
  cy.contains('label', label, { matchCase: false })
    .parent()
    .find('input[type="date"], input[type="text"]')
    .clear()
    .type(date);
});

/**
 * Fill year field
 * @param {string} label - Year field label
 * @param {string} year - Year value
 */
Cypress.Commands.add('fillYear', (label, year) => {
  cy.contains('label', label, { matchCase: false })
    .parent()
    .find('select, input')
    .then($el => {
      if ($el.is('select')) {
        cy.wrap($el).select(year);
      } else {
        cy.wrap($el).clear().type(year);
      }
    });
});

// ============================================
// WAIT & UTILITY COMMANDS
// ============================================

/**
 * Wait for page to load completely
 */
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible');
  cy.wait(1000);
});

/**
 * Clear all form inputs
 */
Cypress.Commands.add('clearForm', () => {
  cy.get('input[type="text"], input[type="number"], input[type="email"], textarea')
    .clear({ force: true });
});

/**
 * Accept cookies/disclaimer if present
 */
Cypress.Commands.add('acceptCookies', () => {
  cy.get('body').then($body => {
    if ($body.find('[class*="cookie"], [id*="cookie"], [class*="consent"]').length > 0) {
      cy.contains('button', /accept|agree|ok|got it/i).click();
    }
  });
});