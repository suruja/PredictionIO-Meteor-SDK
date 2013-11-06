Package.describe({
  summary: "PredictionIO SDK for Meteor",
});

Package.on_use(function (api) {
  api.use(['http', 'underscore', 'check'], 'server');
  api.add_files([
    'lib/predictionio.js',
  ], 'server'
  );
});

Package.on_test(function (api) {
  api.use(['http', 'underscore', 'check', 'tinytest'], 'server');
  api.add_files([
    'lib/predictionio.js',
    'tests.js',
  ], 'server'
  );
});
