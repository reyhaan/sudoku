app.controller('rootController', function($scope, gridSolverService) {
	$scope.grid = [
		[0,0,8, 6,2,0, 4,0,3],
		[1,0,0, 0,0,0, 0,8,9],
		[0,0,0, 0,0,4, 0,0,0],

		[4,0,2, 5,9,0, 7,0,0],
		[6,0,0, 0,0,0, 0,0,4],
		[0,0,3, 0,4,1, 8,0,5],

		[0,0,0, 3,0,0, 0,0,0],
		[9,2,0, 0,0,0, 0,0,7],
		[3,6,0, 0,7,2, 1,0,0]
	];

	$scope.solveGrid = function() {
		$scope.solvedGrid = gridSolverService.solve($scope.grid);
	}
});