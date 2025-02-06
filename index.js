import http from 'http'
import fs from 'fs';


const handleServerError = (res) => {
    fs.readFile('404.html', (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('404 not found');
            return;
        }
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(content);

    })


};

const server = http.createServer((req, res) => {
    const urlPath = req.url;

    if (urlPath === '/' || urlPath === '/home') {
        fs.readFile('home.html', (err, content) => {
            if (err) {
                handleServerError(res)
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);

        })
    } else if (urlPath === '/about') {

        fs.readFile('about.html', (err, content) => {
            if (err) {
                handleServerError(res)
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        })

    } else if(urlPath === '/contact') {
        fs.readFile('contact-me.html', (err, content) => {
            if (err) {
                handleServerError(res)
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);

        })

    }
})

server.listen(8080, () => {
    console.log("Server is running")
})
