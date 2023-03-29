import React from 'react';
import logo from './logo.svg';
import { Box, ChakraProvider, HStack, Spacer, VStack } from '@chakra-ui/react';
import Mainheader from './Components/Mainheader/Mainheader';
import Navbar from './Components/Navbar/Navbar';
import ItemPreview from './Components/ItemPreview/ItemPreview';
import Outerwear from './Components/ShopCategory/Categories/Outerwear';

function App() {
  return (
    <ChakraProvider>
      <VStack spacing={3} align='stretch'>
        <Mainheader />
        <Navbar />
        <HStack>
          <Spacer />
          <ItemPreview Dateposted={10} />
          <Spacer />
          <ItemPreview Dateposted={10} />
          <Spacer />
          <ItemPreview Dateposted={10} />
          <Spacer />
          <ItemPreview Dateposted={10} />
          <Spacer />
          <ItemPreview Dateposted={10} />
          <Spacer />
          <ItemPreview Dateposted={10} />
          <Spacer />
        </HStack>
        <HStack>
          <Spacer />
          <Box>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Shop Menswear</p>
          </Box>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
        </HStack>
        <HStack spacing={20}>
          <Spacer />
          <Outerwear />
          <Outerwear />
          <Outerwear />
          <Outerwear />
          <Spacer />
        </HStack>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
