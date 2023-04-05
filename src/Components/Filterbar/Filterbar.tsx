import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Stack,
  Checkbox,
  Input,
  Box,
  HStack,
} from '@chakra-ui/react';

function Filterbar() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left' fontWeight='bold'>
              Department
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack spacing={2} direction='column'>
            <Checkbox>Menswear</Checkbox>
            <Checkbox>Womenswear</Checkbox>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left' fontWeight='bold' w='200px'>
              Size
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p style={{ fontWeight: 'bold' }}>Footwear</p>
          <Stack spacing={2} direction='column'>
            <Checkbox>7</Checkbox>
            <Checkbox>7.5</Checkbox>
            <Checkbox>8</Checkbox>
            <Checkbox>8.5</Checkbox>
            <Checkbox>9</Checkbox>
            <Checkbox>9.5</Checkbox>
            <Checkbox>10</Checkbox>
            <Checkbox>10.5</Checkbox>
          </Stack>
          <p style={{ fontWeight: 'bold' }}>Menswear</p>
          <Stack spacing={2} direction='column'>
            <Checkbox>Small</Checkbox>
            <Checkbox>Medium</Checkbox>
            <Checkbox>Large</Checkbox>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left' fontWeight='bold' w='200px'>
              Designer
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack spacing={2} direction='column'>
            <Input placeholder='Search for Designers' width='200px'></Input>
            <Checkbox>Balenciaga</Checkbox>
            <Checkbox>Rick Owens</Checkbox>
            <Checkbox>Nike</Checkbox>
            <Checkbox>Vans</Checkbox>
            <Checkbox>Jordan Brand</Checkbox>
            <Checkbox>Adidas</Checkbox>
            <Checkbox>Converse</Checkbox>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left' fontWeight='bold' w='200px'>
              Price
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <HStack>
            <Input placeholder='Min $' htmlSize={4} />
            <Input placeholder='Max $' htmlSize={4} />
          </HStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default Filterbar;
