// Events

const EventEmitter = require('events')

const customEmitter = new EventEmitter()


customEmitter.on('response', (username, id) => {
    console.log(`data received by ${username}, with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log(`Some other logic`)
})

setTimeout(() => {
    console.log('5 seconds elapsed')
    customEmitter.emit('response', 'BigSie', 24, 'logic')
}, 5000)

