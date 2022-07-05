import './style.css';
const Card = ({ data }: any) => {
  return (
    <div className='card'>
      <img src={data.image} className="character-image" alt="Imagem massa do miranha" />
      <div>
        <h2>{data.name}</h2>
        <p>{data.location.name}</p>
        <p>{data.species}</p>
        <span className='user-card'>By: Ivo Soares</span>
      </div>
    </div>
  )
}

export default Card