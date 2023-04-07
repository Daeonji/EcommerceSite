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

export const SizeMap: { [key: number]: string } = { 1: 'S', 2: 'M', 3: 'L' };

export type ItemPreviewprops = {
  dateposted: number;
  originalPrice?: number;
  price?: number;
  image: string;
  description: string;
  brand: string;
  id: number;
  size?: number;
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
            <p style={{ fontWeight: 'bold' }}>{SizeMap[prop.size ?? 3]}</p>
          </HStack>
          <p>{prop.description}</p>
          <HStack w='170px'>
            <p style={{ color: 'red' }}>${prop.price}</p>
            <s>${prop.originalPrice}</s>
            <Spacer />
            <p>❤</p>
          </HStack>
        </VStack>
      </Container>
    </Button>
  );
}

export default ItemPreview;
