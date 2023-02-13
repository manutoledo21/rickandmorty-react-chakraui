import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { singleCharacter } from '../services/services';
import { Text, Box, Heading, Image, useMediaQuery } from '@chakra-ui/react';
import Error404 from './Error404';
const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isMedScreen] = useMediaQuery('(min-width: 550px)');
  const [isBigScreen] = useMediaQuery('(min-width: 1024px)');

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
              justifyContent={isBigScreen ? 'center' : 'space-around'}
              flexDirection={isBigScreen ? 'row' : 'column'}
              bg="green.100"
              borderRadius="xl"
              w={isBigScreen ? '80%' : '80%'}
              mb={8}>
              <Image
                src={character.image}
                alt="img"
                borderTopRadius={isBigScreen ? 'none' : 'xl'}
                w={isBigScreen ? '50%' : '100%'}
              />
              <Box as="samp">
                <Box
                  display="flex"
                  flexDir="column"
                  alignItems="flex-start"
                  textAlign="end"
                  p={4}
                  fontSize={isMedScreen ? '2xl' : 'lg'}
                  gap={isBigScreen ? '4' : '0'}>
                  <Text>
                    <strong>Gender:</strong> {character.gender}
                  </Text>
                  <Text>
                    <strong>Species:</strong> {character.species}
                  </Text>
                  <Text>
                    <strong>Origin:</strong> {character.origin.name}
                  </Text>
                  <Text>
                    <strong>Location:</strong> {character.location.name}
                  </Text>
                  <Text>
                    <strong>Status:</strong> {character.status}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default CharacterDetails;
