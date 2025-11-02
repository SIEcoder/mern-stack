// File system Async

const {readFile, writeFile} = require('fs')

readFile(
    './contents/first.txt',
    'utf8',
    (err, result) => {
        if (err){
            console.log(err)
            return;
        }
        const first = result
        readFile(
            './contents/second.txt',
            'utf-8',
            (err, result) => {
                if(err){
                    console.log(err)
                    return
                }
                const second = result
                writeFile(
                './contents/writeAsync.txt',
                `First file content: ${first}, Second file content: ${second}`,
                {flag: 'a'},
                (err, result) => {
                    if(err){
                        console.log(err)
                        return;
                    }
                    console.log(result)
                }
        )
            }
        )
    }
)
