import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {

  async execute({ name, email, admin = false, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    //Verifica se o email esta vazio e lança uma exceçao
    if (!email) {
      throw new Error("Email incorrect");
    }

    //Verifica se existe um usuário cadastrado;
    const userAlreadyExists = await userRepository.findOne({
      email
    });

    //Lança uma exceção caso usuário já existe
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    //Criptografando a senha do usuário
    const passwordHash = await hash(password, 8);

    //Cria uma instância do usuário
    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    //Salva o usuário no banco de dados
    await userRepository.save(user);

    return user;
  }
}

export { CreateUserService }