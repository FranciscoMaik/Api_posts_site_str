const database = require("../database/connection");
const validated = require("validator");

module.exports = {
  //rota para o retorno de todos os posts
  async index(request, response) {
    const producttype = request.headers.state;
    let posts = "";
    if (producttype === "todos") {
      posts = await database("posts").select("*");
    } else {
      posts = await database("posts")
        .where("producttype", "=", producttype)
        .select("*");
    }

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
      producttype,
      idadmin,
    } = request.body;

    if (validated.isUUID(idadmin)) {
      const administrador = await database("admin")
        .where("id", "=", idadmin)
        .select("*")
        .first();

      if (administrador) {
        await database("posts").insert({
          urlimage,
          companyname,
          operation,
          contact,
          responsible,
          paymenttype,
          delivery,
          producttype,
        });

        return response.status(200).send();
      } else {
        return response.status(401).send();
      }
    } else {
      return response.status(401).send();
    }
  },

  async delete(request, response) {
    const idadmin = request.headers.authorization;
    const { id } = request.params;

    if (validated.isUUID(idadmin)) {
      const administrador = await database("admin")
        .where("id", "=", idadmin)
        .select("*")
        .first();

      if (administrador) {
        await database("posts").where({ id }).del();

        return response.status(200).send();
      } else {
        return response.status(401).send();
      }
    } else {
      return response.status(401).send();
    }

    return response.status(200).send();
  },
};
