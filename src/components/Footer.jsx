import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" textAlign="center" bg="green.200" p={2}>
        <Text as="samp">
          React Proyect by{' '}
          <Text fontSize="lg" as="u">
            <Link to={'https://github.com/manutoledo21'}>
              <strong>Manu Toledo</strong>
            </Link>
          </Text>
        </Text>
      </Box>
    </>
  );
};

export default Footer;
