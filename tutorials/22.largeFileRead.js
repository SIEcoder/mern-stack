const {readFile} = require('fs').promises
const {createServer} = require('http')

const server = createServer(async (req, res) => {
    if (req.url === '/'){
        return res.end('Welcome to the homepage')
    } else if(req.url === '/file'){
        try {
            const bigFile = await readFile('./contents/bigFile.txt', 'utf8')
            res.end(`We'll display the content of 'bigFile.txt':
                \n\n <p>${bigFile}</p>
                `)
        } catch(error){
            res.end(`Error details: ${error.message}`)
        }
    }
    res.end('Page not found')
})
const port = 5000
server.listen(port, () => {
    console.log(`listening on port ${port}....`)
})