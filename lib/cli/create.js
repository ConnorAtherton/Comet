var chalk = require('chalk');

module.exports = function (app_name) {
  if(!app_name) return console.log('please specify an app name');
  console.log('\n', chalk.yellow('creating your new comet app now') + ' ' + chalk.blue(app_name), '\n');
}
