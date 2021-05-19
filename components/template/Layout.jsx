import { Box } from "@chakra-ui/layout";

const Layout = ({ children }) => {
  return (
    <Box px={{ base: "2em", sm: "4em" }} py="4em">
      {children}
    </Box>
  );
};
export default Layout;
