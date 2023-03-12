var http = require('http')
var axios = require('axios')
var templates = require('./templates')
var static = require('./static')
var url = require('url')
var querystring = require('querystring')
var post_request = require('./post_request')
var { parse } = require('querystring');

/*
Ficheiro Json 
Objeto {
    "id": 1,
    "deadline": "2020-12-12",
    "manager": "João",
    "description": "Fazer o TP4",
}

Estrutra HTML
Header
-----------------------------
Add ToDo Task Forms
-----------------------------
ToDo List       |      Done List
                |      
                |
-----------------------------
Footer
*/

function collectRequestBodyData(request, callback) {
    if(request.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}


var servidor = http.createServer((req, res) => {

    if(static.staticResource(req)){
        static.serveStaticResource(req, res)
    }
    else{
        switch(req.method){
            case "GET":
                if(req.url == "/" || req.url == "/home"){
                    axios.get("http://localhost:3000/toDo").then(response => {
                        var toDo = response.data
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                        res.write(templates.homePage(toDo))
                        res.end()
                    })
                    .catch(erro => {
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                        res.write("<p>Erro: " + erro + "</p>")
                        res.end()
                    })
                }
                
            case "POST":
                if(req.url == "/toDo"){
                    collectRequestBodyData(req, result => {
                        if(result){
                            result.done = false
                            //axios.post("http://localhost:3000/alunos", result)
                            post_request.post_request(result)
                            console.dir(result)
                            res.writeHead(302, {'Location': '/home'});
                            res.end();
                        }
                        else{
                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Unable to collect data from body...</p>")
                            res.end()
                        }
                    })
                }
                else if(req.url == "/done"){
                    collectRequestBodyData(req, result => {
                        if(result){
                            result.done = true
                            //axios.post("http://localhost:3000/alunos", result)
                            axios.patch("http://localhost:3000/toDo/" + result.id, result)
                            console.dir(result)
                            res.writeHead(302, {'Location': '/home'});
                            res.end();
                        }
                        else{
                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Unable to collect data from body...</p>")
                            res.end()
                        }
                    })
                }
                else if (req.url == "/delete"){
                    collectRequestBodyData(req, result => {
                        if(result){
                            axios.delete("http://localhost:3000/toDo/" + result.id).then(response => {
                                res.writeHead(302, {'Location': '/home'});
                                res.end();
                            })
                            .catch(erro => {
                                res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                                res.write("<p>Erro: " + erro + "</p>")
                                res.end()
                            })
                        }
                        else{
                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Unable to collect data from body...</p>")
                            res.end()
                        }
                    })
                }
                else if (req.url == "/notdone"){
                    collectRequestBodyData(req, result => {
                        if(result){
                            axios.get("http://localhost:3000/toDo/" + result.id).then(resposta => {
                                const response = resposta.data;
                                response.done = false;
                                delete response.date;
                                axios.patch("http://localhost:3000/toDo/" + result.id, response).then(resposta => {
                                    console.log(resposta.data); // Exibir a resposta do servidor
                                    res.writeHead(302, {'Location': '/home'});
                                    res.end();
                                })
                                .catch(erro => {
                                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                                    res.write("<p>Erro: Erro ao Receber ao fazer o Patch " + erro + "</p>")
                                    res.end()
                                })
                            })
                            .catch(erro => {
                                res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                                res.write("<p>Erro: " + erro + "</p>")
                                res.end()
                            })
                        }
                        else{
                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Unable to collect data from body...</p>")
                            res.end()
                        }
                    })
                }
                    break
            }
        }
    })


servidor.listen(7777, () => {
    console.log('Servidor à escuta na porta 7777...')
})