import axios from 'axios';

const allCharacters = async (state) => {
  const request = await axios.get('https://rickandmortyapi.com/api/character');
  state(request.data.results);
};

const singleCharacter = async (id, state) => {
  const request = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  state(request.data);
};

export { allCharacters, singleCharacter };
