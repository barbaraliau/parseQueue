var app = angular.module('parseQ');

  app.factory('httpRequestInterceptor', function () {
    return {
      request: function (config) {
        config.headers = {'X-Parse-Application-Id': 'p1zAzqprTRGsVpA6Ta2d9tQUO9ga01jz551Wz2j3', 'X-Parse-REST-API-Key': 'QdSvDQZTxMBHq5YpjIGafMVfbDdxOKfojJFkscdF'}
        return config;
      }
    };
  });