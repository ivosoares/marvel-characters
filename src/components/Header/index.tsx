import banner from '../../assets/banner.jpg';
import logo from '../../assets/logo-marvel.png';
import './style.css';

import { RiLogoutCircleLine } from 'react-icons/ri';
import { useState } from 'react';
import Modals from '../Modals';

interface headerProps {
  updateCharacters: (arg: boolean) => void;
}

const Header = ({updateCharacters}: headerProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const onCreate = () => {
    updateCharacters(true);
  }

  return (
    <header>
      <RiLogoutCircleLine className='header-logout'/>
      <img src={banner} alt="Imagem de fundo da página que representa uma folha de quadrinhos" className='header-background'/>
      <section>
        <div>
          <img src={logo} alt="logo da marvel" className='header-logo'/>
          <h1>Personagens</h1>
        </div>
        <button className='header-button' onClick={openModal}>Criar Personagem</button>
      </section>
      <Modals
        isOpen={isModalOpen}
        closeModal={closeModal}
        type="createCharacter"
        title='Criar Personagem'
        onChanges={onCreate}
        btnName="Salvar"
        id=""
      />
    </header>
  )
}

export default Header