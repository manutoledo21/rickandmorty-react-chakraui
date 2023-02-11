import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allCharacters } from '../services/services';
import { Box, Heading, Image } from '@chakra-ui/react';
const IndexPage = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    allCharacters(setCharacters);
  }, []);

  return (
    <>
      {characters != null
        ? characters.map((character) => (
            <div key={character.id}>
              <Box m={8} display="flex" justifyContent="center" alignItems="center">
                <Link to={`/character/${character.id}`}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    boxShadow="dark-lg"
                    borderRadius="xl"
                    bg="green.100">
                    <Image src={character.image} alt="img" borderTopRadius="xl" />
                    <Heading fontSize="xl" p={2}>
                      {character.name}
                    </Heading>
                  </Box>
                </Link>
              </Box>
            </div>
          ))
        : // Acá crear un componente para hacer un 404
          'No hay personajes'}
    </>
  );
};

export default IndexPage;
