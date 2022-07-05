import banner from '../../assets/banner.jpg';
import logo from '../../assets/logo-marvel.png';
import './style.css';

import { RiLogoutCircleLine } from 'react-icons/ri';

const Header = () => {
  return (
    <header>
      <RiLogoutCircleLine className='header-logout'/>
      <img src={banner} alt="Imagem de fundo da página que representa uma folha de quadrinhos" className='header-background'/>
      <section>
        <div>
          <img src={logo} alt="logo da marvel" className='header-logo'/>
          <h1>Personagens</h1>
        </div>
        <button className='header-button'>Criar Personagem</button>
      </section>
    </header>
  )
}

export default Header