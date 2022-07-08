import Header from '../../components/Header/index';
import "./style.css";
import Card from '../../components/Card/index';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findAllService } from '../../services/characterService';
import swall from 'sweetalert';
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
  const navigate = useNavigate();

  const jwt = localStorage.getItem('jwtLocalStorage')

  useEffect(() => {
    getAllCharacters();
  }, []);

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

  return (
    <main>
      <Header/>
      <section className='list-cards'>
        <div className='card-container'>
          {characters.map((character: Characters, index) => (
            <Card character={character} key={index} />
          ))}
        </div>
        <button className='btn-view-more'>Ver mais</button>
      </section>
    </main>
  )
}

export default Home