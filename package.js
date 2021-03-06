Package.describe({
  name: 'dinf:header',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'pacote contendo cabeçalho padrão para aplicações',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    'templating',
    'underscore',
    'reactive-var',
    'dinf:menu@1.0.0'
  ],['client']);

  api.addFiles([
    'lib/modules/header.js',
    'lib/templates/header.html',
    'lib/templates/header.js'
  ],['client']);

  api.export("Header", ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dinf:header');
});
