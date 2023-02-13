import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allCharacters } from '../services/services';
import { Text, Box, Button, Heading, Image, Spinner } from '@chakra-ui/react';
import Error404 from './Error404';
import Subtitle from './Subtitle';

const IndexPage = () => {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/?page=1');
  const [characters, setCharacters] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [back, setBack] = useState(null);
  const [next, setNext] = useState(null);
  const [pages, setPages] = useState(null);
  const [total, setTotal] = useState(null);

  const buttonNext = (url) => {
    setUrl(url);
    window.scrollTo(0, 0);
  };

  const buttonPrev = (url) => {
    setUrl(url);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    allCharacters(url, setNext, setBack, setPages, setTotal, setCharacters);
    setIsLoading(false);
  }, [url]);

  return (
    <>
      <Subtitle total={total} />
      {isLoading ? (
        <Box display="flex" justifyContent="center">
          <Spinner size="xl" m={2} />
        </Box>
      ) : characters !== null ? (
        <div>
          <Box display="grid" gridTemplateColumns={`repeat(auto-fill, minmax(180px, 1fr))`} gridGap={6} m={8}>
            {characters.map((character) => (
              <Link to={`/character/${character.id}`} key={character.id}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  boxShadow="dark-lg"
                  borderRadius="xl">
                  <Image src={character.image} alt="img" borderTopRadius="xl" />
                  <Heading fontSize="xl" p={4}>
                    {character.name}
                  </Heading>
                </Box>
              </Link>
            ))}
          </Box>
          <Box display="flex" justifyContent="center" m={6}>
            {back !== null ? (
              <Button mr={4} onClick={() => buttonPrev(back)}>
                Prev
              </Button>
            ) : (
              ''
            )}
            {next !== null ? <Button onClick={() => buttonNext(next)}>Next</Button> : ''}
          </Box>
          <Text textAlign="center" fontSize="sm" mb={2}>
            Total Pages: <strong>{pages}</strong>
          </Text>
        </div>
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default IndexPage;
