import Header from '../../components/Header/index';
import "./style.css";
import Card from '../../components/Card/index';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findAllService } from '../../services/characterService';

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
      console.log('ERRO: NAO EXISTE O TOKEN FAVOR LOGAR NOVAMENTE')
      navigate('/login')
    } else {
      const response = await findAllService.allCharacters();

      console.log('Personagens exibidos', response);
      setCharacters(response.data.results);
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