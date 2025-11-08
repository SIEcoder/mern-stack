const {readFile, writeFile} = require('fs').promises

const start = async() => {
    try{
        const first = await readFile('./contents/first.txt', 'utf8')
        const second = await readFile('./contents/second.txt', 'utf8')
        await writeFile('./contents/writtenByPromise', 
        `This text combines contents of the first and second text files such that we now have:
         ${first} and ${second}
        `)
        const writtenFile = await readFile('./contents/writtenByPromise', 'utf8')
        console.log(writtenFile)
    } catch(err){
        console.log(err)
    }
    
    
}

start()