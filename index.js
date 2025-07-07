const express = require("express");
const server = express();


// http://localhost:3000/hello?nome=Felipe&idade=21
// query params = ?nome=felipe&idade=21
server.get("/hello", (req, res) => {
    const {nome, idade} = req.query;
    
    return res.json({
        tittle: "Hello Word",
        message: `Olá ${nome} tudo bem com voce?`,
        idade: idade
    });
});



// http://localhost:3000/hello/felipe
// Route params = /hello/:nome 

server.get("/hello/:nome/:idade", (req, res) => {
    const {nome, idade} = req.params;

    return res.json({
        title: "Hello World",
        message: `Olá ${nome} tudo bem?`
    });
});

server.listen(3000);  