import { readdir } from 'fs/promises';

async function readDirectory(dirName, result = { files: [], folders: [] }) {

    let files = await readdir(dirName, { withFileTypes: true });
    let promises = files.map(file => {
        let filePath = `${dirName}/${file.name}`;
        if (file.isDirectory()) {
            result.folders.push(filePath);
            return readDirectory(filePath, result);
        }
        else
            result.files.push(filePath);
    }).filter(p => p !== undefined);

    await Promise.all(promises);
    return result;
}

let dirName = process.argv[2];
readDirectory(dirName).then(console.log);




