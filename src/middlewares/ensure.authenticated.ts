import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  //Receber token
  const authtoken = request.headers.authorization;

  //Validar se o token está preenchido
  if (!authtoken) {
    //.end() -> responde com a mensagem padrão do status 401
    return response.status(401).end();
  }
  //Validar se é válido

  //[,variavel] -> ignora a primeira posiçao
  const [, token] = authtoken.split(" ");

  try {
    const decode = verify(token, "d4695539889f68d44a8eac0825506684");

    return next();
  } catch (err) {
    response.status(401).end();
  }

  //Recuperar informações do usuário



}