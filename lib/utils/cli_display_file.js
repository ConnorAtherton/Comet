var fs = require('fs'),
    chalk = require('chalk'),
    path = require('path'),
    color = require('colors');

module.exports = function display_file (arguments) {
  var path_to_file = Array.prototype.slice.call(arguments);
  path_to_file.unshift(__dirname);

  path_to_file  = path_to_file .reduce(function (prev, curr) {
    return prev + '/' + curr;
  })

  var raw = fs.readFileSync(path.join(path_to_file))
              .toString('utf8').split("\n");

  var output = get_colour_output(raw)

  console.log(output)
}

function get_colour_output (raw) {
  return raw.map(function(line) {
      if (line.match('    ')) {
          var prompt = '    $ ',
              isPromptLine = !(!(line.indexOf(prompt) != -1));
          if (isPromptLine) {
              return prompt.green + line.replace(prompt, '');
          }
          else {
              return line.split(/\./g).map( function(char) {
                  if (char === '') {
                      return '.'.grey;
                  }
                  else {
                      return char;
                  }
              }).join('');
          }
      }
      else {
          return '    ' + line.blue;
      }
  }).join("\n");
}
