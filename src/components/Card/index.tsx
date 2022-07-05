import './style.css';
const Card = () => {
  return (
    <div className='card'>
      <img src="https://impaktovisual.com.br/6098-large_default/display-homem-aranha.jpg" className="character-image" alt="Imagem massa do miranha" />
      <div>
        <h2>Peter Park</h2>
        <p>Terra 216</p>
        <p>Homem Aranha</p>
        <span className='user-card'>By: Ivo Soares</span>
      </div>
    </div>
  )
}

export default Card