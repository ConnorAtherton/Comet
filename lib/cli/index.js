var Comet = require('../Comet'),
    chalk = require('chalk');

options = {
  help: require('./help'),
  create: require('./create')
}

module.exports = function (argv) {
  if(argv.help) return options.help();
  bind_emitters(argv);

  switch (argv._[0]) {
  case 'create':
    options.create(argv._[1]);
    break;
  default:
    options.help()
  }
}

// subscribe to all messages being emitted
// and react based on the settings passed in
function bind_emitters (argv) {
  silent = argv.silent || argv.s || argv.q;
  verbose = argv.verbose || argv.v;

  if(verbose) {
    Comet.on('log', function (message) {
      console.log(message);
    });

    Comet.on('warn', function (message) {
      console.log(chalk.orange(message));
    });

    Comet.on('error', function (message) {
      console.log(chalk.red(message));
      process.exit(1);
    });

    Comet.on('build', function (type, message) {
      console.log(chalk.yellow(type + ':  ' + message));
    });
  }
}
