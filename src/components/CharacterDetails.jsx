import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { singleCharacter } from '../services/services';
import { Text, Box, Heading, Image } from '@chakra-ui/react';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    singleCharacter(id, setCharacter);
  }, []);

  return (
    <>
      {character != null ? (
        <div key={character.id}>
          <Box display="flex" justifyContent="center" alignItems="center" flexDir="column">
            <Heading p={6} size="2xl">
              {character.name}
            </Heading>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              mb={8}
              bg="green.100"
              borderRadius="xl"
              w="80%">
              <Image src={character.image} alt="img" borderTopRadius="xl" w="100%" />
              <Box display="flex" flexDir="column" alignItems="flex-start" p={2}>
                <Text as="samp" fontSize="lg">
                  <strong>Gender:</strong> {character.gender}
                </Text>
                <Text as="samp" fontSize="lg">
                  <strong>Species:</strong> {character.species}
                </Text>
                <Text as="samp" fontSize="lg">
                  <strong>Origin:</strong> {character.origin.name}
                </Text>
                <Text as="samp" fontSize="lg">
                  <strong>Location:</strong> {character.location.name}
                </Text>
                <Text as="samp" fontSize="lg">
                  <strong>Status:</strong> {character.status}
                </Text>
              </Box>
            </Box>
          </Box>
        </div>
      ) : (
        'No hay información'
      )}
    </>
  );
};

export default CharacterDetails;
