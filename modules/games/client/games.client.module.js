(function (app) {
  'use strict';

  app.registerModule('games', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  // app.registerModule('games.admin', ['core.admin']);
  // app.registerModule('games.admin.routes', ['core.admin.routes']);
  app.registerModule('games.services');
  app.registerModule('games.routes', ['ui.router', 'core.routes', 'games.services']);
}(ApplicationConfiguration));
