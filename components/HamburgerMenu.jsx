import { Button } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";

const HamburgerMenu = () => {
  return (
    <Box py="auto">
      <Button variant="ghost" colorScheme="white" _focus="none" display="block">
        <HamburgerIcon
          color="whiteAlpha.900"
          boxSize="3em"
          my="auto"
          display="inline-block"
        />
      </Button>
    </Box>
  );
};

export default HamburgerMenu;
