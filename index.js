const fs = require('fs');
const readline = require("readline");

// Init
const stream = fs.createReadStream('./sample.csv');
const rl = readline.createInterface( { input: stream });

let data = [];
rl.on("line", (row) => {
    data.push(row.split(","));
});

rl.on("close", async () => {
    console.clear()
    console.log(`Done! Parsed file of ${data.length} lines`);
    const { array, data: calc, rest} = parseToAverage(data);

    console.log( array, calc ,rest );


})


 function parseToAverage(array) {
    let data = [];
    let res = [];
    let index = 1;

    data.push(array[0][0].split("T")[0]);
    res.push(array[0][1]);

    while (array[index][0].split("T")[0] === array[index -1][0].split("T")[0]) {
        res.push(array[index][1])
        index++;
    }
    data.push(res);
  
    return { array, data, rest: index }
    


}
