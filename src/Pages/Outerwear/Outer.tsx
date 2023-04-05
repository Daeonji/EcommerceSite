import { VStack, Spacer, HStack, Divider } from '@chakra-ui/react';
import Filterbar from '../../Components/Filterbar/Filterbar';
import ItemPreview from '../../Components/ItemPreview/ItemPreview';
import SortMenu from '../../Components/SortMenu/SortMenu';
import tops from '../../Assets/shirt.webp';

function Outer() {
  return (
    <VStack>
      <Spacer />
      <HStack width={'1300px'}>
        <Spacer />
        <SortMenu />
      </HStack>
      <Divider width='1300px' />
      <HStack>
        <VStack height={'1100px'} width={'250px'}>
          <Filterbar />
          <Spacer />
        </VStack>
        <VStack>
          <HStack width={'1045px'}>
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
            <HStack spacing={10}>
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
              <ItemPreview
                dateposted={10}
                image={tops}
                description={'This is a shirt'}
                brand={'Supreme'}
                id={0}
              />
            </HStack>
            <Spacer />
            <HStack spacing={10}>
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
              <ItemPreview
                dateposted={10}
                image={tops}
                description={'This is a shirt'}
                brand={'Supreme'}
                id={0}
              />
            </HStack>
            <Spacer />
            <HStack spacing={10}>
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

export default Outer;
