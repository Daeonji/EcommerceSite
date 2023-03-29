import { HStack, Spacer, VStack } from '@chakra-ui/react';
import tailoring from '../../../Assets/tailoring.webp';

function Outerwear() {
  return (
    <HStack>
      <Spacer />
      <VStack>
        <img src={tailoring} width='200' height='100'></img>
        <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Tailoring</p>
      </VStack>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </HStack>
  );
}
export default Outerwear;
