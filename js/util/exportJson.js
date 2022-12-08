import fs from 'fs';

export function exportJson(data) {
    console.log("##### START JSON_DATA DOWNLOAD #####");
    fs.writeFileSync('./data.json', JSON.stringify(data));
    console.log("##### END JSON_DATA DOWNLOAD #####");
}

