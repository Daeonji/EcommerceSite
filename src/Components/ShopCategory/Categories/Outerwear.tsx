import { Box, Button, HStack, Spacer, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import tailoring from '../../../Assets/tailoring.webp';
type OuterwearProps = {
  image: string;
  description: string;
  url: string;
};

function Outerwear(prop: OuterwearProps) {
  const navigate = useNavigate();
  return (
    <HStack>
      <Spacer />
      <Button size={'20px'} variant='link' color={'black'} onClick={() => navigate(prop.url)}>
        <VStack>
          <img
            src={prop.image}
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          ></img>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>{prop.description}</p>
        </VStack>
      </Button>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </HStack>
  );
}
export default Outerwear;
