import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HamburgerMenu from "../HamburgerMenu";

const HeaderMenu = [
  { id: "#About", value: "SOTOKoについて" },
  { id: "#Contents", value: "業務内容" },
  { id: "#Recruit", value: "求人情報" },
  { id: "#Contact", value: "お問い合わせ" },
];
const Header = () => {
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");

  return (
    <Box color="whiteAlpha.900" h="20" w="100%" pos="absolute" mt="1em">
      {isLargerThan720 ? (
        <Box px={["2em"]} display="flex" justifyContent="space-between">
          <Text as="h1" fontSize="3xl" my="auto">
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
                  display="inline"
                  id={menu.value}
                  variant="ghost"
                  colorScheme="white"
                  _focus="none"
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  <AnchorLink href={menu.id}>{menu.value}</AnchorLink>
                  {menu.value}
                </Button>
              );
            })}
          </Box>
        </Box>
      ) : (
        <>
          <Flex>
            <HamburgerMenu menus={HeaderMenu} />
            <Box>
              <Text as="h1" fontSize="3xl" my="" flexGrow="1">
                SO
                <Text fontSize="4xl" display="inline">
                  T
                </Text>
                Ko
              </Text>
            </Box>
          </Flex>
        </>
      )}
    </Box>
  );
};
export default Header;
