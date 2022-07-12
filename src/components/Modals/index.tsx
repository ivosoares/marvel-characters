import "./style.css";
import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { BiX } from 'react-icons/bi';
import { createService } from '../../services/characterService';
import swal from 'sweetalert';

Modal.setAppElement('#root');

interface characterObj {
  image: string;
  name: string;
  reality: string;
  identity: string;
}

interface modalProps {
  isOpen: boolean; // define se o modal vai ser aberto
  closeModal: any; // recebe uma funcao para fechar o modal
  onChanges: any;
  type: string; // createCharacter EditCharacter
  title: string; // title = titulo do modal
  btnName: string; // texto do botao
  id: string; // id do personagem (em caso de edicao)
}

const Modals = ({
  isOpen,
  closeModal,
  type,
  title,
  btnName,
  onChanges,
  id,
}: modalProps) => {
  const [character, setCharacter] = useState({
    image: "",
    name: "",
    reality: "",
    identity: "",
  });

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter((values: characterObj) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const createCharacter = async () => {
    const response = await createService.createCharacter(character);

    if(response.status === 200) {
      swal({
        title: 'Sucesso!',
        text: 'Personagem criado com sucesso!',
        icon: 'success',
        timer: 7000
      })
      onChanges(true);
      closeModal();
    }
  }

  const editCharacter = () =>{
    console.log('edicao');
  }

  const submitFunction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    switch(type) {
      case "createCharacter":
        createCharacter();
      case "editCharacter":
        editCharacter();
      break;
    }

  };


  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="overlay-react-modal"
        className="content-react-modal"
      >
        <button
          type="button"
          className="close-modal-button"
          onClick={closeModal}
        >
          <BiX/>
        </button>
        <h2 className="modal-title">{title}</h2>
        <form onSubmit={submitFunction}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome do personagem"
            onChange={handleChangeValues}
            defaultValue={character.name}
          />
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Imagem do Personagem"
            onChange={handleChangeValues}
            defaultValue={character.image}
          />
          <input
            type="text"
            name="reality"
            id="reality"
            placeholder="Realidade do personagem"
            onChange={handleChangeValues}
            defaultValue={character.reality}
          />
          <input
            type="text"
            name="identity"
            id="identity"
            placeholder="Identidade do personagem"
            onChange={handleChangeValues}
            defaultValue={character.identity}
          />
          <button type="submit">{btnName}</button>
        </form>
      </Modal>
    </div>
  );
};

export default Modals;
