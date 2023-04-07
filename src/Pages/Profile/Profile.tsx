import {
  WrapItem,
  Wrap,
  VStack,
  HStack,
  Avatar,
  Spacer,
  Divider,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Filterbar from '../../Components/Filterbar/Filterbar';
import SortMenu from '../../Components/SortMenu/SortMenu';

function Profile() {
  return (
    <VStack paddingTop={'50px'}>
      <HStack>
        <Wrap>
          <WrapItem>
            <Button size='200px' style={{ backgroundColor: 'transparent' }} left='120px'>
              <Avatar size='xl' />
            </Button>
            <VStack spacing={0}>
              <p style={{ fontWeight: 'bold', fontSize: '30px', paddingRight: '875px' }}>
                Username
              </p>
              <p style={{ fontSize: '16px', paddingRight: '905px' }}>Joined in 2016</p>
              <p style={{ fontSize: '16px', paddingRight: '940px' }}>★★★★★</p>
              <HStack>
                <Spacer />
                <Tabs variant='line' colorScheme='black'>
                  <TabList>
                    <Tab>Listings</Tab>
                    <Tab>Likes</Tab>
                    <Tab>Feedback</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <VStack>
                        <HStack paddingLeft='1050px'>
                          <SortMenu />
                        </HStack>
                        <Divider />
                      </VStack>
                      <HStack paddingRight='1000px'>
                        <Filterbar />
                      </HStack>
                    </TabPanel>
                    <TabPanel>
                      <VStack paddingLeft='1150px'>
                        <SortMenu />
                        <Divider />
                      </VStack>
                    </TabPanel>
                    <TabPanel>
                      <VStack paddingRight={'1050px'}>
                        <p>Your FeedBacks will go here</p>
                      </VStack>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </HStack>
            </VStack>
            <Button right='180px' borderRadius='0px' borderWidth='2px'>
              Edit Profile
            </Button>
          </WrapItem>
        </Wrap>
      </HStack>
    </VStack>
  );
}
export default Profile;
