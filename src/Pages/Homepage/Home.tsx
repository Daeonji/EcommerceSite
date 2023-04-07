import { Box, HStack, Spacer, VStack } from '@chakra-ui/react';
import ItemPreview, { ItemPreviewprops } from '../../Components/ItemPreview/ItemPreview';
import Mainheader from '../../Components/Mainheader/Mainheader';
import Navbar from '../../Components/Navbar/Navbar';
import Outerwear from '../../Components/ShopCategory/Categories/Outerwear';
import tailoring from '../../Assets/tailoring.webp';
import shirt from '../../Assets/shirt.webp';
import top from '../../Assets/tops.webp';
import bottom from '../../Assets/bottoms.webp';
import foot from '../../Assets/footwear.webp';
import outer from '../../Assets/outerwear.webp';
import * as backend from '../../store/Backend/Backend.Client';
import { useEffect, useState } from 'react';

function Home() {
  const [items, setItems] = useState<backend.Product[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await backend.getApiProducts();

      if (response.status === 200) {
        setItems(response.data);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <VStack spacing={3} align='stretch' paddingTop={'30px'}>
      <Box paddingLeft={'330px'}>
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Shop Popular Listings</p>
      </Box>
      <HStack spacing={18}>
        <Spacer />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          items!.map((item) => {
            return (
              <li key={item.id} style={{ listStyleType: 'none' }}>
                <ItemPreview
                  key={item.id!}
                  id={item.id!}
                  dateposted={2}
                  image={item.imageUrl!}
                  description={item.description!}
                  brand={item.designer!}
                  price={item.price!}
                  originalPrice={item.originalPrice!}
                  size={item.size!}
                />
              </li>
            );
          })
        )}
        <Spacer />
      </HStack>
      <Box paddingLeft={'350px'}>
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Shop Categories</p>
      </Box>

      <HStack spacing={2}>
        <Spacer />
        <Outerwear image={tailoring} description='Tailoring' url='/Menswear/Tailoring' />
        <Outerwear image={top} description='Tops' url='/Menswear/Tops' />
        <Outerwear image={bottom} description='Bottoms' url='/Menswear/Bottoms' />
        <Outerwear image={foot} description='Footwear' url='/Menswear/Footwear' />
        <Outerwear image={outer} description='Outerwear' url='/Menswear/Outerwear' />
        <Spacer />
      </HStack>
    </VStack>
  );
}

export default Home;
