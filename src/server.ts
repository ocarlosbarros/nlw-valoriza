/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 06/23/2021
 */

import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";

//Import config database
import "./database";

//Cria uma instância do express chamada app
const app = express();

app.use(express.json());
app.use(router);

//Middleare para tratar erros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
});

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