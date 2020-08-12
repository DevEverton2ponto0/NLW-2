//servidor
const express = require('express') //chamando express
const server = express() //executando o express

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

const nunjucks = require('nunjucks')
//configurar nunjucks (template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true //desativando o cache
})
//inicio e configuração do servidor
server
    //receber os dados do req.body
    .use(express.urlencoded({extended: true}))

    //configurar arquivos estáticos (css,script, imagens)
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-class", saveClasses)
    // start do servidor
    .listen(5500)