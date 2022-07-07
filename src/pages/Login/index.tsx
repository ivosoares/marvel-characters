
import './style.css'
import { useState } from 'react';
import axios from 'axios';
import { loginService } from '../../services/authService';


interface userLoginObj {
  email: string;
  senha: string;
}

const Login = (props: any) => {
  const [values, setValues] = useState({
    email: '',
    senha: '',
  })

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>)  => {
    // faco uma copia do objeto no estado (values) e adiciono as pripriedades digitadas pelo usuario
    // após isso retorno para a função que vai atualizar esse valor no estado da aplicação.
    setValues((values: userLoginObj) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }
  


  const loginUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await loginService.login(values)

    console.log(response.data);
  }

  return (
    <section className="login-container">
      <div className="login-card">
        <h2>Entrar</h2>
        <form onSubmit={loginUser} className="form-login">
          <input type="email" name="email" id="email" placeholder="Digite o seu Email" onChange={handleChangesValues}/>
          <input type="password" name="password" id="password" placeholder="Digite a sua senha" onChange={handleChangesValues}/>
          <button>Entrar</button>
        </form>
        <p>Não tem conta ? Cadastre-se</p>
      </div>
    </section>
  )
}

export default Login