var chalk = require('chalk');
var EventEmitter = require('events').EventEmitter,
var merge = require('utils-merge');

module.exports = Comet;

function Comet () {
  merge(this, EventEmitter.prototype);
}

// Used when a new server is started
Comet.prototype.init = function () {

};

// Used to start a server
Comet.prototype.run = function () {

};

// Used to stop a server
Comet.prototype.stop = function () {

};
