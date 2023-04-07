import { Image, Box, VStack, Spacer, HStack, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import shirt from '../../Assets/shirt.webp';
import * as backend from '../../store/Backend/Backend.Client';
import { SizeMap } from '../../Components/ItemPreview/ItemPreview';

function Product() {
  const params = useParams();

  const productId = parseInt(params.id!);

  const [productData, setProduct] = useState<backend.Product>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      const response = await backend.getApiProductsById(productId);

      if (response.status === 200) {
        setProduct(response.data);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <VStack paddingTop={'50px'} paddingRight='400px'>
      <HStack>
        <Box boxSize='lg'>
          <Image src={productData!.imageUrl!} />
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
              {productData?.designer}
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
          <p style={{ paddingRight: '170px', fontSize: '17px' }}>{productData?.name}</p>
          <p style={{ paddingRight: '130px', fontSize: '17px' }}>{productData?.description}</p>
          <p style={{ paddingRight: '220px', fontSize: '17px' }}>{SizeMap[productData!.size!]}</p>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default Product;
