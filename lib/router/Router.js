module.exports = Router;

function Router () {
  this.routes = {};
}

Router.prototype.init = function (first_argument) {

};

// remove all current router from the application
Router.prototype.flush = function (first_argument) {

};

/*
 * Methods for declaring a route.
 * Will be used in the routes.js file somewhere.
 *
 * Example:
 *
 *    Router.get('/about', cb); -> pass through req and res params
 *    Router.get('/about', 'Controller#method'); -> pass params to controller
 *
 */

Router.prototype.all = function (path, closure) {
  // body...
};

Router.prototype.get = function (path, closure) {
  // body...
};

Router.prototype.post = function (path, closure) {
  // body...
};

Router.prototype.put = function (path, closure) {
  // body...
};

Router.prototype.delete = function (path, closure) {
  // body...
};

// not sure on this one yet.
// Use to generate a RESTful CRUD api for
// client side apps like backbone and ember to consume.
//
// Could this create both socket and REST? By passing in a config
// object one could be disabled?
//
Router.prototype.resource = function (resource_name, config) {
  // body...
};

// Need something to generate and API for websockets
// too. Need to enforce some kind of API standard
// for operating with both REST and socket.io.
Router.prototype.socket = function (first_argument) {
  // body...
};
