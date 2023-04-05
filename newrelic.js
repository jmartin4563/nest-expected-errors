exports.config = {
  app_name: 'Nest.js Expected Errors Example',
  license_key: process.env.NR_KEY,
  error_collector: {
    expected_status_codes: [401],
  },
};
