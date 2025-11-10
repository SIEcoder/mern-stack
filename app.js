// Streams are data-handling objects that enable piece-by-piece loading of files, instead of first loading everything on to memory

const {writeFile} = require('fs').promises

const write = async() => {
    let content = ''
    let count = 0
    for (let i = 0; i < 10000001; i++){
        count++
        content +=  `Hello world with index: ${i}\n`
    }
    console.log(`finished counting to ${count}`)
    await writeFile('./contents/bigFile.txt', content)


    console.log('Finished running ☑️')
}

write()