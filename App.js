const { timeStamp } = require('console');
const fs= require('fs');
function countWordOccurences(filename){
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,'utf8',(err,data)=>{
            if(err){
                reject(err);
                return;
            }
            const words=data.toLowerCase().match(/\b\w+\b/g);
            if(!words){
                resolve([]);
                return ;
            }
            const wordCount={};
            words.forEach(word=>{
                if(wordCount[word]){
                    wordCount[word]++;
                }
                else{
                    wordCount[word]=1;
                }
            });
            const sortedWordCount=Object.entries(wordCount).sort((a,b)=>b[1]-a[1]).slice(0,10);
            resolve(sortedWordCount);
        })
    })
}

const filename='App.js';
countWordOccurences(filename).then(topWords=>{
    console.log("10 words");
    topWords.forEach(([word,count],index)=>{
        console.log(`${index+1}.${word}:${count} time`);
    })
})
.catch(err=>console.error(err ));
