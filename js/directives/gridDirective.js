app.directive('grid', function() {
	return {
		restrict: 'AE',
		replace: true,
		templateUrl: 'js/directives/grid.html',
		scope: {
			gridData: '='
		},
		link: function(scope, element, attrs) {
			// Populate an empty solutions table at first
			if(scope.gridData == undefined) {
				scope.gridData = [
					[0,0,0, 0,0,0, 0,0,0],
					[0,0,0, 0,0,0, 0,0,0],
					[0,0,0, 0,0,0, 0,0,0],

					[0,0,0, 0,0,0, 0,0,0],
					[0,0,0, 0,0,0, 0,0,0],
					[0,0,0, 0,0,0, 0,0,0],

					[0,0,0, 0,0,0, 0,0,0],
					[0,0,0, 0,0,0, 0,0,0],
					[0,0,0, 0,0,0, 0,0,0]
				];
			}
		}
	}
});