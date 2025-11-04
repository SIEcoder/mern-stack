// HTTP module intro
const {createServer} = require('http');

const server = createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about'){
        res.end('Here is our short history')
    }
    else if (req.url === '/support'){
        res.end(`
            <p>Reach our 24/7 customer support team @ +234 8069979021</p>
            `)
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href="/">Back to home</a>
        `)
        }
    console.log(req)
})

server.listen(5000)



