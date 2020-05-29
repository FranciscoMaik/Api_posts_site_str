## Api de cadastro de posts

Pré requisitos:

- Banco **postgres**, caso queira usar outro banco deve-se trocar as informações de qual banco deseja usar no arquivo **knexfile.js**, para mais infomações ler a documentação do knex ([knex documentation](http://knexjs.org/));

- Devesse fazer a alteração de **node** para **nodemon** caso queira utilizalo, essa mudança é feita no arquivo **package.json** na instancia **arquivos: start:**;

- Para utilizar o banco de desenvolvimento invés do de produção devesse trocar **configuration.production** para **configuration.development** no aquivo **src/database/connection.js**;

- Devesse rodar as **migrates** para criar as tabelas no banco, utiliza-se o comando a seguir, mais informações ler a documentação do knex ([knex documentation](http://knexjs.org/)):

  > npx knex migrate:latest

- Possuir o **nodejs** instalado na versão 12.16.3 ([Versão LTS atual](https://nodejs.org/en/)), caso esteja utilizando outra versão do node isso pode ser alterado no arquivo de configuração **package.json** na instancia **engines**, lembrando que fazer a utilização de outra versão pode dar incompatibilidade de algumas dependencias que estão sendo utilizadas, por favor levar isso em conta.

Para fazer o uso da api é preciso rodar o primeiro comando para instalação das dependencias:

> npm install

E depois para rodar a api utilize o comando:

> npm start

**Rotas:**

GET - posts: retorna todos os posts cadastrados;

POST - posts: cria um post, um administrador tem que está cadastrado primeiro e os dados passado pelo **body** junto com os dados do produto;

DELETE - posts: deleta um post, um administrador tem que está cadastrado primeiro e os dados passado por **headers**;

GET - admin: cria um administrador;

POST - admin: retorna as informações de um administrador;

DELETE - admin: deleta o administrador;
