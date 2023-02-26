
var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    var numPag = req.url.split("/")[1];
    console.log("req.url: " + req.url);
    console.log("numPag: " + numPag);
    if (numPag == null || numPag == "") {
        var fileName = "index.html";
    } else {
        //var fileName = "Paginas_XML/pagina_" + numPag + ".xml";
        var fileName = "Paginas_HTML/pagina_" + numPag + ".html";
    }
    fs.readFile(fileName, function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (err) {
        res.write("Error: " + err);
    } else res.write(data);
    res.end();
    });
})
.listen(7777);
