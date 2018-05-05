const groupRoutes = require('./group');
const matchRoutes= require('./matches')

module.exports = function(app, db) {
  groupRoutes(app, db);
  matchRoutes(app,db);
  // Other route groups could go here, in the future
};