import { Box, Container, defineStyle, Divider, HStack, Spacer, VStack } from '@chakra-ui/react';
import test from '../../Assets/shirt.webp';
type ItemPreviewprops = {
  Dateposted: number;
};

function ItemPreview(prop: ItemPreviewprops) {
  return (
    <Container maxW={'200px'}>
      <VStack alignItems={'start'}>
        <img src={test} width='200px' height='200px'></img>
        <p style={{ fontStyle: 'bold', fontSize: '10px' }}>Posted {prop.Dateposted} hours ago</p>
        <Divider />
        <HStack w='165px'>
          <p style={{ fontWeight: 'bold' }}>Supreme</p>
          <Spacer />
          <p style={{ fontWeight: 'bold' }}>L</p>
        </HStack>
        <p>Supreme Hoodie</p>
        <HStack w='170px'>
          <p style={{ color: 'red' }}>$140</p>
          <s>$900</s>
          <Spacer />
          <p>❤</p>
        </HStack>
      </VStack>
    </Container>
  );
}

export default ItemPreview;
