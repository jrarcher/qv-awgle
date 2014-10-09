/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles  = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('vendor/ember-animated-outlet/ember-animated-outlet.css');
app.import('vendor/ember-animated-outlet/ember-animated-outlet.js');
app.import('vendor/bs-switch/dist/css/bootstrap3/bootstrap-switch.css');
app.import('vendor/bs-switch/dist/js/bootstrap-switch.js');
// app.import('bower_components/jquery-ui/themes/base/core.css');
app.import('bower_components/jquery-ui/themes/cupertino/jquery-ui.min.css');
app.import('bower_components/jquery-ui/ui/core.js');
app.import('bower_components/jquery-ui/ui/datepicker.js');

var bootstrapDir = 'bower_components/bootstrap-sass-official/assets';

// select bootstrap JavaScript components to include
var bootstrapComponents = [
'affix',
'alert',
'button',
'carousel',
'collapse',
'dropdown',
'modal',
'tooltip',
'popover',
'scrollspy',
'tab',
'transition'];

for (var index in bootstrapComponents) {
  app.import(bootstrapDir + '/javascripts/bootstrap/' + bootstrapComponents[index] + '.js');
}

var extraAssets = pickFiles(bootstrapDir + '/fonts/bootstrap', {
  srcDir: '/',
  destDir: '/assets/bootstrap'
});

module.exports = mergeTrees([app.toTree(), extraAssets]);
