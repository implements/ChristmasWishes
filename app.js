angular.module('ChristmasApplication', []).controller('ChristmasController', function($http, $scope) {	
	
	$http.get('./years/2020.json').success(function(response) {
		$scope.wishes = response;
	});
});
