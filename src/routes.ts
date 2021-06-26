import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router = Router();

//Cadastro de Usuário
const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

//Cadastro de Tags
const createTagController = new CreateTagController();
router.post("/tags", ensureAdmin, createTagController.handle);

//Login de Usuário
const authenticateUserController = new AuthenticateUserController();
router.post("/login", authenticateUserController.handle);

export { router }