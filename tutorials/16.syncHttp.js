const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        return res.end('Welcome to our home page, please feel at home lol')
    }
    else if(req.url === '/about'){
        // Blocking code. This loop should overload the server and make it unresponsive
        for (let i = 0; i < 100000; i++) {
            for (let j = 0; j < 1000; j++){
            console.log(i)
        }
        }
        return res.end('Welcome to our about page')
    }
    else if (req.url === '/support'){
        return res.end('Welcome to our support page')
    }
    res.end("Oopsie! We can't find the page you're looking for")
})

server.listen(5000, () => {
    console.log('Server listening on port 5000....')
})