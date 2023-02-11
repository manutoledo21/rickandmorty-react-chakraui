import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" textAlign="center" bg="green.200" p={2}>
        <Text as="samp">
          React Proyect by{' '}
          <Text fontSize="lg" as="u">
            <Link to={'https://github.com/manutoledo21'}>Manu Toledo</Link>
          </Text>
        </Text>
      </Box>
    </>
  );
};

export default Footer;
