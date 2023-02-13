import React from 'react';
import { Box, Text, useMediaQuery } from '@chakra-ui/react';

const Subtitle = (props) => {
  const [isBigScreen] = useMediaQuery('(min-width: 768px)');

  return (
    <Box textAlign="center" fontSize="lg" mt={4}>
      <Text as="samp" fontSize={isBigScreen ? '2xl' : ''}>
        These are all the characters from the Rick and Morty series
      </Text>
      <Text>
        Total Characters: <strong>{props.total}</strong>
      </Text>
    </Box>
  );
};

export default Subtitle;
