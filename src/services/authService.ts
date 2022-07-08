import api from './api';
interface userLoginObj {
  email: string;
  senha: string;
}
interface userObj {
  avatar: string;
  email: string;
  name: string;
  password: string;
}

const loginService = {
  login: (values: userLoginObj) => 
    api.post('/auth/login', values)
    .then((response: any) => response)
    .catch((error: any) => console.log('ERRO NA CHAMADA:', error))
}

const registerService = {
  registerValues: (values: userObj) => 
    api.post('/user/create', values)
    .then((response: any) => response)
    .catch((error: any) => error.response)
}

export { loginService, registerService };