import React from 'react';
import logo from './logo.svg';
import { Box, ChakraProvider, HStack, Spacer, VStack } from '@chakra-ui/react';
import Mainheader from './Components/Mainheader/Mainheader';
import Navbar from './Components/Navbar/Navbar';
import ItemPreview, { ItemPreviewprops } from './Components/ItemPreview/ItemPreview';
import Outerwear from './Components/ShopCategory/Categories/Outerwear';
import tailoring from './Assets/tailoring.webp';
import shirt from './Assets/shirt.webp';
import top from './Assets/tops.webp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage/Home';
import Login from './Pages/Login/Login';
import Tailoring from './Components/ShopCategory/Categories/Tailoring';
import Tops from './Components/ShopCategory/Categories/Tops';
import Bottoms from './Components/ShopCategory/Categories/Bottoms';
import Footwear from './Components/ShopCategory/Categories/Footwear';
import Outer from './Components/ShopCategory/Categories/Outer';

function App() {
  const items: ItemPreviewprops[] = [];
  for (let i = 0; i < 5; i++) {
    items.push({
      dateposted: 10,
      image: shirt,
      description: 'Supreme Hoodie',
      brand: 'Supreme',
      id: i,
    });
  }

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Mainheader />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Menswear/Tailoring' element={<Tailoring />}></Route>
          <Route path='/Menswear/Tops' element={<Tops />}></Route>
          <Route path='/Menswear/Bottoms' element={<Bottoms />}></Route>
          <Route path='/Menswear/Footwear' element={<Footwear />}></Route>
          <Route path='/Menswear/Outerwear' element={<Outer />}></Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
