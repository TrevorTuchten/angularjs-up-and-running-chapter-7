/**
 * Created by tntdi_000 on 8/5/2016.
 */

angular.module('notesApp1Mocks', []).factory('ItemService', [function() {
    return {
      list: function() {
        return [{id: 1, label: 'Mock'}];
      }
    };
}]);
