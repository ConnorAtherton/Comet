var cli_display_file = require('../utils/cli_display_file');

module.exports = function help () {
  var path = ['..', '..', 'doc', 'cli', 'help.txt'];
  cli_display_file(path);
};
