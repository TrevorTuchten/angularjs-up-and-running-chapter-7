/**
 * Created by tntdi_000 on 8/5/2016.
 */

angular.module('serverApp', [])
    .controller('MainCtrl', ['$http', function ($http) {
        var self = this;
        self.items = [];
        self.errorMessage = '';

        $http.get('/api/note')
            .then(function (response) {
                self.items = response.data;
            }, function (errResponse) {
                self.errorMessage = errResponse.data.msg;
            });
    }]);
