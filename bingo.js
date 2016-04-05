function generateGrids() {
        var grid = [];
        while (grid.length < 25) {
            var newNum = Math.floor(Math.random() * 75) + 1;
            if (grid.indexOf(newNum) == -1) {
                grid.push(newNum);
            }
            console.log(grid);
        }
}
generateGrids();