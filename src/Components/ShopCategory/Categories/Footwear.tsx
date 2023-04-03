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
      <Accordion defaultIndex={[0]} allowMultiple paddingRight='1150px'>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontWeight='bold'>
                Department
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontWeight='bold'>
                Category
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
