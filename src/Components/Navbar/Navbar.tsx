import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';

function Navbar() {
  const designerDisclosure = useDisclosure();
  const mensDisclosure = useDisclosure();
  const womensDisclosure = useDisclosure();
  return (
    <>
      <HStack spacing='24px'>
        <Spacer></Spacer>
        <Spacer></Spacer>
        <Menu isLazy isOpen={designerDisclosure.isOpen}>
          <MenuButton onMouseEnter={designerDisclosure.onOpen} fontWeight='bold'>
            Designers
          </MenuButton>
          <MenuList
            onMouseEnter={designerDisclosure.onOpen}
            onMouseLeave={designerDisclosure.onClose}
            borderRadius='0px'
            borderWidth='1px'
          >
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>Gucci</MenuItem>
            <MenuItem>Nike</MenuItem>
            <MenuItem>Adidas</MenuItem>
            <MenuItem>Rick Owens</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Menu isLazy isOpen={mensDisclosure.isOpen}>
          <MenuButton onMouseEnter={mensDisclosure.onOpen} fontWeight='bold'>
            Menswear
          </MenuButton>
          <MenuList
            onMouseEnter={mensDisclosure.onOpen}
            onMouseLeave={mensDisclosure.onClose}
            borderRadius='0px'
            borderWidth='1px'
          >
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>All Categories</MenuItem>
            <MenuItem>Tops</MenuItem>
            <MenuItem>Bottoms</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Menu isLazy isOpen={womensDisclosure.isOpen}>
          <MenuButton onMouseEnter={womensDisclosure.onOpen} fontWeight='bold'>
            Womenswear
          </MenuButton>
          <MenuList
            onMouseEnter={womensDisclosure.onOpen}
            onMouseLeave={womensDisclosure.onClose}
            borderRadius='0px'
            borderWidth='1px'
          >
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>All Categories</MenuItem>
            <MenuItem>Tops</MenuItem>
            <MenuItem>Bottoms</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Button fontWeight={'bold'} _hover={{ textColor: 'red' }} backgroundColor='white'>
          Sneakers
        </Button>

        <Spacer></Spacer>
        <Spacer></Spacer>
      </HStack>
    </>
  );
}

export default Navbar;
