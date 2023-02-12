import axios from 'axios';

const allCharacters = async (url, setNext, setBack, setPages, setTotal, setCharacters) => {
  const request = await fetch(url);
  const { info, results } = await request.json();
  setNext(info.next);
  info.next !== null ? setBack(info.prev) : setBack(null);
  setPages(info.pages);
  setTotal(info.count);
  setCharacters(results);
};

const singleCharacter = async (id, state) => {
  const request = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  state(request.data);
};

export { allCharacters, singleCharacter };
