angular.module('ChristmasApplication', []).controller('ChristmasController', function($http, $scope) {	
	
	$http.get('./years/2018.json').success(function(response) {
		$scope.wishes = response;
	});

	console.log($scope.wishes);
});
