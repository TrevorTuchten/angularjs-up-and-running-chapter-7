/**
 * Created by tntdi_000 on 8/5/2016.
 */

angular.module('simpleCtrl1App', [])
  .controller('SimpleCtrl', ['$location', function($location) {
    var self = this;
    self.navigate = function() {
      $location.path('/some/where/else');
    };
  }]);
