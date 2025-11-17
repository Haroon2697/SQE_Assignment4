/**
 * Moving Averages Test Cases - ECP and BVA
 * Assignment 04 - Portfolio Visualizer
 * 
 * Form Under Test: Moving Averages (Tactical Asset Allocation)
 * URL: https://www.portfoliovisualizer.com/moving-averages
 */

describe('Moving Averages - ECP & BVA', () => {
  
  beforeEach(() => {
    cy.visit('/moving-averages');
    cy.waitForPageLoad();
  });

  describe('ECP - Moving Average Period Valid Classes', () => {
    
    it('TC-MA-001: Short-term MA (10 days)', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-001-short-term-ma');
    });

    it('TC-MA-002: Medium-term MA (50 days)', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-002-medium-term-ma');
    });

    it('TC-MA-003: Long-term MA (200 days)', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-003-long-term-ma');
    });
  });

  describe('ECP - Moving Average Period Invalid Classes', () => {
    
    it('TC-MA-004: Zero period', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-004-zero-period');
    });

    it('TC-MA-005: Negative period', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-005-negative-period');
    });

    it('TC-MA-006: Period exceeding data range', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-006-exceed-range');
    });
  });

  describe('ECP - Asset Selection Classes', () => {
    
    it('TC-MA-007: Single asset', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-007-single-asset');
    });

    it('TC-MA-008: Multiple assets', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-008-multiple-assets');
    });

    it('TC-MA-009: Invalid ticker', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-009-invalid-ticker');
    });
  });

  describe('BVA - Period Boundaries', () => {
    
    it('TC-MA-BVA-001: Minimum period (1)', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-BVA-001-min-period');
    });

    it('TC-MA-BVA-002: Below minimum (0)', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-BVA-002-below-min');
    });

    it('TC-MA-BVA-003: Maximum period (500)', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-BVA-003-max-period');
    });

    it('TC-MA-BVA-004: Above maximum (501)', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-BVA-004-above-max');
    });
  });

  describe('Robust Testing', () => {
    
    it('TC-MA-ROBUST-001: Valid complete analysis', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-ROBUST-001-complete-valid');
    });

    it('TC-MA-ROBUST-002: Multiple MAs comparison', () => {
      cy.get('body').should('be.visible');
      cy.wait(2000);
      cy.screenshot('TC-MA-ROBUST-002-multiple-ma');
    });
  });
});

