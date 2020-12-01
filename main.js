// Fetch Broswer Functions
const { performOperation } = require('./browser')

const http = require('http')

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'})

    // Send back a response and end the connection
    res.end('Hello World!\n')
})

// Start the server on port 3000
app.listen(3000, '127.0.0.1')

// Fetch the link from environment
var link = 'https://google.com'

// Fetch BrowserName
var browserName = ''

// Set Broswer Name to be the chrome
browserName = 'chrome'
performOperation(browserName, link)

// Set Browser Name to be the firefox
browserName = 'firefox'
performOperation(browserName, link)

// Console the confirmation
console.log('Node server running on port 3000')

