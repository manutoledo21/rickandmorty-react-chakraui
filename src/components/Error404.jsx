import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Heading, Text } from '@chakra-ui/layout';
import imgError from '../../public/404-error.png';

const Spinner = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" flexDir="column" textAlign="center">
        <Image src={imgError} alt="img-error" w={300} alignSelf="center" m={4} />
        <Heading size="4xl">404</Heading>
        <Heading size="2xl">Not Found</Heading>
        <Text fontSize="lg" as="samp">
          The resource requested could not be found on this server
        </Text>
      </Box>
    </>
  );
};

export default Spinner;
