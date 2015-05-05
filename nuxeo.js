(function() {
  'use strict';

  angular
    .module('nuxeo', [])
    .factory('nuxeoClientFactory', nuxeoClientFactory);

  function nuxeoClientFactory($q) {
    var clientConnect = nuxeo.Client.prototype.connect;
    nuxeo.Client.prototype.connect = function(callback) {
      if (!angular.isUndefined(callback)) {
        // callback
        clientConnect.call(this, callback);
      } else {
        var deferred = $q.defer();
        clientConnect.call(this, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var clientFetchOperationDefinitions = nuxeo.Client.prototype.fetchOperationDefinitions;
    nuxeo.Client.prototype.fetchOperationDefinitions = function(callback) {
      if (!angular.isUndefined(callback)) {
        // callback
        clientFetchOperationDefinitions.call(this, callback);
      } else {
        var deferred = $q.defer();
        clientFetchOperationDefinitions.call(this, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var operationExecute = nuxeo.Operation.prototype.execute;
    nuxeo.Operation.prototype.execute = function(options, calback) {
      if (!angular.isUndefined(callback) || typeof options === 'function') {
        // callback
        operationExecute.call(this, options, callback);
      } else {
        var deferred = $q.defer();
        operationExecute.call(this, options, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var requestGet = nuxeo.Request.prototype.get;
    nuxeo.Request.prototype.get = function(options, callback) {
      if (!angular.isUndefined(callback) || typeof options === 'function') {
        // callback
        requestGet.call(this, options, callback);
      } else {
        var deferred = $q.defer();
        requestGet.call(this, options, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var requestPost = nuxeo.Request.prototype.post;
    nuxeo.Request.prototype.post = function(options, callback) {
      if (!angular.isUndefined(callback) || typeof options === 'function') {
        // callback
        requestPost.call(this, options, callback);
      } else {
        var deferred = $q.defer();
        requestPost.call(this, options, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var requestPut = nuxeo.Request.prototype.put;
    nuxeo.Request.prototype.put = function(options, callback) {
      if (!angular.isUndefined(callback) || typeof options === 'function') {
        // callback
        requestPut.call(this, options, callback);
      } else {
        var deferred = $q.defer();
        requestPut.call(this, options, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var requestDelete = nuxeo.Request.prototype.delete;
    nuxeo.Request.prototype.delete = function(options, callback) {
      if (!angular.isUndefined(callback) || typeof options === 'function') {
        // callback
        requestDelete.call(this, options, callback);
      } else {
        var deferred = $q.defer();
        requestDelete.call(this, options, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var requestExecute = nuxeo.Request.prototype.execute;
    nuxeo.Request.prototype.execute = function(options, callback) {
      if (!angular.isUndefined(callback) || typeof options === 'function') {
        // callback
        requestExecute.call(this, options, callback);
      } else {
        var deferred = $q.defer();
        requestExecute.call(this, options, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var documentFetch = nuxeo.Document.prototype.fetch;
    nuxeo.Document.prototype.fetch = function(callback) {
      if (!angular.isUndefined(callback)) {
        // callback
        documentFetch.call(this, callback);
      } else {
        var deferred = $q.defer();
        documentFetch.call(this, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var documentCreate = nuxeo.Document.prototype.create;
    nuxeo.Document.prototype.create = function(data, callback) {
      if (!angular.isUndefined(callback)) {
        // callback
        documentCreate.call(this, data, callback);
      } else {
        var deferred = $q.defer();
        documentCreate.call(this, data, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var documentCopy = nuxeo.Document.prototype.copy;
    nuxeo.Document.prototype.copy = function(data, callback) {
      if (!angular.isUndefined(callback)) {
        // callback
        documentCopy.call(this, data, callback);
      } else {
        var deferred = $q.defer();
        documentCopy.call(this, data, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var documentMove = nuxeo.Document.prototype.move;
    nuxeo.Document.prototype.move = function(data, callback) {
      if (!angular.isUndefined(callback)) {
        // callback
        documentMove.call(this, data, callback);
      } else {
        var deferred = $q.defer();
        documentMove.call(this, data, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var documentUpdate = nuxeo.Document.prototype.update;
    nuxeo.Document.prototype.update = function(data, callback) {
      if (!angular.isUndefined(callback)) {
        // callback
        documentUpdate.call(this, data, callback);
      } else {
        var deferred = $q.defer();
        documentUpdate.call(this, data, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var documentDelete = nuxeo.Document.prototype.delete;
    nuxeo.Document.prototype.delete = function(callback) {
      if (!angular.isUndefined(callback)) {
        // callback
        documentDelete.call(this, callback);
      } else {
        var deferred = $q.defer();
        documentDelete.call(this, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var documentSave = nuxeo.Document.prototype.save;
    nuxeo.Document.prototype.save = function(callback) {
      if (!angular.isUndefined(callback)) {
        // callback
        documentSave.call(this, callback);
      } else {
        var deferred = $q.defer();
        documentSave.call(this, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var documentChildren = nuxeo.Document.prototype.children;
    nuxeo.Document.prototype.children = function(callback) {
      if (!angular.isUndefined(callback)) {
        // callback
        documentChildren.call(this, callback);
      } else {
        var deferred = $q.defer();
        documentChildren.call(this, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    var uploaderExecute = nuxeo.Uploader.prototype.execute;
    nuxeo.Uploader.prototype.execute = function(options, callback) {
      if (!angular.isUndefined(callback) || typeof options === 'function') {
        // callback
        uploaderExecute.call(this, options, callback);
      } else {
        var deferred = $q.defer();
        uploaderExecute.call(this, options, function(err, res) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve(res);
          }
        })
        return deferred.promise;
      }
    };

    return function(config) {
      return new nuxeo.Client(config);
    }
  }
})();
