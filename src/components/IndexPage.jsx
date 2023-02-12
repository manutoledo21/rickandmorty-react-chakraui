import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allCharacters } from '../services/services';
import { Box, Heading, Image, Spinner } from '@chakra-ui/react';
import Error404 from './Error404';

const IndexPage = () => {
  const [characters, setCharacters] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    allCharacters(setCharacters);
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Box display="flex" justifyContent="center">
          <Spinner size="xl" m={2} />
        </Box>
      ) : characters !== null ? (
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
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default IndexPage;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { allCharacters } from '../services/services';
// import { Box, Heading, Image, Spinner } from '@chakra-ui/react';
// import Error404 from './Error404';

// const IndexPage = () => {
//   const [characters, setCharacters] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     allCharacters(setCharacters);
//     setIsLoading(false);
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Box display="flex" justifyContent="center">
//           <Spinner size="xl" m={2} />
//         </Box>
//       ) : characters !== null ? (
//         <Box m={8} display="flex" justifyContent="center" alignItems="center">
//           {characters.map((character) => (
//             <Link to={`/character/${character.id}`}>
//               <Box
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 flexDirection="column"
//                 boxShadow="dark-lg"
//                 borderRadius="xl"
//                 bg="green.100">
//                 <Image src={character.image} alt="img" borderTopRadius="xl" />
//                 <Heading fontSize="xl" p={2}>
//                   {character.name}
//                 </Heading>
//               </Box>
//             </Link>
//           ))}
//         </Box>
//       ) : (
//         <Error404 />
//       )}
//     </>
//   );
// };

// export default IndexPage;
