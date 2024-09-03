const { Router } = require("express");

//importo o controller
const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

//o middleware recebe a request, response e o proximo destino
//a funcao next() e importante para o middleware seguir a aplicacao, se nao ele fica aguardando eternamente
function myMiddleware (request, response, next) {
  console.log("Voce passou pelo middleware");
  next();
}

//instancio a classe controller na memoria
const usersController = new UsersController();

//utilizo o middleware diretamente nessa rota
usersRoutes.post("/", myMiddleware, usersController.create)

/*
//testando o metodo post, enviar informacoes na requisicao e lidar com elas na API
usersRoutes.post("/", (request, response) => {
  const { name, email, password } = request.body

  response.json({ name, email, password })
});
*/

module.exports = usersRoutes;