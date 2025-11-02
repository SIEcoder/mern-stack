// Synchronous file module

const {readFileSync, writeFileSync} = require('fs')

const firstFile = readFileSync('./contents/first.txt', 'utf8')
const secondFile = readFileSync('./contents/second.txt', 'utf8')

let contentArray = [firstFile, secondFile]
let index = 0;

const consoleLog = () => {
    for (content in contentArray){
        console.log(`${index += 1}. ${contentArray[content]}`)
    }
}
consoleLog()

// Write to file
writeFileSync(
    './contents/write.txt',
    `First file content: ${firstFile} Second file's content ${secondFile}`
)

const writtenFile = readFileSync('./contents/write.txt', 'utf8')
console.log(writtenFile)

// To append
writeFileSync(
    './contents/write.txt',
    'This text was appended',
    {flag: 'a'}
)
console.log(writtenFile)
