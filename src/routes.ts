import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
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

//Cadastro de Compliment
const createComplimentController = new CreateComplimentController();
router.post("/compliments", createComplimentController.handle);

export { router }