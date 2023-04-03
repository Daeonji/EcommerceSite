import { ChakraProvider } from '@chakra-ui/react';
import Mainheader from './Components/Mainheader/Mainheader';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage/Home';
import Tailoring from './Components/ShopCategory/Categories/Tailoring';
import Tops from './Components/ShopCategory/Categories/Tops';
import Bottoms from './Components/ShopCategory/Categories/Bottoms';
import Outer from './Components/ShopCategory/Categories/Outer';
import Footwear from './Pages/Footwear/Footwear';

function App() {
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
