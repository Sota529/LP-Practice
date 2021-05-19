import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Box, Text, Heading } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HamburgerMenu from "../HamburgerMenu";

const HeaderMenu = [
  { id: "#About", value: "SOTOKoについて" },
  { id: "#cat", value: "猫を見るだけのアプリ" },
  // { id: "", value: "求人情報" },
  // { id: "", value: "お問い合わせ" },
];
const Header = () => {
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");

  return (
    <>
      {isLargerThan720 ? (
        <Box pos="absolute">
          <Box
            display="flex"
            justifyContent="space-between"
            px="5em"
            my="auto"
            pt="2em"
          >
            <Heading as="h1" fontSize="3xl">
              SO
              <Text fontSize="4xl" display="inline">
                T
              </Text>
              Ko
            </Heading>
            <Box display="flex" my="auto">
              {HeaderMenu.map((menu) => {
                return (
                  <Box
                    key={menu.value}
                    color="white"
                    ml="1em"
                    fontWeight="semibold"
                    display="block"
                    _hover={{
                      textDecoration: "underline",
                    }}
                  >
                    <AnchorLink href={menu.id} id={menu.value}>
                      {menu.value}
                    </AnchorLink>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <HamburgerMenu menus={HeaderMenu} />
          <Box>
            <Heading as="h1" fontSize="3xl" my="" flexGrow="1">
              SO
              <Text fontSize="4xl" display="inline">
                T
              </Text>
              Ko
            </Heading>
          </Box>
        </>
      )}
    </>
  );
};
export default Header;
