import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../public/logo.webp';

const Header = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" p={4} bg="green.200">
        <Link to="/">
          <Image src={Logo} alt="logo" w={70} mr={6} />
        </Link>
        <Heading fontSize="4xl">Rick and Morty</Heading>
      </Box>
    </>
  );
};

export default Header;
