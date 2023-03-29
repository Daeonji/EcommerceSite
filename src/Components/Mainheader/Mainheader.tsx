import {
  AbsoluteCenter,
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Button,
  Input,
  Spacer,
} from '@chakra-ui/react';
import logo from '../../Assets/logo.png';

function Mainheader() {
  return (
    <Box maxW='m' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <HStack spacing='24px'>
        <Spacer />
        <img src={logo} width='200' height='200'></img>
        <Input variant='filled' placeholder='Search for ' width='500px'></Input>
        <Button
          aria-label='Search database'
          borderRadius='0px'
          borderWidth='2px'
          backgroundColor={'black'}
          textColor='white'
          borderColor={'black'}
          _hover={{ textColor: 'red' }}
        >
          Search
        </Button>
        <Spacer />
        <Button
          aria-label='Sell'
          borderRadius='0px'
          borderWidth='2px'
          _hover={{ borderColor: 'black' }}
        >
          Sell
        </Button>
        <Button
          aria-label='Shop'
          borderRadius='0px'
          borderWidth='2px'
          _hover={{ borderColor: 'black' }}
        >
          Shop
        </Button>
        <Button
          aria-label='Sign Up'
          borderRadius='0px'
          borderWidth='2px'
          backgroundColor={'black'}
          textColor='white'
          borderColor={'black'}
          _hover={{ textColor: 'red' }}
        >
          Sign Up
        </Button>
        <Button
          aria-label='Login'
          borderRadius='0px'
          borderWidth='2px'
          _hover={{ borderColor: 'black' }}
        >
          Login
        </Button>
        <Spacer />
      </HStack>
    </Box>
  );
}

export default Mainheader;
