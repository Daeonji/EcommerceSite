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
      <HStack paddingLeft='1200px'>
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
        <Filterbar />
        <VStack align={'initial'}>
          <p
            style={{
              fontSize: '25px',
              fontWeight: 'bold',
              paddingRight: '425px',
            }}
          >
            Available Listings
          </p>
          <ItemPreview
            dateposted={10}
            image={tops}
            description={'This is a shirt'}
            brand={'Supreme'}
            id={0}
          />
        </VStack>
        <Spacer />
      </HStack>
    </VStack>
  );
}

export default Footwear;
