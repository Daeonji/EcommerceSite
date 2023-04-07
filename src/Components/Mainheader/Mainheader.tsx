import {
  Box,
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
  useToast,
  Avatar,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import * as UserApi from '../../store/Backend/Backend.Client';
import { useState } from 'react';
import { useAuthContext } from '../../store/context/AuthContext';

function Mainheader() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerProfile, setRegisterProfile] = useState('');

  const authContext = useAuthContext();

  const toast = useToast();

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  const loginDisclosure = useDisclosure();
  const signUpDisclosure = useDisclosure();
  const CreateUser = async (username: string, password: string, profile: string) => {
    const response = await UserApi.postApiUsers({
      username: username,
      password: password,
      profileImageUrl: profile,
    });

    if (response.status !== 200) {
      console.error(response);
      signUpDisclosure.onClose();
      toast({
        title: 'Could not create account...',
        description: 'Your account was not created.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    console.log(response);

    const loginResponse = await UserApi.postApiUsersLogin({
      username: username,
      password: password,
    });

    console.log(loginResponse);

    if (loginResponse.status === 200) {
      authContext.setAuthToken(loginResponse.data.accessToken!);
      authContext.setUsername(loginResponse.data.user!.username!);
      authContext.setProfilePicture(loginResponse.data.user!.profileImageUrl!);
      toast({
        title: 'Account created.',
        description: 'Your account was created!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
    signUpDisclosure.onClose();
  };

  const login = async (username: string, password: string) => {
    const loginResponse = await UserApi.postApiUsersLogin({
      username: username,
      password: password,
    });

    console.log(loginResponse);

    if (loginResponse.status === 200) {
      authContext.setAuthToken(loginResponse.data.accessToken!);
      authContext.setUsername(loginResponse.data.user!.username!);
      authContext.setProfilePicture(loginResponse.data.user!.profileImageUrl!);
      toast({
        title: 'Login success!',
        description: 'Your account is logged in!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Login failed...',
        description: 'Unable to login with those creds',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    loginDisclosure.onClose();
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
          onClick={() => navigate('/Sell')}
        >
          Sell
        </Button>
        <Button
          aria-label='Shop'
          borderRadius='0px'
          borderWidth='2px'
          _hover={{ borderColor: 'black' }}
          onClick={() => navigate('/Profile')}
        >
          Shop
        </Button>
        {!authContext.username ? (
          <>
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
                    <HStack>
                      <p style={{ fontWeight: 'bold' }}>Profile Picture</p>
                      <Input
                        variant='filled'
                        placeholder='Profile Image URL'
                        width='300px'
                        onChange={(e) => {
                          setRegisterProfile(e.target.value);
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
                          await CreateUser(registerUsername, registerPassword, registerProfile);
                        }}
                      >
                        Sign Up
                      </Button>
                      <Button
                        onClick={signUpDisclosure.onClose}
                        borderRadius='0px'
                        borderWidth='2px'
                      >
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
                      <Input
                        variant='filled'
                        width='300px'
                        onChange={(e) => {
                          setLoginUsername(e.target.value);
                        }}
                      ></Input>
                    </HStack>
                    <HStack>
                      <p>Password</p>
                      <Input
                        variant='filled'
                        width='300px'
                        onChange={(e) => {
                          setLoginPassword(e.target.value);
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
                        onClick={() => {
                          login(loginUsername, loginPassword);
                        }}
                      >
                        Login
                      </Button>
                      <Button
                        onClick={loginDisclosure.onClose}
                        borderRadius='0px'
                        borderWidth='2px'
                      >
                        Cancel
                      </Button>
                    </HStack>
                  </VStack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        ) : (
          <Button
            background={'transparent'}
            _hover={{ background: 'transparent' }}
            onClick={() => {
              navigate('/profile');
            }}
          >
            <Avatar size='md' src={authContext.profilePicture} />
          </Button>
        )}
        <Spacer />
      </HStack>
    </Box>
  );
}

export default Mainheader;
