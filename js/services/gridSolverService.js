app.service('gridSolverService', function() {

	var getUnAssignedLocation = function(grid) {
		for(row = 0; row < grid.length; row++) {
			for(col = 0; col < grid.length; col++) {
				if(grid[row][col] == 0) {
					return [row, col];
				}
			}
		}
		return false;
	};

	var isUniqueInRow = function(grid, row, cellValue) {
		for (var i = 0; i < grid.length; i++) {
			if (grid[row][i] == cellValue) {
				return true;
			}
		}
		return false;
	};

	var isUniqueInColumn = function(grid, col, cellValue) {
		for (var j = 0; j < grid.length; j++) {
			if (grid[j][col] == cellValue) {
				return true;
			}
		}
		return false;
	};

	var isUniqueInSection = function(grid, startRow, startCol, cellValue) {
		for (var i = 0; i < 3; i++)
			for (var j = 0; j < 3; j++)
					if (grid[i+startRow][j+startCol] == cellValue) {
						return true;
					}
		return false;
	};

	// Find if the value selected can be inserted or not based on sudoku rules.
	var isSafe = function(grid, row, col, cellValue) {
		return !isUniqueInSection(grid, row-(row%3), col-(col%3), cellValue) &&
				!isUniqueInColumn(grid, col, cellValue) &&
				!isUniqueInRow(grid, row, cellValue);
	};

	var solveRecursively = function(grid) {

		var row, col;

		var unAssignedLocation = getUnAssignedLocation(grid);

		if(unAssignedLocation) {
			row = unAssignedLocation[0];
			col = unAssignedLocation[1];
		}

		// If there are no unassigned location, it means we have solved the puzzle, go! get some beer ;)
		if(!unAssignedLocation) {
			return true;
		}

		for(var cellValue = 1; cellValue <= grid.length; cellValue++) {
			if(isSafe(grid, row, col, cellValue)) {

				// Put in the cell value.
				grid[row][col] = cellValue;

				// Return if grid is filled up completely.
				if(solveRecursively(grid)) {
					return true;
				}

				// Else, reset the element that is filled and backtrack.
				grid[row][col] = 0;
			}
		}
		// Need this for recursion.
		return false;
	};

	// Using backtracking algorithm
	this.solve = function(grid) {
		solveRecursively(grid);
	}
});