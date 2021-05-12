import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderMenu = [
  { id: "#About", value: "SOTOKoについて" },
  { id: "#Contents", value: "業務内容" },
  { id: "#Recruit", value: "求人情報" },
  { id: "#Contact", value: "お問い合わせ" },
];

const Header = () => {
  return (
    <Box
      display="flex"
      color="whiteAlpha.900"
      h="20"
      w="100%"
      justifyContent="space-between"
      px="4em"
      pos="absolute"
    >
      <Text as="h1" fontSize="3xl" my="auto" flexGrow="1">
        SO
        <Text fontSize="4xl" display="inline">
          T
        </Text>
        Ko
      </Text>
      <Box my="auto">
        {HeaderMenu.map((menu) => {
          return (
            <Button
              key={menu.value}
              display="inline-block"
              id={menu.value}
              variant="ghost"
              colorScheme="white"
              _focus="none"
              _hover={{
                textDecoration: "underline",
                transition: { textDecoration: "0.3s" },
              }}
            >
              <AnchorLink href={menu.id}>{menu.value}</AnchorLink>
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
export default Header;
