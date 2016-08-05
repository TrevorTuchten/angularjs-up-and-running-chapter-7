/**
 * Created by tntdi_000 on 8/5/2016.
 */

angular.module('simpleCtrl2App', [])
  .controller('SimpleCtrl2', ['$location', '$window',
    function($location, $window) {
      var self = this;
      self.navigate1 = function() {
        $location.path('/some/where');
      };
      self.navigate2 = function() {
        $location.path('/some/where/else');
      };
    }]);
