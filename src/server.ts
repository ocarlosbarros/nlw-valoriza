/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 06/23/2021
 */

import express from "express";
import "reflect-metadata";

//Import config database
import "./database";

//Cria uma instância do express chamada app
const app = express();

//Criando uma rota GET
/**
 * @param {string} - rota da aplicação
 * @param {function} - request (entrada), response (saída)
 * @returns {string} - uma resposta simples através do método send.
 */
app.get("/", (request, response) => {
  return response.send('Olá NLW');
});

//Inicializa o servidor passando uma porta = http://localhost:3000
app.listen(3000, () => console.log("Server is running..."));