const database = require("../database/connection");

module.exports = {
  //rota para o retorno de todos os posts
  async index(request, response) {
    const posts = await database("posts").select("*");
    return response.json(posts);
  },
};
