const fs = require('fs').promises;

async function readAndConcatenateFiles() {
  try {
    const [content1, content2] = await Promise.all([
      fs.readFile('file1.txt', 'utf8'),
      fs.readFile('file2.txt', 'utf8')
    ]);
    const combinedContent = content1 + content2;
    console.log('Combined content:');
    console.log(combinedContent);
  } catch (err) {
    console.error('Error reading files:', err);
  }
}
readAndConcatenateFiles();