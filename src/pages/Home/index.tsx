import Header from '../../components/Header/index';
import "./style.css";
import Card from '../../components/Card/index';

const Home = () => {
  return (
    <main>
      <Header/>
      <section className='list-cards'>
        <div className='card-container'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <button className='btn-view-more'>Ver mais</button>
      </section>
    </main>
  )
}

export default Home