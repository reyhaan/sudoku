app.controller('rootController', function($scope, gridSolverService) {
	// Supposed to be one of the hardest problem taken from the internet.
	// $scope.grid = [
	// 	[8,0,0, 0,0,0, 0,0,0],
	// 	[0,0,3, 6,0,0, 0,0,0],
	// 	[0,7,0, 0,9,0, 2,0,0],

	// 	[0,5,0, 0,0,7, 0,0,0],
	// 	[0,0,0, 0,4,5, 7,0,0],
	// 	[0,0,0, 1,0,0, 0,3,0],

	// 	[0,0,1, 0,0,0, 0,6,8],
	// 	[0,0,8, 5,0,0, 0,1,0],
	// 	[0,9,0, 0,0,0, 4,0,0]
	// ];

	// $scope.grid = [
	// 	[0,0,8, 6,2,0, 4,0,3],
	// 	[1,0,0, 0,0,0, 0,8,9],
	// 	[0,0,0, 0,0,4, 0,0,0],

	// 	[4,0,2, 5,9,0, 7,0,0],
	// 	[6,0,0, 0,0,0, 0,0,4],
	// 	[0,0,3, 0,4,1, 8,0,5],

	// 	[0,0,0, 3,0,0, 0,0,0],
	// 	[9,2,0, 0,0,0, 0,0,7],
	// 	[3,0,6, 0,7,2, 1,0,0]
	// ];

	// $scope.grid = [
	// 	[9,0,0, 3,0,0, 0,0,0],
	// 	[0,0,6, 0,0,0, 3,9,2],
	// 	[0,0,5, 1,0,0, 6,4,0],

	// 	[8,5,0, 0,0,0, 0,0,0],
	// 	[0,0,3, 0,4,0, 1,0,0],
	// 	[0,0,0, 0,0,0, 0,2,8],

	// 	[0,6,4, 0,0,8, 5,0,0],
	// 	[7,1,8, 0,0,0, 2,0,0],
	// 	[0,0,0, 0,0,4, 0,0,3]
	// ];

	// Given puzzle question
	$scope.grid = [
		[8,5,6, 0,1,4, 7,3,0],
		[0,9,0, 0,0,0, 0,0,0],
		[2,4,0, 0,0,0, 1,6,0],

		[0,6,2, 0,5,9, 3,0,0],
		[0,3,1, 8,0,2, 4,5,0],
		[0,0,5, 3,4,0, 9,2,0],

		[0,2,4, 0,0,0, 0,7,3],
		[0,0,0, 0,0,0, 0,1,0],
		[0,1,8, 6,3,0, 2,9,4]
	];

	$scope.solveGrid = function() {
		var grid = angular.copy($scope.grid);
		gridSolverService.solve(grid);
		$scope.solvedGrid = grid;
	}
});