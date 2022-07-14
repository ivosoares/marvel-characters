import './style.css';
import { useState } from 'react';
import swal from 'sweetalert';
import Modals from '../Modals/index';
interface cardProps {
  character: {
    identity: string;
    image: string;
    name: string;
    reality: string;
    id: string;
    userName: string;
    avatar: string;
    userId: string;
  },
  updateCharacters: (arg: boolean) => void;
  userLogged: {
    avatar: string,
    email: string,
    name: string,
    _id: string,
  }
} 


const Card = ({ character, userLogged, updateCharacters }: cardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if(userLogged._id === character.userId) {
      setIsModalOpen(true);
    } else {
      swal({
        title: 'Erro !',
        text: 'Voce só pode alterar o personagem que voce criou',
        icon: 'error',
        timer: 7000
      })
    }
  }

  //se o id usuario for igual o id do usario que cadastrou esse personagem

  function closeModal() {
    setIsModalOpen(false);
  }

  function onEdit() {
    updateCharacters(true);
  }

  return (
    <>
      <div className='card' onClick={openModal}>
        <img src={character.image} className="character-image" alt="Imagem massa do miranha" />
        <div>
          <h2>{character.name}</h2>
          <p>{character.reality}</p>
          <p>{character.identity}</p>
          <span className='user-card'>By: {character.userName}</span>
        </div>
      </div>
      <Modals
        isOpen={isModalOpen}
        closeModal={closeModal}
        type="editCharacter"
        title="Editar Personagem"
        btnName='Atualizar'
        onChanges={onEdit}
        id={character.id}
      />
    </>
  )
}

export default Card