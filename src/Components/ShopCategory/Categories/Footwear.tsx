import {
  Button,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  Spacer,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
  CheckboxGroup,
  Stack,
  Input,
} from '@chakra-ui/react';

function Footwear() {
  return (
    <VStack>
      <Spacer />
      <HStack paddingLeft='1200px'>
        <Menu>
          <MenuButton as={Button} borderRadius='0px' borderWidth='2px' borderColor='black'>
            Sort By:
          </MenuButton>
          <MenuList borderRadius='0px' borderWidth='2px'>
            <MenuItem>Default</MenuItem>
            <MenuItem>Trending</MenuItem>
            <MenuItem>Low Price</MenuItem>
            <MenuItem>High Price</MenuItem>
            <MenuItem>New</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <Divider width='1300px' />
      <Accordion defaultIndex={[0]} allowMultiple paddingRight='1048px'>
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
            <p style={{ fontWeight: 'bold' }}>Menswear</p>
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
              <Input variant='filled' placeholder='Search for Designers' width='200px'></Input>
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
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
}

export default Footwear;
