import {
  Button,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  Spacer,
} from '@chakra-ui/react';
import Filterbar from '../../Components/Filterbar/Filterbar';
import ItemPreview from '../../Components/ItemPreview/ItemPreview';
import tops from '../../Assets/tops.webp';

function Footwear() {
  return (
    <VStack>
      <Spacer />
      <HStack width={'1500px'}>
        <Spacer />
        <Menu>
          <MenuButton as={Button} borderRadius='0px' borderWidth='2px' borderColor='black'>
            Sort By:
          </MenuButton>
          <MenuList borderRadius='0px' borderWidth='2px'>
            <MenuItem>Default</MenuItem>
            <MenuItem>Trending</MenuItem>
            <MenuItem>Low Price</MenuItem>
            <MenuItem>High Price</MenuItem>
            <MenuItem>New</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <Divider width='1300px' />
      <HStack>
        <VStack height={'930px'} width={'300px'}>
          <Filterbar />
          <Spacer />
        </VStack>
        <VStack>
          <HStack width={'580px'}>
            <p
              style={{
                fontSize: '25px',
                fontWeight: 'bold',
              }}
            >
              Available Listings
            </p>
            <Spacer />
          </HStack>
          <VStack>
            <HStack>
              <ItemPreview
                dateposted={10}
                image={tops}
                description={'This is a shirt'}
                brand={'Supreme'}
                id={0}
              />
              <ItemPreview
                dateposted={10}
                image={tops}
                description={'This is a shirt'}
                brand={'Supreme'}
                id={0}
              />
              <ItemPreview
                dateposted={10}
                image={tops}
                description={'This is a shirt'}
                brand={'Supreme'}
                id={0}
              />
            </HStack>
            <HStack>
              <ItemPreview
                dateposted={10}
                image={tops}
                description={'This is a shirt'}
                brand={'Supreme'}
                id={0}
              />
              <ItemPreview
                dateposted={10}
                image={tops}
                description={'This is a shirt'}
                brand={'Supreme'}
                id={0}
              />
              <ItemPreview
                dateposted={10}
                image={tops}
                description={'This is a shirt'}
                brand={'Supreme'}
                id={0}
              />
            </HStack>
            <HStack>
              <ItemPreview
                dateposted={10}
                image={tops}
                description={'This is a shirt'}
                brand={'Supreme'}
                id={0}
              />
              <ItemPreview
                dateposted={10}
                image={tops}
                description={'This is a shirt'}
                brand={'Supreme'}
                id={0}
              />
              <ItemPreview
                dateposted={10}
                image={tops}
                description={'This is a shirt'}
                brand={'Supreme'}
                id={0}
              />
            </HStack>
          </VStack>
          <Spacer />
        </VStack>
      </HStack>
    </VStack>
  );
}

export default Footwear;
