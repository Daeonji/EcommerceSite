import { VStack, Spacer, Input, HStack, Select } from '@chakra-ui/react';

function Sell() {
  return (
    <VStack paddingTop={'40px'} paddingRight={'500px'}>
      <p style={{ fontWeight: 'bold', fontSize: '32px' }}>Add a new listing</p>
      <Spacer />
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '17px',
          paddingRight: '200px',
          paddingBottom: '20px',
        }}
      >
        DETAILS
      </p>
      <HStack paddingLeft={'310px'} paddingBottom='25px'>
        <Input placeholder='Designer' w={'300px'} left='15px' />
        <Select placeholder='Select size' left='25px' w='300px'>
          <option value='option1'>Small</option>
          <option value='option2'>Medium</option>
          <option value='option3'>Large</option>
        </Select>
      </HStack>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '17px',
          paddingRight: '165px',
          paddingBottom: '20px',
        }}
      >
        ITEM NAME
      </p>
      <Input placeholder='Item Name' w={'500px'} left='120px' />
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '17px',
          paddingRight: '150px',
          paddingTop: '20px',
        }}
      >
        DESCRIPTION
      </p>
      <Input placeholder='Item Description' w={'500px'} h='200px' left='120px' />
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '17px',
          paddingRight: '210px',
          paddingTop: '20px',
        }}
      >
        PRICE
      </p>
      <HStack paddingLeft={'310px'} paddingBottom='25px'>
        <Input placeholder='Original Price' w={'300px'} left='15px' />
        <Input placeholder='Reduced Price' w={'300px'} left='15px' />
      </HStack>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '17px',
          paddingRight: '125px',
          paddingTop: '20px',
        }}
      >
        ITEM IMAGE URL
      </p>
      <Input placeholder='URL' w={'600px'} left='165px' />
    </VStack>
  );
}

export default Sell;
