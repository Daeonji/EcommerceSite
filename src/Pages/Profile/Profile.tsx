import { WrapItem, Wrap, VStack, HStack, Avatar, Spacer, Divider, Button } from '@chakra-ui/react';
import Filterbar from '../../Components/Filterbar/Filterbar';
import SortMenu from '../../Components/SortMenu/SortMenu';

function Profile() {
  return (
    <VStack paddingTop={'50px'}>
      <HStack>
        <Spacer />
        <Wrap w='1000px'>
          <WrapItem>
            <Button size='200px' style={{ backgroundColor: 'transparent' }}>
              <Avatar size='xl' />
            </Button>
            <VStack spacing={0}>
              <p style={{ fontWeight: 'bold', fontSize: '30px', paddingLeft: '20px' }}>Username</p>
              <p style={{ fontSize: '16px', paddingRight: '10px' }}>Joined in 2016</p>
              <Divider width='120px' />
              <p style={{ fontSize: '16px', paddingRight: '50px' }}>★★★★★</p>
              <HStack>
                <p style={{ paddingTop: '50px', fontWeight: 'bold' }}>Listings</p>
                <Spacer w='40px' />
                <p style={{ paddingTop: '50px', fontWeight: 'bold' }}>Reviews</p>
                <Spacer />
              </HStack>
            </VStack>
            <Button left={'600px'} borderRadius='0px' borderWidth='2px'>
              Edit Profile
            </Button>
          </WrapItem>
        </Wrap>
      </HStack>
      <Divider width='1300px' />
      <VStack>
        <HStack paddingLeft='890px'>
          <SortMenu />
        </HStack>
        <Divider width='1300px' />
      </VStack>
      <HStack paddingRight='1050px'>
        <Filterbar />
      </HStack>
    </VStack>
  );
}
export default Profile;
