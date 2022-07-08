import { SyntheticEvent, useState } from 'react';
import { registerService } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

interface userObj {
  avatar: string;
  email: string;
  name: string;
  password: string;
}

const Register = () => {
  const [values, setValues] = useState({
    email: '',
    name: '',
    avatar: '',
    password: ''
  })

  let navigate = useNavigate();

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: userObj) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  };

  const registerUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await registerService.registerValues(values);
    const jwt = response.data.token;

    if(jwt) {
      localStorage.setItem('jwt', jwt);
      swal({
        title: 'Usuário cadastrado com sucesso !',
        icon: "success",
        timer: 7000,
      })
      navigate('/')
    }else {
      swal({
        title: 'Erro!',
        text: `${response.data.message}`,
        icon: 'error',
        timer: 7000
      })
    }

  }

  return (
    <section className="login-container">
      <div className="login-card">
        <h2>Cadastro</h2>
        <form onSubmit={registerUser}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite o seu nome"
            onChange={handleChangeValues}
          />
          <input
            type="text"
            name="avatar"
            id="avatar"
            placeholder="Digite a url da imagem do avatar"
            onChange={handleChangeValues}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite o seu email"
            onChange={handleChangeValues}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite a sua senha"
            onChange={handleChangeValues}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
