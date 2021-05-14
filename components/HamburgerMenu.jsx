import { Button } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HamburgerMenu = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box py="auto">
      <Button
        variant="ghost"
        colorScheme="white"
        _focus="none"
        display="block"
        onClick={onOpen}
      >
        <HamburgerIcon
          color="whiteAlpha.900"
          boxSize="3em"
          my="auto"
          display="inline-block"
        />
      </Button>
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        blockScrollOnMount={false}
      >
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />
          <DrawerBody mt="2em">
            {props.menus.map((menu) => {
              return (
                <Button
                  key={menu.id}
                  variant="ghost"
                  colorScheme="white"
                  w="100%"
                  py="2em"
                  mt="1em"
                  display="block"
                  _focus="none"
                  onClick={onClose}
                >
                  <AnchorLink href={menu.id}>{menu.value}</AnchorLink>
                </Button>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default HamburgerMenu;
