let grid = [
    ["X", "O", "x", "O", "X"],
    ["O", "X", "O", "O", "O"],
    ["x", "O", "X", "O", "x"],
    ["O", "O", "O", "X", "O"],
    ["X", "x", "O", "O", "X"]
];

let count=0

for(let i=0; i<5; i++)
{
    for(let j=0; j<5; j++)
    {
        if(grid[i][j]==="X")
        {
            count++
           console.log( "[" + i + "] " + "[" + j + "]" )
        }
    }
}console.log("Total X:", count);