import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

const Title = () => {
  return (
    <Box textAlign="center" fontSize="lg" as="samp">
      <Text mt={4}>These are all the characters from the Rick and Morty series</Text>
    </Box>
  );
};

export default Title;
