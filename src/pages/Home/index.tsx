import Header from '../../components/Header/index';
import "./style.css";
import Card from '../../components/Card/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
  const [characters, setCharacters] = useState<any[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');

  useEffect(() => {
    getAllCharacters();
  }, []);

  const getAllCharacters = async () => {
  }

  const callNextPage = async () => {
    const result = await axios.get(nextPage);
    setNextPage(result.data.info.next);
    setPreviousPage(result.data.info.prev);
    setCharacters(result.data.results);
    console.log(result);
  }
  
  const callPreviousPage = async () => {
    const result = await axios.get(previousPage);
    setNextPage(result.data.info.next);
    setPreviousPage(result.data.info.prev);
    setCharacters(result.data.results);
    console.log(result);
  }
  
  return (
    <main>
      <Header/>
      <section className='list-cards'>
        <div className='card-container'>
          {characters.map((character: any, index) => (
            <Link to={`/login/${character.id}`} state={{id: character.id}} key={index}>
              <Card data={character} />
            </Link>
          ))}
        </div>
        <button className='btn-view-more'>Ver mais</button>
        <button onClick={callNextPage}>next page</button>
        <button onClick={callPreviousPage}>previous page</button>
      </section>
    </main>
  )
}

export default Home