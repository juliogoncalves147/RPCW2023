
var http = require('http');
var url = require('url');
var axios = require('axios');
var mypages = require('./mypages.js');
var fs = require('fs');


http.createServer(function (req, res) {     
    var d =  new Date().toISOString().substring(0, 16);
    console.log(req.method + " " + req.url + " " + d);

    var dicURL = url.parse(req.url, true)

    if (dicURL.pathname == "/"){
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                res.end(mypages.paginaInicial());
    }
    else if (dicURL.pathname == "/pessoas"){
        axios.get("http://localhost:3000/pessoas?_sort=nome&_order=asc")
            .then(function(response){
                var pessoas = response.data
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                let pessoasOrdenadas = pessoas.sort((p1, p2) => (parseInt(p1.id) < parseInt(p2.id)) ? -1 : 1)
                res.end(mypages.pessoasPage(pessoasOrdenadas));
            })
            .catch( erro => {
                console.log("Erro: " + erro);
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                res.end("Erro: " + erro);
            })
    }
    else if (dicURL.pathname.startsWith("/pessoas/")){
        dicURL.query.id = dicURL.pathname.split("/")[2]
        axios.get("http://localhost:3000/pessoas?id=" + dicURL.query.id)
            .then(function(response){
                var pessoas = response.data
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                res.end(mypages.personalPage(pessoas));
            })
            .catch( erro => {
                console.log("Erro: " + erro);
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                res.end("Erro: " + erro);
            })
    }
    else if (dicURL.pathname == "/sexo"){
        axios.get("http://localhost:3000/pessoas")
            .then(function(response){
                var pessoas = response.data
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                res.end(mypages.paginaSexo(pessoas));
        })
    }   
    else if (dicURL.pathname == "/sexoM"){
        axios.get("http://localhost:3000/pessoas?sexo=masculino")
            .then(function(response){
                var pessoas = response.data
                /*let pessoasOrdenadas = pessoas.sort(function(a, b){
                    if (a.nome < b.nome) return -1;
                    if (a.nome > b.nome) return 1;
                    return 0;
                })
                */
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                let pessoasOrdenadas = pessoas.sort((p1, p2) => (parseInt(p1.id) < parseInt(p2.id)) ? -1 : 1)
                res.end(mypages.pessoasPageSexo(pessoasOrdenadas));
            })
            .catch( erro => {
                console.log("Erro: " + erro);
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                res.end("Erro: " + erro);
            })
    }
    else if (dicURL.pathname == "/sexoF"){
        axios.get("http://localhost:3000/pessoas?sexo=feminino")
            .then(function(response){
                var pessoas = response.data
                /*let pessoasOrdenadas = pessoas.sort(function(a, b){
                    if (a.nome < b.nome) return -1;
                    if (a.nome > b.nome) return 1;
                    return 0;
                })
                */
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                let pessoasOrdenadas = pessoas.sort((p1, p2) => (parseInt(p1.id) < parseInt(p2.id)) ? -1 : 1)
                res.end(mypages.pessoasPageSexo(pessoasOrdenadas));
            })
            .catch( erro => {
                console.log("Erro: " + erro);
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                res.end("Erro: " + erro);
            })
    }
    else if (dicURL.pathname == "/sexoO"){
        axios.get("http://localhost:3000/pessoas?sexo=outro")
            .then(function(response){
                var pessoas = response.data
                /*let pessoasOrdenadas = pessoas.sort(function(a, b){
                    if (a.nome < b.nome) return -1;
                    if (a.nome > b.nome) return 1;
                    return 0;
                })
                */
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                let pessoasOrdenadas = pessoas.sort((p1, p2) => (parseInt(p1.id) < parseInt(p2.id)) ? -1 : 1)
                res.end(mypages.pessoasPageSexo(pessoasOrdenadas));
            })
            .catch( erro => {
                console.log("Erro: " + erro);
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                res.end("Erro: " + erro);
            })
    }
    else if (dicURL.pathname == "/desporto"){
        axios.get("http://localhost:3000/pessoas")
            .then(function(response){
                var pessoas = response.data
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                res.end(mypages.paginaDesporto(pessoas));
        })
    }
    else if (dicURL.pathname.startsWith("/desporto/")){
        dicURL.query.id = dicURL.pathname.split("/")[2]
        axios.get("http://localhost:3000/pessoas?q=" + dicURL.query.id)
            .then(function(response){
                var pessoas = response.data
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                res.end(mypages.pessoasPageDesporto(pessoas));
        })
    }
    else if (dicURL.pathname == "/profissao"){
        axios.get("http://localhost:3000/pessoas")
            .then(function(response){
                var pessoas = response.data
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                res.end(mypages.paginaProfissao(pessoas));
        })
    }
    else if (dicURL.pathname.startsWith("/profissao/")){
        dicURL.query.id = dicURL.pathname.split("/")[2]
        axios.get("http://localhost:3000/pessoas?q=" + dicURL.query.id)
            .then(function(response){
                var pessoas = response.data
                res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});
                res.end(mypages.pessoasPageProfissao(pessoas));
        })
    }   
    else if (dicURL.pathname == "/w3.css"){
        fs.readFile('w3.css', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            if (err) {
                console.log("Erro na leitura da stylesheet");
                res.write("Erro: " + err);
                res.end();
            }
            else {
                res.write(data);
                res.end();
            }
        })
    }
    else if (dicURL.pathname == "/desporto/w3.css"){
        fs.readFile('w3.css', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            if (err) {
                console.log("Erro na leitura da stylesheet");
                res.write("Erro: " + err);
                res.end();
            }
            else {
                res.write(data);
                res.end();
            }
        })
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html; charset: utf-8'});
        res.end("Erro: Operação não suportada: ");
    }
})
.listen(7777);

console.log('Servidor à escuta na porta 7777...');