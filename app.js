angular.module('ChristmasApplication', []).controller('ChristmasController', function($http, $scope) {	
	
	$http.get('./years/2025.json').success(function(response) {
		$scope.wishes = response;
	});
});
