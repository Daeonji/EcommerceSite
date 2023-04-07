import { Center, ChakraProvider, Spacer } from '@chakra-ui/react';
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
import Profile from './Pages/Profile/Profile';
import { AuthContext } from './store/context/AuthContext';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          username: username,
          setUsername: setUsername,
          authToken: token,
          setAuthToken: setToken,
        }}
      >
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
            <Route path='/Profile' element={<Profile />}></Route>
          </Routes>
          <Center paddingTop={'130px'}>
            {username ? <p>Logged in as {username}</p> : <p>Not logged in.</p>}
          </Center>
        </ChakraProvider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
