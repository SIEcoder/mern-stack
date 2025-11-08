const {readFile} = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err)
            } else{
                resolve(data)
            }
        })
    })
}
getText('./contents/second.txt')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
