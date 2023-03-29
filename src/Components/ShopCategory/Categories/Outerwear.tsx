import { HStack, Spacer, VStack } from '@chakra-ui/react';
import tailoring from '../../../Assets/tailoring.webp';
type OuterwearProps = {
  image: string;
  description: string;
};

function Outerwear(prop: OuterwearProps) {
  return (
    <HStack>
      <Spacer />
      <VStack>
        <img src={prop.image} style={{ width: '200px', height: '200px', objectFit: 'cover' }}></img>
        <p style={{ fontWeight: 'bold', fontSize: '15px' }}>{prop.description}</p>
      </VStack>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </HStack>
  );
}
export default Outerwear;
