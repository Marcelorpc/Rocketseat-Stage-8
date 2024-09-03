const express = require("express"); //importa o express
const routes = require("./routes"); //por padrao, vai carregar o index da pasta
require("express-async-errors"); //importo a biblioteca para lidar com os erros
const AppError = require("./utils/AppError")

const app = express(); //inicializa o express
app.use(express.json()); //Eu informo ao express que irei receber informacoes do tipo JSON nas requisicoes no meu POST

app.use(routes);

//verifico se o meu erro esta presente na classe de erros que criei e retorno a mensagem de erro
//caso o erro nao esteja na minha classe, retorno uma mensagem de erro padrao
//ex: se o cliente nao passar o nome, retorna o if
//ex: se eu fizer uma requisicao errada no meu codigo, retorna o internal server error que criei no server.js
app.use(( error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

const PORT = 3333; //vou utilizar essa const para informar qual porta eu quero para o express
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`)); //utilizo o express para ficar ouvindo a porta definida por mim e executar uma determinada funcao quando ele iniciar


/*
//crio um get para a pagina inicial
//para testar, acessar http://localhost:3333
app.get("/", (request, response) => {
  response.send("rodei")
});

//crio um get na pagina message e que recebe um parametro id
//para testar, acessar http://localhost:3333/message/5
//acesso o parametro id e user passado para a request
app.get("/message/:id/:user", (request, response) => {
  response.send(`
    ID acessado: ${request.params.id}
    Usuario acessado: ${request.params.user}
  `) 
});


//ROUTE PARAMS
//desestruturei o request.params para acessar facilmente o id e user
app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params
  response.send(`
    ID acessado: ${id}
    Usuario acessado: ${user}
  `)
});

//QUERY PARAMS
app.get("/users", (request, response) => {
  const { page, limit } = request.query
  response.send(`
    Pagina acessada: ${page}
    Limite: ${limit}
  `)
});
*/