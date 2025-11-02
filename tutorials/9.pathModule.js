// File Module

const path = require('path')

//console.log(path.sep)

// the .join() method concatenates directories into one normalized directory
const filePath = path.join('./contents', 'subfolder', 'text.txt')
//console.log(`file path is: ${filePath}`)

// we can also just fetch the basename 
const base = path.basename(filePath)
//console.log(`The base name is: '${base}'`)

// to fetch absolute file paths we use the .resolve() method
const absolutePath = path.resolve(__dirname, filePath)
//console.log(`The absolute path is: ${absolutePath}`)
//console.log(`The directory is: ${__dirname}`)

const contentsFolder = path.join('./contents/')

module.exports = {filePath, base, absolutePath, contentsFolder}