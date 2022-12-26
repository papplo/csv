const fs = require('fs');
const readline = require("readline");
const stream = fs.createReadStream('./data.csv');

const rl = readline.createInterface( { input: stream });

let data = [];
let averageData = [];
rl.on("line", (row) => {
    data.push(row.split(","));
});

rl.on("close", () => {
    console.log('done');
    reduceToAverage(data);
    console.log(averageData)
})

rl.on("line", (row) => {
    console.log(row)
})

function averageDay(serie) {
    if (Array.isArray(serie)) {
        console.log(serie.length)

        serie.map(date_temp => {
            if (Array.isArray(date_temp)) {
                let averageDate;
                let averageTemp;

                date_temp.reduce((prev, curr, arr) => {
                    const [date, temp] = curr;
                    averageDate = date.split("T")[0];
                    prev = prev + (temp / arr.length).toPrecision(1)
                }, 0)
            }
        })
    }
}

function reduceToAverage(series) {
    let day = []
    for (let index = 0; index < series.length; index++) {
        if (index === 0) {
            day.push(series[index]);
            break;
        };

        const seriesToday = series[index];
        const seriesYesterday = series[index -1];
        if (seriesToday.split("T") === seriesYesterday.split("T")) {
            day.push(seriesToday);
            break;
        } else {
            const avg = averageDay(day);
            console.log(avg)
            averageData.push(avg);
            day = [];
        }
    }
}