import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Image, useMediaQuery } from '@chakra-ui/react';
import Logo from '../../public/logo.webp';

const Header = () => {
  const [isBigScreen] = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" p={4} bg="green.200">
        <Link to="/">
          <Image src={Logo} alt="logo" w={70} mr={6} />
        </Link>
        <Heading size={isBigScreen ? '4xl' : '2xl'}>Rick and Morty </Heading>
      </Box>
    </>
  );
};

export default Header;
