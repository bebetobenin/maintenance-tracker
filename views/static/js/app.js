var http = require('http');
var file = require('file-system');
var fs = require('fs');
var server = http.createServer(function (req, resp) {
    
    if (req.url === "") {
        fs.readFile("../../views/mainlayout.html", function (error, page) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(page + '<h1>Welcome</h1>');
            }
             
            resp.end();
        });
    } else if (req.url === "/viewrequests") {
        fs.readFile("../../views/viewrequests.html", function (error, page) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(page);
            }
             
            resp.end();
        });
    } else if (req.url == "/newrequest") {
        fs.readFile('../../views/newrequest.html', function (error, page) {
        if (error) {
            resp.writeHead(404);
            resp.write('Contents you are looking are Not Found');
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(page);
        }
         
        resp.end();
    });
    } else if (req.url == "/login") {
        fs.readFile('../../views/login.html', function (error, page) {
        if (error) {
            resp.writeHead(404);
            resp.write('Contents you are looking are Not Found');
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(page);
        }
         
        resp.end();
    });

    } else if (req.url == "/signup") {
        fs.readFile('../../views/signup.html', function (error, page) {
        if (error) {
            resp.writeHead(404);
            resp.write('Contents you are looking are Not Found');
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(page);
        }
         
        resp.end();
    });
    } else {
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Page not found</h1> ' + req.url);
        resp.end();
    }
});
server.listen(5050);
 
console.log('Server Started listening on 5050');