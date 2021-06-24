/***
 * @author Carlos Barros
 * @version 1.0.0
 * @since 06/23/2021
 */

import express from "express";

//Cria uma instância do express chamada app
const app = express();

/**
 *  Métodos http:
 *  get => Buscar uma informação
 *  POST  => Inserir (criar) uma informação
 *  PUT =>  Alterar uma informação
 * DELETE =>  Remover um dado
 * PATCH  =>  Alterar uma informação específica
 */

//Criando uma rota GET
app.get("/", (request, response) => {
  //Resquest => entrada
  //Response  => saída
  //Retorna uma resposta simples
  return response.send('Olá NLW');
});

app.post("/test-post", (request, response) => {
  return response.send('Olá NLW método POST');
})

//Inicializa o servidor passando uma porta = http://localhost:3000
app.listen(3000, () => console.log("Server is running..."));