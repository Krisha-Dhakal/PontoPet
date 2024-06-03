const http = require("http"); //built-in NodeJS package
//creating server for dynamic activities
const server = http.createServer((req, res)=> {
    //document statements
    //req= request,     res= response
    res.write("I am first NodeJS project!");
    res.end();
});
const PORT = 4000;
//server running status for developer
server.listen(PORT, ()=> {
    console.log(`Server is running at: http://localhost:${PORT}`);
}); 

/**
 * #1 initialize node package:
 * -npm init(npm init -y)
 * 
 * #2 Server configuration with console message of server running status
 * -HTTP server
 * 
 * #3 Check and run/start project
 * -command/scripts, check inside package.json
 * -To run: npm, start
 * 
 * #4 Check on browser window or API testing tool like:
 * -postman
 * -Thunder Client extension of VSCode etc.
 * 
 * Major methods: GET (To retrieve data) and POST (to create/store data)
 * Because, JS works with DOM of HTML documrnt,
 * HTML Document handles only two methods of form. i.e.: GET/POST
 */