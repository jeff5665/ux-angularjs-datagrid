/* global angular *///ignore
(function () {//ignore
    var name = 'ex1';
    angular.module(name, ['ux'])
        .controller('tabs', function ($scope) {//ignore
            $scope.tab = 'html';//ignore
        })//ignore
        .controller('ctrl', function ($scope) {
            var i = 0, len = 100, items = [];
            while (i < len) {
                items.push({id: i});
                i += 1;
            }
            $scope.items = items;
        });
}());//ignore