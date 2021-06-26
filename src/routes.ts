import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagController } from "./controllers/ListTagController";


const router = Router();

//Cadastro de Usuário
const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

//Cadastro de Tags
const createTagController = new CreateTagController();
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);

//Lista tags
const listTagController = new ListTagController();
router.get("/tags", ensureAuthenticated, listTagController.handle);



//Login de Usuário
const authenticateUserController = new AuthenticateUserController();
router.post("/login", authenticateUserController.handle);

//Cadastro de Compliment
const createComplimentController = new CreateComplimentController();
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

//Listagem de Compliments
const listUserSendComplimentsService = new ListUserSendComplimentsController();
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsService.handle)

const listUserReceiveComplimentsService = new ListUserReceiveComplimentsController();
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsService.handle)

export { router }