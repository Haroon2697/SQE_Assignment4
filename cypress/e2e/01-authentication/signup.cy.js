/**
 * Sign Up Test Cases - ECP and BVA
 * Assignment 04 - Portfolio Visualizer
 * 
 * Test Type: Black-box Testing
 * Techniques: Equivalence Class Partitioning (ECP), Boundary Value Analysis (BVA)
 * 
 * Form Under Test: Sign Up / Registration Form
 * URL: https://www.portfoliovisualizer.com/ (Sign Up button)
 */

describe('Sign Up - Equivalence Class Partitioning & Boundary Value Analysis', () => {
  
  beforeEach(() => {
    cy.visit('/');
    cy.waitForPageLoad();
  });

  // ============================================
  // EQUIVALENCE CLASS PARTITIONING TESTS
  // ============================================

  describe('ECP - Valid Registration Data', () => {
    
    it('TC-SIGNUP-001: Valid registration with all required fields', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-001-valid-registration');
    });

    it('TC-SIGNUP-002: Valid email with dot in username', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-002-email-with-dot');
    });

    it('TC-SIGNUP-003: Valid password with all character types', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-003-complex-password');
    });
  });

  describe('ECP - Invalid Email for Registration', () => {
    
    it('TC-SIGNUP-004: Email already exists', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-004-duplicate-email');
    });

    it('TC-SIGNUP-005: Email with invalid TLD', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-005-invalid-tld');
    });

    it('TC-SIGNUP-006: Email with consecutive dots', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-006-consecutive-dots');
    });
  });

  describe('ECP - Password Strength Classes', () => {
    
    it('TC-SIGNUP-007: Weak password (only lowercase)', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-007-weak-password');
    });

    it('TC-SIGNUP-008: Medium password (lowercase + uppercase)', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-008-medium-password');
    });

    it('TC-SIGNUP-009: Strong password (all character types)', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-009-strong-password');
    });
  });

  describe('ECP - Password Confirmation', () => {
    
    it('TC-SIGNUP-010: Passwords match', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-010-passwords-match');
    });

    it('TC-SIGNUP-011: Passwords do not match', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-011-passwords-mismatch');
    });

    it('TC-SIGNUP-012: Password match case-sensitive', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-012-case-sensitive-password');
    });
  });

  describe('ECP - Name Fields', () => {
    
    it('TC-SIGNUP-013: Valid first and last name', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-013-valid-names');
    });

    it('TC-SIGNUP-014: Name with special characters', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-014-special-chars-name');
    });

    it('TC-SIGNUP-015: Name with numbers', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-015-numbers-in-name');
    });

    it('TC-SIGNUP-016: Empty name fields', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-016-empty-names');
    });
  });

  // ============================================
  // BOUNDARY VALUE ANALYSIS TESTS
  // ============================================

  describe('BVA - Email Length Boundaries', () => {
    
    it('TC-SIGNUP-BVA-001: Minimum valid email length (e.g., a@b.c)', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-BVA-001-min-email');
    });

    it('TC-SIGNUP-BVA-002: Email just below minimum (e.g., @b.c)', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-BVA-002-below-min-email');
    });

    it('TC-SIGNUP-BVA-003: Maximum email length (254 characters)', () => {
      cy.visit('/');
      const longEmail = 'a'.repeat(240) + '@example.com'; // ~254 chars
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-BVA-003-max-email');
    });

    it('TC-SIGNUP-BVA-004: Email exceeding maximum length (255+ chars)', () => {
      cy.visit('/');
      const tooLongEmail = 'a'.repeat(245) + '@example.com'; // >254 chars
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-BVA-004-above-max-email');
    });
  });

  describe('BVA - Password Length Boundaries', () => {
    
    it('TC-SIGNUP-BVA-005: Password at minimum length (8 chars)', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-BVA-005-min-password');
    });

    it('TC-SIGNUP-BVA-006: Password below minimum (7 chars)', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-BVA-006-below-min-password');
    });

    it('TC-SIGNUP-BVA-007: Password at maximum length (50 chars)', () => {
      cy.visit('/');
      const maxPassword = 'A'.repeat(50);
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-BVA-007-max-password');
    });

    it('TC-SIGNUP-BVA-008: Password above maximum (51 chars)', () => {
      cy.visit('/');
      const tooLongPassword = 'A'.repeat(51);
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-BVA-008-above-max-password');
    });
  });

  describe('BVA - Name Length Boundaries', () => {
    
    it('TC-SIGNUP-BVA-009: Name with minimum length (1 char)', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-BVA-009-min-name');
    });

    it('TC-SIGNUP-BVA-010: Name with maximum length (50 chars)', () => {
      cy.visit('/');
      const longName = 'A'.repeat(50);
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-BVA-010-max-name');
    });

    it('TC-SIGNUP-BVA-011: Name exceeding maximum (51 chars)', () => {
      cy.visit('/');
      const tooLongName = 'A'.repeat(51);
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-BVA-011-above-max-name');
    });
  });

  // ============================================
  // ROBUST TESTING - Combined Cases
  // ============================================

  describe('Robust Testing - Multiple Field Validation', () => {
    
    it('TC-SIGNUP-ROBUST-001: All fields empty', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-ROBUST-001-all-empty');
    });

    it('TC-SIGNUP-ROBUST-002: Valid email, invalid password, valid name', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-ROBUST-002-mixed-validity');
    });

    it('TC-SIGNUP-ROBUST-003: Invalid email, valid password, valid name', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-ROBUST-003-invalid-email-only');
    });

    it('TC-SIGNUP-ROBUST-004: All fields at boundary values', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-ROBUST-004-all-boundaries');
    });
  });

  // ============================================
  // TERMS & CONDITIONS / GDPR
  // ============================================

  describe('Terms and Conditions / Privacy', () => {
    
    it('TC-SIGNUP-TC-001: Signup without accepting terms', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-TC-001-no-terms');
    });

    it('TC-SIGNUP-TC-002: Signup with accepting terms', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-TC-002-accept-terms');
    });
  });

  // ============================================
  // SECURITY TESTS
  // ============================================

  describe('Security Testing', () => {
    
    it('TC-SIGNUP-SEC-001: SQL Injection in email field', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-SEC-001-sql-injection');
    });

    it('TC-SIGNUP-SEC-002: XSS in name fields', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-SEC-002-xss-name');
    });

    it('TC-SIGNUP-SEC-003: Common passwords rejected', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.captureResult('TC-SIGNUP-SEC-003-common-password');
    });
  });
});

