angular.module('ChristmasApplication', []).controller('ChristmasController', function($http, $scope) {	
	
	$http.get('./years/2019.json').success(function(response) {
		$scope.wishes = response;
	});
});
