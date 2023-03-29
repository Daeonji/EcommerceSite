import { Box, HStack, Spacer, VStack } from '@chakra-ui/react';
import ItemPreview, { ItemPreviewprops } from '../../Components/ItemPreview/ItemPreview';
import Mainheader from '../../Components/Mainheader/Mainheader';
import Navbar from '../../Components/Navbar/Navbar';
import Outerwear from '../../Components/ShopCategory/Categories/Outerwear';
import tailoring from '../../Assets/tailoring.webp';
import shirt from '../../Assets/shirt.webp';
import top from '../../Assets/tops.webp';

function Home() {
  const items: ItemPreviewprops[] = [];
  for (let i = 0; i < 5; i++) {
    items.push({
      dateposted: 10,
      image: shirt,
      description: 'Supreme Hoodie',
      brand: 'Supreme',
      id: i,
    });
  }

  return (
    <VStack spacing={3} align='stretch'>
      <Mainheader />
      <Navbar />
      <Box paddingLeft={'350px'}>
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Listings</p>
      </Box>
      <HStack>
        <Spacer />
        {items.map((item) => {
          return (
            <>
              <ItemPreview
                key={item.id}
                id={item.id}
                dateposted={item.dateposted}
                image={item.image}
                description={item.description}
                brand={item.brand}
              />
              <Spacer />
            </>
          );
        })}
      </HStack>
      <Box paddingLeft={'350px'}>
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Shop Menswear</p>
      </Box>

      <HStack spacing={20}>
        <Spacer />
        <Outerwear image={tailoring} description='Tailoring' />
        <Outerwear image={top} description='Tops' />
        <Outerwear image={shirt} description='Tops' />
        <Spacer />
      </HStack>
    </VStack>
  );
}

export default Home;
