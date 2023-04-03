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
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import * as UserApi from '../../store/Backend/users.api';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Mainheader() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  const loginDisclosure = useDisclosure();
  const signUpDisclosure = useDisclosure();
  const CreateUser = async (username: string, password: string) => {
    const response = await UserApi.PostUser({ username: username, password: password });
  };
  return (
    <Box maxW='m' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <HStack spacing='24px'>
        <Spacer />
        <Button
          size='20px'
          onClick={() => navigate('/')}
          style={{ backgroundColor: 'transparent' }}
        >
          <img src={logo} width='200' height='200'></img>
        </Button>
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
          onClick={signUpDisclosure.onOpen}
        >
          Sign Up
        </Button>
        <Modal isOpen={signUpDisclosure.isOpen} onClose={signUpDisclosure.onClose} isCentered>
          <ModalOverlay />
          <ModalContent borderRadius={'0px'} borderColor={'black'} borderWidth='3px'>
            <ModalHeader fontWeight='bold' fontSize={'40px'}>
              Create an Account
            </ModalHeader>
            <ModalBody>
              <VStack>
                <Divider />
                <HStack>
                  <p style={{ fontWeight: 'bold' }}>Username</p>
                  <Input
                    variant='filled'
                    placeholder='Username'
                    width='300px'
                    onChange={(e) => {
                      setRegisterUsername(e.target.value);
                    }}
                  ></Input>
                </HStack>
                <HStack>
                  <p style={{ fontWeight: 'bold' }}>Email</p>
                  <Input variant='filled' placeholder='Email' width='300px' left='18px'></Input>
                </HStack>
                <HStack>
                  <p style={{ fontWeight: 'bold' }}>Password</p>
                  <Input
                    variant='filled'
                    placeholder='Password'
                    width='300px'
                    onChange={(e) => {
                      setRegisterPassword(e.target.value);
                    }}
                  ></Input>
                </HStack>
                <Spacer />
                <HStack>
                  <Button
                    backgroundColor={'black'}
                    textColor={'white'}
                    _hover={{ color: 'red' }}
                    borderRadius='0px'
                    borderWidth='2px'
                    onClick={async () => {
                      await CreateUser(registerUsername, registerPassword);
                    }}
                  >
                    Sign Up
                  </Button>
                  <Button onClick={signUpDisclosure.onClose} borderRadius='0px' borderWidth='2px'>
                    Cancel
                  </Button>
                </HStack>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Button
          aria-label='Login'
          borderRadius='0px'
          borderWidth='2px'
          _hover={{ borderColor: 'black' }}
          onClick={loginDisclosure.onOpen}
        >
          Login
        </Button>
        <Modal isOpen={loginDisclosure.isOpen} onClose={loginDisclosure.onClose} isCentered>
          <ModalOverlay />
          <ModalContent borderRadius={'0px'} borderColor={'black'} borderWidth='3px'>
            <ModalHeader fontWeight='bold' fontSize={'40px'}>
              Login
            </ModalHeader>
            <ModalBody>
              <VStack padding={'20px'}>
                <Divider />
                <HStack>
                  <p>Username</p>
                  <Input variant='filled' width='300px'></Input>
                </HStack>
                <HStack>
                  <p>Password</p>
                  <Input variant='filled' width='300px'></Input>
                </HStack>
                <Spacer />
                <HStack>
                  <Button
                    backgroundColor={'black'}
                    textColor={'white'}
                    _hover={{ color: 'red' }}
                    borderRadius='0px'
                    borderWidth='2px'
                  >
                    Login
                  </Button>
                  <Button onClick={loginDisclosure.onClose} borderRadius='0px' borderWidth='2px'>
                    Cancel
                  </Button>
                </HStack>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Spacer />
      </HStack>
    </Box>
  );
}

export default Mainheader;
