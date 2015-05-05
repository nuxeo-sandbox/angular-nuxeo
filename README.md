# angular-nuxeo

An AngularJS module for the Nuxeo Automation and REST API. This module wraps the [Nuxeo JavaScript Client](https://github.com/nuxeo/nuxeo-js-client) to make it usable in an AngularJS application.

This is an on-going project, supported by Nuxeo.

## Installation

The `angular-nuxeo` module can be installed through bower:

    $ bower install https://github.com/nuxeo-sandbox/angular-nuxeo.git --save

## Usage

In your AngularJS application, load the `nuxeo` module:

```javascript
angular.module('myApp', [ 'nuxeo' ])
```

To create a Nuxeo client, use the factory `nuxeoClientFactory` exposed by the `nuxeo` module. This factory creates and returns a `nuxeo.Client` object.

Let's create a service to easily inject a Nuxeo client inside your controllers or services.

```javascript
angular
 .module('myApp')
 .service('nuxeoClient', function(nuxeoClientFactory) {
    return nuxeoClientFactory();
  })
```

The `nuxeoClientFactory` accepts an `options` object to configure the Nuxeo client, see [Creating a Client](https://github.com/nuxeo/nuxeo-js-client#creating-a-client) for accepted options.


The Nuxeo client can now be used in your controller, such as:

```javascript
angular.module('myApp')
  .controller('MyCtrl', function ($scope, nuxeoClient) {
    nuxeoClient.document('/').fetch().then(function(doc) {
      $scope.title = doc.title;
      $scope.document = doc;
      ...
    });
  });
```

## Promises and callbacks

All the methods accepting callbacks are overridden to return AngularJS promises (if no callback is passed as argument) to easily integrate into an AngularJS application.

### Samples

```javascript
nuxeoClient.connect(function(error, client) {
  if (error) {
    // cannot connect
    console.log('Client is not connected: ' + error);
  }

  // OK, the returned client is connected
  console.log('Client is connected: ' + client.connected);
});
```

becomes:

```javascript
nuxeoClient.connect.then(function(client) {
  // OK, the returned client is connected
  console.log('Client is connected: ' + client.connected);
}, function(err) {
  // cannot connect
  console.log('Client is not connected: ' + err);
});
```

```javascript
nuxeoClient.document('/').fetch(function(err, res) {
  if (err) {
    console.log('An error occured:' + err);
  }

  console.log('Fetched document: ' + res.title);
});
```

becomes:

```javascript
nuxeoClient.document('/').fetch().then(function(res) {
  console.log('Fetched document: ' + res.title);
}, function(err) {
  console.log('An error occured: ' + err);
});
```

## Reporting Issues

You can follow the developments in the Nuxeo JS Client project of our JIRA bug tracker: [https://jira.nuxeo.com/browse/NXJS](https://jira.nuxeo.com/browse/NXJS).

You can report issues on [answers.nuxeo.com](http://answers.nuxeo.com).


## About Nuxeo

Nuxeo dramatically improves how content-based applications are built, managed and deployed, making customers more agile, innovative and successful. Nuxeo provides a next generation, enterprise ready platform for building traditional and cutting-edge content oriented applications. Combining a powerful application development environment with SaaS-based tools and a modular architecture, the Nuxeo Platform and Products provide clear business value to some of the most recognizable brands including Verizon, Electronic Arts, Netflix, Sharp, FICO, the U.S. Navy, and Boeing. Nuxeo is headquartered in New York and Paris. More information is available at [www.nuxeo.com](http://www.nuxeo.com/).
