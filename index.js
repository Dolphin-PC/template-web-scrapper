import { imageDownload } from './js/util/imageDownload.js'
import { exportJson } from './js/util/exportJson.js';
import { customScrapper } from './js/customScrapper.js';

let url = "https://artvee.com/";

exec(url);



async function exec(_url) {
    const res = await customScrapper(_url);

    let jsonData = [];

    console.log("##### START IMAGE DOWNLOAD #####");
    for await (const item of res) {
        await imageDownload(item.src, item.title);
        jsonData.push({
            imgResourceName: item.title,
            imgDisplayName: item.title
        });
    }
    console.log("##### END IMAGE DOWNLOAD #####");

    exportJson(jsonData);

}



