/**
 * Created by tntdi_000 on 8/5/2016.
 */

angular.module('notesApp1', []).factory('ItemService', [function() {
    var items = [
      {id: 1, label: 'Item 0'},
      {id: 2, label: 'Item 1'}
    ];
    return {
      list: function() {
        return items;
      },
      add: function(item) {
        items.push(item);
      }
    };
}]).controller('ItemCtrl', ['ItemService', function(ItemService) {
    var self = this;
    self.items = ItemService.list();
    }]);
