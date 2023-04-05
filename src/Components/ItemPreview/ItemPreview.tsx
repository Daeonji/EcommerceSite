import {
  Box,
  Button,
  Container,
  defineStyle,
  Divider,
  HStack,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export type ItemPreviewprops = {
  dateposted: number;
  image: string;
  description: string;
  brand: string;
  id: number;
};

function ItemPreview(prop: ItemPreviewprops) {
  const navigate = useNavigate();
  return (
    <Button
      size={'20px'}
      onClick={() => navigate('/Product')}
      style={{ backgroundColor: 'transparent' }}
    >
      <Container maxW={'200px'}>
        <VStack alignItems={'start'}>
          <img
            src={prop.image}
            style={{ objectFit: 'cover', width: '200px', height: '200px' }}
          ></img>
          <p style={{ fontStyle: 'bold', fontSize: '10px' }}>Posted {prop.dateposted} hours ago</p>
          <Divider />
          <HStack w='165px'>
            <p style={{ fontWeight: 'bold' }}>{prop.brand}</p>
            <Spacer />
            <p style={{ fontWeight: 'bold' }}>L</p>
          </HStack>
          <p>{prop.description}</p>
          <HStack w='170px'>
            <p style={{ color: 'red' }}>$140</p>
            <s>$900</s>
            <Spacer />
            <p>❤</p>
          </HStack>
        </VStack>
      </Container>
    </Button>
  );
}

export default ItemPreview;
