const { Router } = require("express"); //importo o router do express

const usersRouter = require("./users.routes"); //grupo de rotas do usuario

const routes = Router(); //inicializo o router na const routes, que contem todas as rotas da aplicacao

routes.use("/users", usersRouter); //quando alguem acessar o /users, sera redirecionado para o grupo de rotas de usuarios

module.exports = routes