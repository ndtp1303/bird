const path = require('path');

// Base URL for FPT Software services page
const BASE_URL = 'https://fptsoftware.com/services-and-industries#services';

// SolveCaptcha API key (authenticates with the solvecaptcha service)
// NOTE: reCAPTCHA site key is extracted dynamically from pages at runtime
const SOLVECAPTCHA_API_KEY = 'e8929b1904235d152b02bd8a0f98fc08';

// Capabilities to scrape under "Digital Technologies & Platforms" (excluding AI)
const CAPABILITIES = [
  'No-code Workflow Platform',
  'Cloud',
  'Data & Analytics',
  'IoT',
  'Hyperautomation',
  'Cybersecurity',
  'Digital Commerce & Experience',
];

// Directory where downloaded case study PDFs are saved
const DOWNLOAD_DIR = path.resolve(__dirname, 'downloads');

// Test data for form fields (used when submitting case study download forms)
const FORM_DATA = {
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  country: 'United States',
  company: 'Test Company',
  jobTitle: 'Software Engineer',
  phone: '+1234567890',
  businessNeeds: 'Looking for digital transformation solutions',
};

module.exports = {
  SOLVECAPTCHA_API_KEY,
  BASE_URL,
  CAPABILITIES,
  DOWNLOAD_DIR,
  FORM_DATA,
};

