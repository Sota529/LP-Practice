import { Box } from "@chakra-ui/layout";

const Layout = ({ children }) => {
  return (
    <Box px={{ base: "2em", sm: "4em", md: "8em", lg: "14em" }} py="4em">
      {children}
    </Box>
  );
};
export default Layout;
