import { Router } from "express"
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";


const router = Router();

//Cadastro de Usuário
const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

//Casdastro de Tags
const createTagController = new CreateTagController();
router.post("/tags", createTagController.handle);

export { router }