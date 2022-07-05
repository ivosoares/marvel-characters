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
    // const chamadaApi = fetch('https://sheet2api.com/v1/yemWf9fkSuan/characters');
    // chamadaApi.then((response) => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(`ERRO`, err));

    // const obj = {
    //   identity: 'Peter Parker',
    //   image: 'url_imagem',
    //   name: 'Peter',
    //   reality: 'Terra',
    //   id: '123',
    //   userName: 'Ivo',
    //   avatar: 'url_avatar',
    //   userId: 'id',
    // }

    // const chamadaApi = await fetch('https://sheet2api.com/v1/yemWf9fkSuan/characters', {
    //   method: 'post',
    //   headers: new Headers ({
    //     'Content-Type': 'application/json'
    //   }),
    //   body: JSON.stringify(obj)
    // });
    // const data = await chamadaApi.json();
    // console.log(data);
    // try {
    //   const result = await axios.post('https://sheet2api.com/v1/yemWf9fkSuan/characters', obj);
    //   console.log(result.data);
    // } catch(err: any) {
    //   alert(err.message)
    // }

    const result = await axios.get(`https://rickandmortyapi.com/api/character`);
    if(!result.data.info.prev) {
      setPreviousPage(`https://rickandmortyapi.com/api/character`);
    } else {
      setPreviousPage(result.data.info.prev);
    }
    setNextPage(result.data.info.next);
    setCharacters(result.data.results);
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