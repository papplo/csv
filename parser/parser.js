import { argv } from 'node:process';
import { createInterface } from "readline";
import { createReadStream, mkdirSync, writeFileSync, existsSync } from 'fs';

// Init
if (!argv[2]) {
    console.log('Please provide a csv file to parse');
    process.exit(0);
}

let data = [];
let rl;
const filename = argv[2];
try {
    const stream = createReadStream(`${process.cwd()}/parser/data/${filename}`);
    rl = createInterface({ input: stream });
} catch (error) {
    throw new Error(error);
}

rl.on("line", readLineToDataset);

rl.on("close", parseCallback);

function parseCallback() {
    console.clear();
    console.log(`Done! Parsed file of ${data.length} lines`);

    if (data.length > 1) {
        let parsedResult = parse(data);
        let res = write('/output/', 'parsed', serializeToCsv(parsedResult));
        console.log(`Writing file to ${res}`);
    } 
    process.exit()
}

function readLineToDataset(line) { 
    data.push(line.split(','))
};

function parse(dataSet) {
    const result = dataSet.reduce((prev, curr, array) => {
        const [dateTime, temperature] = curr;
        const [date, time] = dateTime.split("T");

        if (!prev.has(date)) {
            prev.set(date, Array.from([temperature]))
        } else {
            const previousTemperatures = prev.get(date);
            prev.set(date, [...previousTemperatures, temperature])
        }
        return prev

    }, new Map());

    return Array.from(result.entries()).map(([day, temps]) => {
        let sumTemps = temps.reduce((p, c) => Number(p) + Number(c), 0);
        let avgTemp = 0 + sumTemps / temps.length;
        let shortFormat = Number.parseFloat(avgTemp).toFixed(1);
        return [day, shortFormat]
    })
};

function serializeToCsv(data) {
    return data.join('\n')
};

function write(dirPath, fileEnding, writeableData) {
    // create path
    const path = process.cwd() + dirPath;
    let processedFilename = [filename.split('.')[0], fileEnding].concat(filename.split('.')[1]).join('.')
    
    // create dir
    mkdirSync(path, { recursive: true }, (error) => {
        if (error) {
            console.error('An error ocurred creating output path:', error);
        }
    });

    // check if file exists
    if(!existsSync(`${path}${processedFilename}`)) {
        console.log("File not found");
    } else {
        console.log('A file exists with name:', processedFilename);
    }

    // create file and write data
    writeFileSync(`${path}/${processedFilename}`, writeableData, (error) => {
        if (error) {
            console.error('an error ocurred writing your file:', error);
        }
    })

    return [path, processedFilename].join('');
    
}