/**
 * Created by tntdi_000 on 8/5/2016.
 */

describe('SimpleCtrl', function() {
  beforeEach(module('simpleCtrl1App'));

  var ctrl, $loc;
  beforeEach(inject(function($controller, $location) {
    ctrl = $controller('SimpleCtrl');
    $loc = $location;
  }));

  it('should navigate away from the current page', function() {
    $loc.path('/here');
    ctrl.navigate();
    expect($loc.path()).toEqual('/some/where/else');
  });
});