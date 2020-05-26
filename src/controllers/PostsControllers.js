const database = require("../database/connection");

module.exports = {
  //rota para o retorno de todos os posts
  async index(request, response) {
    const posts = await database("posts").select("*");
    return response.json(posts);
  },
  async create(request, response) {
    const {
      urlimage,
      companyname,
      operation,
      contact,
      responsible,
      paymenttype,
      delivery,
    } = request.body;

    await database("posts").insert({
      urlimage,
      companyname,
      operation,
      contact,
      responsible,
      paymenttype,
      delivery,
    });

    return response.status(200).send();
  },

  async delete(request, response) {
    const { id } = request.params;
    await database("posts").where({ id }).del();
    return response.status(200).send();
  },
};
