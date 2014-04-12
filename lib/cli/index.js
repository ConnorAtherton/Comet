var Comet = require('../Comet'),
    chalk = require('chalk');

options = {
  help: require('./help'),
  create: require('./create')
}

module.exports = function (args) {
  if(args.help) return options.help();

  switch (args._[0]) {
  case 'create':
    options.create(args._[1]);
    break;
  default:
    options.help()
  }
}
