const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
try {
await fs.writeFile(fileName, fileContent);
console.log(${fileName} has been created!);
} catch (error) {
console.error(Error creating ${fileName}: , error);
}
};

const myFileReader = async (fileName) => {
try {
const fileContent = await fs.readFile(fileName, 'utf-8');
console.log(File content of ${fileName}: , fileContent);
return fileContent;
} catch (error) {
console.error(Error reading ${fileName}: , error);
}
};

const myFileUpdater = async (fileName, fileContent) => {
try {
const originalContent = await myFileReader(fileName);
const updatedContent = originalContent + fileContent;
await fs.writeFile(fileName, updatedContent);
console.log(${fileName} has been updated!);
} catch (error) {
console.error(Error updating ${fileName}: , error);
}
};

const myFileDeleter = async (fileName) => {
try {
await fs.unlink(fileName);
console.log(${fileName} has been deleted!);
} catch (error) {
console.error(Error deleting ${fileName}: , error);
}
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };






// const fs = require('fs/promises')

// const myFileWriter = async (fileName, fileContent) => {
// 	// write code here
// 	// dont chnage function name
// }

// const myFileReader = async (fileName) => {
// 	// write code here
// 	// dont chnage function name
// }


// const myFileUpdater = async (fileName, fileContent) => {
// 	// write code here
// 	// dont chnage function name
// }

// const myFileDeleter = async (fileName) => {
// 	// write code here
// 	// dont chnage function name
// }



// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
