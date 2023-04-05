import { ChakraProvider } from '@chakra-ui/react';
import Mainheader from './Components/Mainheader/Mainheader';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage/Home';
import Tailoring from './Pages/Tailoring/Tailoring';
import Tops from './Pages/Tops/Tops';
import Bottoms from './Pages/Bottoms/Bottoms';
import Outer from './Pages/Outerwear/Outer';
import Footwear from './Pages/Footwear/Footwear';
import Product from './Pages/Product/Product';

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
          <Route path='/Product/:id' element={<Product />}></Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
