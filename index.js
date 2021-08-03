const server = require('./api/server');
console.log("Hello World!")
const port = 5000;

// START YOUR SERVER HERE
server.listen(port, () => {
    console.log("listening on port 5000")
})

