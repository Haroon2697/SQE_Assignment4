# Cypress Automation - Portfolio Visualizer

## Assignment 04 - Software Quality Engineering
**Course**: Software Quality Engineering (SQE)  
**Semester**: Fall 2025  
**Institution**: National University of Computer & Emerging Sciences, Islamabad

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Test Coverage](#test-coverage)
3. [Installation & Setup](#installation--setup)
4. [Running Tests](#running-tests)
5. [Cypress Cloud Integration](#cypress-cloud-integration)
6. [Test Structure](#test-structure)
7. [Test Techniques](#test-techniques)
8. [Deliverables](#deliverables)

---

## Project Overview

This project automates black-box test cases for the **Portfolio Visualizer** website using **Cypress**, a modern end-to-end testing framework. The test cases were originally designed in Assignment 03 using **Equivalence Class Partitioning (ECP)** and **Boundary Value Analysis (BVA)** techniques.

**Website Under Test**: [https://www.portfoliovisualizer.com/](https://www.portfoliovisualizer.com/)

**Testing Approach**: Black-box testing with no access to source code

---

## Test Coverage

### Forms Tested (12+ Distinct Forms)

#### 1. Authentication (2 forms)
- **Sign In** (`cypress/e2e/01-authentication/signin.cy.js`)
- **Sign Up** (`cypress/e2e/01-authentication/signup.cy.js`)

#### 2. Backtest Portfolio (1 form)
- **Backtest Asset Allocation** (`cypress/e2e/02-backtest-portfolio/backtest-asset-allocation.cy.js`)

#### 3. Factor Analysis (1 form)
- **Factor Regression** (`cypress/e2e/03-factor-analysis/factor-regression.cy.js`)

#### 4. Asset Analytics (2 forms)
- **Asset Correlations** (`cypress/e2e/04-asset-analytics/asset-correlations.cy.js`)
- **Fund Screener** (`cypress/e2e/04-asset-analytics/fund-screener.cy.js`)

#### 5. Monte Carlo Simulation (1 form)
- **Monte Carlo Simulation** (`cypress/e2e/05-monte-carlo/monte-carlo-simulation.cy.js`)

#### 6. Portfolio Optimization (1 form)
- **Efficient Frontier** (`cypress/e2e/06-portfolio-optimization/efficient-frontier.cy.js`)

#### 7. Tactical Asset Allocation (1 form)
- **Market Valuation** (`cypress/e2e/07-tactical-allocation/market-valuation.cy.js`)

#### 8. Configuration Forms (3 forms)
- **Manage Reports** (`cypress/e2e/08-configuration/manage-reports.cy.js`)
- **Manage Backfills** (`cypress/e2e/08-configuration/manage-backfills.cy.js`)
- **Manage Fees** (`cypress/e2e/08-configuration/manage-fees.cy.js`)

**Total Forms Tested**: 12 distinct forms ✅

---

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation Steps

```bash
# 1. Navigate to project directory
cd /home/haroon/cypress-automation

# 2. Install dependencies (already done)
npm install

# 3. Verify Cypress installation
npx cypress verify
```

---

## Running Tests

### Interactive Mode (Cypress Test Runner)
```bash
# Open Cypress Test Runner
npm run cy:open
```

### Headless Mode (Command Line)
```bash
# Run all tests
npm test

# Run all tests in Chrome (headed)
npm run test:headed

# Run all tests in Chrome
npm run test:chrome

# Run all tests in Firefox
npm run test:firefox
```

### Run Specific Test Suites
```bash
# Authentication tests only
npm run test:auth

# Backtest Portfolio tests
npm run test:backtest

# Factor Analysis tests
npm run test:factor

# Asset Analytics tests
npm run test:asset

# Monte Carlo tests
npm run test:monte

# Portfolio Optimization tests
npm run test:optimization

# Tactical Allocation tests
npm run test:tactical

# Configuration tests
npm run test:config
```

---

## Cypress Cloud Integration

This project is integrated with **Cypress Cloud** for:
- ✅ Test run recording
- ✅ Video recordings of test execution
- ✅ Screenshots on failure
- ✅ Detailed test analytics and logs
- ✅ Test result history

### Project ID
```
Project ID: i5o45x
```

### Recording Tests to Cloud
```bash
# Run tests with cloud recording
npm run cy:record

# OR
npm run test:all
```

### Accessing Cloud Dashboard
1. Visit [https://cloud.cypress.io/](https://cloud.cypress.io/)
2. Navigate to project with ID: `i5o45x`
3. View test runs, videos, screenshots, and logs

---

## Test Structure

```
cypress-automation/
├── cypress/
│   ├── e2e/
│   │   ├── 01-authentication/
│   │   │   ├── signin.cy.js
│   │   │   └── signup.cy.js
│   │   ├── 02-backtest-portfolio/
│   │   │   └── backtest-asset-allocation.cy.js
│   │   ├── 03-factor-analysis/
│   │   │   └── factor-regression.cy.js
│   │   ├── 04-asset-analytics/
│   │   │   ├── asset-correlations.cy.js
│   │   │   └── fund-screener.cy.js
│   │   ├── 05-monte-carlo/
│   │   │   └── monte-carlo-simulation.cy.js
│   │   ├── 06-portfolio-optimization/
│   │   │   └── efficient-frontier.cy.js
│   │   ├── 07-tactical-allocation/
│   │   │   └── market-valuation.cy.js
│   │   └── 08-configuration/
│   │       ├── manage-reports.cy.js
│   │       ├── manage-backfills.cy.js
│   │       └── manage-fees.cy.js
│   ├── fixtures/
│   ├── support/
│   │   ├── commands.js        (Custom commands)
│   │   └── e2e.js             (Global configuration)
│   ├── screenshots/           (Auto-generated)
│   └── videos/                (Auto-generated)
├── cypress.config.js          (Cypress configuration)
├── package.json
├── README.md                  (This file)
└── TEST_REPORT.md            (Test execution report)
```

---

## Test Techniques

### 1. Equivalence Class Partitioning (ECP)
- **Definition**: Dividing input data into valid and invalid partitions
- **Approach**: Weak Equivalence Class Testing with Robustness
- **Coverage**: Each equivalence class is tested at least once

#### Example: Email Validation
- **Valid Classes**:
  - Standard email format (`user@domain.com`)
  - Email with subdomain (`user@mail.domain.com`)
  - Email with special characters (`user+tag@domain.com`)
  
- **Invalid Classes**:
  - Empty email
  - Email without @ symbol
  - Email without domain
  - Email with spaces

### 2. Boundary Value Analysis (BVA)
- **Definition**: Testing at boundaries of equivalence classes
- **Approach**: 2-point BVA (at boundary and just beyond)
- **Coverage**: Minimum, minimum-1, maximum, maximum+1

#### Example: Password Length (assuming 8-50 chars)
- **Boundaries Tested**:
  - 7 characters (below minimum)
  - 8 characters (at minimum)
  - 50 characters (at maximum)
  - 51 characters (above maximum)

### 3. Robust Testing
- **Multiple invalid inputs combined**
- **All fields at boundary values**
- **Mixed valid and invalid scenarios**

---

## Custom Commands

### Navigation Commands
```javascript
cy.navigateToTool('/backtest-asset-class-allocation')
cy.goToAnalysis()
```

### Authentication Commands
```javascript
cy.login('user@example.com', 'password123')
cy.signup({ email, password, firstName, lastName })
cy.logout()
```

### Form Interaction Commands
```javascript
cy.fillFieldByLabel('Start Year', '2020')
cy.selectDropdown('Rebalancing', 'Annual')
cy.fillTicker(1, 'SPY')
cy.fillAllocation(1, '60')
cy.clickAnalyze()
```

### Validation Commands
```javascript
cy.verifyErrorMessage('Invalid email')
cy.verifySuccessMessage('Saved successfully')
cy.verifyResultsDisplayed()
cy.verifyFieldError('Email')
```

### Utility Commands
```javascript
cy.captureResult('test-case-name')
cy.waitForPageLoad()
cy.clearForm()
cy.acceptCookies()
```

---

## Deliverables

### 1. ✅ Complete Cypress Project
- Organized test structure
- 12+ distinct forms tested
- 300+ individual test cases
- Custom reusable commands
- Configuration for multiple browsers

### 2. ✅ Test Execution Evidence
- Screenshots captured for each test case
- Video recordings of test runs
- Cypress Cloud dashboard with test logs
- Pass/fail status for all tests

### 3. ✅ Documentation
- README.md (this file)
- TEST_REPORT.md (summary of results)
- Inline code documentation
- Test case naming convention (TC-XXX-YYY)

### 4. ✅ Cypress Cloud Integration
- Project connected to Cypress Cloud
- Test runs recorded and accessible
- Dashboard screenshots available
- Historical test data tracked

---

## Test Case Naming Convention

Format: `TC-[MODULE]-[TYPE]-[NUMBER]`

### Examples:
- `TC-AUTH-001` - Authentication test case #1
- `TC-BACKTEST-BVA-005` - Backtest BVA test case #5
- `TC-FACTOR-ROBUST-002` - Factor Analysis robust test #2
- `TC-MC-SEC-001` - Monte Carlo security test #1

### Module Codes:
- `AUTH` - Authentication
- `BACKTEST` - Backtest Portfolio
- `FACTOR` - Factor Analysis
- `CORR` - Asset Correlations
- `FS` - Fund Screener
- `MC` - Monte Carlo
- `EF` - Efficient Frontier
- `MV` - Market Valuation
- `REPORT` - Manage Reports
- `BF` - Manage Backfills
- `FEE` - Manage Fees

### Type Codes:
- `BVA` - Boundary Value Analysis
- `ROBUST` - Robust testing
- `SEC` - Security testing
- (no suffix) - Standard ECP test

---

## Test Execution Summary

### Statistics
- **Total Test Suites**: 12
- **Total Test Cases**: 300+
- **Forms Tested**: 12 distinct forms
- **Testing Techniques**: ECP, BVA, Robust Testing
- **Test Duration**: ~45-60 minutes (full suite)

### Browser Compatibility
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Edge
- ✅ Electron (default)

---

## Assignment Requirements Met

✅ **Requirement 1**: Automated all test cases from Assignment 03  
✅ **Requirement 2**: Tested 11+ distinct input forms (12 forms covered)  
✅ **Requirement 3**: Applied ECP and BVA techniques  
✅ **Requirement 4**: Included Sign In and Sign Up authentication tests  
✅ **Requirement 5**: Integrated with Cypress Cloud  
✅ **Requirement 6**: Captured screenshots and execution evidence  
✅ **Requirement 7**: Created comprehensive documentation  
✅ **Requirement 8**: Organized project structure with proper naming  

---

## Notes & Assumptions

1. **Test Data**: Uses realistic test data based on financial analysis tools
2. **Wait Times**: Added strategic waits for page loads and API responses
3. **Screenshots**: Captured at key points for evidence
4. **Error Handling**: Tests verify both success and error scenarios
5. **Black-box Approach**: No access to source code; testing based on UI behavior
6. **Browser**: Primary testing in Chrome; compatible with Firefox and Edge

---

## Future Enhancements

- [ ] Add API testing for backend validation
- [ ] Implement data-driven testing with fixtures
- [ ] Add visual regression testing
- [ ] Integrate with CI/CD pipeline
- [ ] Add performance testing metrics
- [ ] Implement accessibility testing

---

## Contact & Support

For questions or issues:
- Review Cypress documentation: [https://docs.cypress.io/](https://docs.cypress.io/)
- Check Cypress Cloud dashboard for test runs
- Review individual test files for detailed test cases

---

## License

This project is for educational purposes as part of the Software Quality Engineering course assignment.

---

**Last Updated**: November 2025  
**Cypress Version**: 15.6.0  
**Node Version**: 16+

# SQE_Assignment4
