/***
 * @author Carlos Barros
 * @version 1.0.0
 * @since 06/23/2021
 */

import express from "express";

//Cria uma instância do express chamada app
const app = express();

//Inicializa o servidor passando uma porta = http://localhost:3000
app.listen(3000, () => console.log("Server is running..."));