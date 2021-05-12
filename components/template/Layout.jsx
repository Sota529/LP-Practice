import { Box } from "@chakra-ui/layout";

const Layout = ({ children }) => {
  return (
    <Box px="14em" py="4em">
      {children}
    </Box>
  );
};
export default Layout;
