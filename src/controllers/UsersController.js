/*
- **index** - GET para listar varios registros
- **show** - GET para exibir um registro especifico
- **create** - POST para criar um registro
- **update** - PUT para atualizar um registro
- **delete** - DELETE para remover um registro
*/

const AppError = require("../utils/AppError");

//com esse controller create, podemos acessar o body da request e devolver um json com esses dados em um json
//uso o status para passar o http code da requisicao, no caso informando que foi criado com sucesso
//verifico se tem um erro e lanco uma excessao 
class UsersController {
  create (request, response) {
    const { name, email, password } = request.body;

    if(!name) {
      throw new AppError("Erro: O nome e obrigatorio!")
    }

    response.status(201).json({ name, email, password })
  }
}

module.exports = UsersController