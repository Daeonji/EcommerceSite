import { Divider, HStack, VStack, Spacer } from '@chakra-ui/react';
import Filterbar from '../../Components/Filterbar/Filterbar';
import ItemPreview from '../../Components/ItemPreview/ItemPreview';
import tops from '../../Assets/tops.webp';
import SortMenu from '../../Components/SortMenu/SortMenu';

function Footwear() {
  return (
    <VStack>
      <Spacer />
      <HStack paddingLeft='1200px'>
        <SortMenu />
      </HStack>
      <Divider width='1300px' />
      <HStack>
        <Filterbar />
        <VStack align={'end'}>
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
