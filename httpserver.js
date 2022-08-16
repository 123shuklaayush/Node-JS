const http = require('http');
const port= process.env.PORT || 3000 //any port that my process is getting would be accepted
const server = http.createServer((req, res) =>{
    console.log(req)
    res.statusCode = 200   // It tells that what happened with the response like it will tell whether there is any error in server etc.

    res.setHeader('ContentType', 'text/html')  // Tells to client that which type of content is send to the server
    res.end('<h1> I am learning with codewithharry</h1>')
})

server.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
    });