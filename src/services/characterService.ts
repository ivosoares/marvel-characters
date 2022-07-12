import api from './api';
import swal from 'sweetalert';

const findAllService = {
  allCharacters: () => 
    api.get('/character')
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => console.log(error))
}

const createService = {
  createCharacter: (values: object) =>
  api.post('/character/create', values)
    .then((response: any) => response)
    .catch((error: any) => {
      swal({
        title: "Erro!",
        text: `${error.message}`,
        icon: "error",
        timer: 7000,
      })
    })
}

export { findAllService, createService }