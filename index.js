const { OpenAI } = require("openai");
const fs = require('fs');
const { exec } = require('child_process');

const filePath = './src/math.js';
const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
const outputFilePath = filePath.replace('src', 'tests').replace('.js', '.test.js');
let fileContent = '';

//Read files chunk
readStream.on('data', (chunk) => {
  fileContent += chunk;
});

//End of file Read
readStream.on('end', async () => {
  const writeStream = fs.createWriteStream(outputFilePath);
  await main(fileContent, writeStream);

  exec('npm test', (error, stdout, stderr) => {
    if (error) {
      console.error(`Issue in jest test: ${error}`);
      //main(stdout, writeStream);
    }
    
    // stdout и stderr съдържат изхода от командата
    console.log(`npm test output: ${stdout}`);
  });
});

const openai = new OpenAI({
  apiKey: "Add Token Key",
});

async function main(fileContent, writeStream) {
  let ivan = '';
  const stream = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
   //model: 'text-davinci-003',
    messages: [{ role: 'user', content: `
    Include only code without unnecessary comments!!
    My test file is located ${filePath}, my tests directory is located'./tests'
    I want you to write me professional tests for the code I provide you with included js docs and imports.
    ${fileContent}` }],
    stream: true,
  });

  for await (const part of stream) {
    let chunk =  part.choices[0]?.delta?.content || '';
    writeStream.write(chunk);
    //Display stream writer in console.
    process.stdout.write(part.choices[0]?.delta?.content || '');
  }
  writeStream.end();
  return ivan;
}

//tAiResponse('Напиши ми unit тестове с jest за всички методи които ти предоставям. За тестовете използвам jest + mocka. В отговора вклчи и всички библиотеки, които трябва да добавя ' + jsCode);