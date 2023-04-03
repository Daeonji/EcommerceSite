import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';

function SortMenu() {
  return (
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
  );
}

export default SortMenu;
