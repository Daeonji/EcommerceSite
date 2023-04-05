import { Image, Box, VStack, Spacer, HStack, Button } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import shirt from '../../Assets/shirt.webp';

function Product() {
  const params = useParams();
  return (
    <VStack paddingTop={'50px'} paddingRight='400px'>
      <HStack>
        <Box boxSize='lg'>
          <Image src={shirt} />
        </Box>
        <VStack paddingBottom={'300px'}>
          <HStack paddingLeft={'50px'}>
            <Link
              to={'/Menswear/Footwear'}
              style={{
                left: '20px',
                fontSize: '25px',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}
            >
              Sneakers
            </Link>
            <p
              style={{
                fontSize: '25px',
                fontWeight: 'bold',
              }}
            >
              x
            </p>
            <Link
              to={'/Menswear/Tailoring'}
              style={{
                fontSize: '25px',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}
            >
              Tailoring
            </Link>
            <Button
              fontSize='35px'
              fontWeight='bold'
              left={250}
              style={{ backgroundColor: 'transparent' }}
            >
              <p>♡</p>
            </Button>
          </HStack>
          <Spacer />
          <p style={{ paddingRight: '170px', fontSize: '17px' }}>Item Name</p>
          <p style={{ paddingRight: '130px', fontSize: '17px' }}>Item Description</p>
          <p style={{ paddingRight: '220px', fontSize: '17px' }}>Size</p>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default Product;
