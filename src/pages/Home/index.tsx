import Header from '../../components/Header/index';
import "./style.css";
import Card from '../../components/Card/index';
import swall from 'sweetalert';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findAllService } from '../../services/characterService';
import { userLoggedService } from '../../services/authService';
interface Characters {
  identity: string;
  image: string;
  name: string;
  reality: string;
  id: string;
  userName: string;
  avatar: string;
  userId: string;
}

interface User {
  avatar: string;
  email: string;
  name: string;
  _id: string;
}

const Home = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [refreshCharacters, setRefreshCharacters] = useState(false);
  const [userLogged, setUserLogged] = useState<User>({
    avatar: '',
    email: '',
    name: '',
    _id: ''
  });

  const navigate = useNavigate();

  const jwt = localStorage.getItem('jwtLocalStorage')

  useEffect(() => {
    getAllCharacters();
    getUserLogged();
  }, [refreshCharacters]);

  const updateCharacters = (refreshChar: boolean) => { 
    setRefreshCharacters(refreshChar);
    setTimeout(() => {
      setRefreshCharacters(false);
    }, 100);
  }

  const getAllCharacters = async () => {
    if(!jwt) {
      swall({
        title: 'ERRO!',
        text: 'Faça o login antes de entrar na página inicial',
        icon: 'error',
        timer: 7000,
      })
      navigate('/login')
    } else {
      const response = await findAllService.allCharacters();

      if(response.status === 204) {
        swall({
          title: 'Info',
          text: 'Não existe personagem cadastrado!',
          icon: 'info',
          timer: 7000,
        })
      }else {
        console.log('Personagens exibidos', response);
        setCharacters(response.data.results);
      }

    }
  }

  const getUserLogged = async () => {
    const response = await userLoggedService.userLogged();
    setUserLogged(response.data)
  }

  return (
    <main>
      <Header updateCharacters={updateCharacters}/>
      <section className='list-cards'>
        <div className='card-container'>
          {characters.map((character: Characters, index) => (
            <Card character={character} updateCharacters={updateCharacters} key={index} userLogged={userLogged}/>
          ))}
        </div>
        <button className='btn-view-more'>Ver mais</button>
      </section>
    </main>
  )
}

export default Home