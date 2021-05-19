import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Text, Heading } from "@chakra-ui/layout";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

const Main = (props) => {
  return (
    <div id={props.id}>
      <Heading size="lg" textAlign="center" textDecoration="underline">
        {props.title}
      </Heading>
      {props.main ? (
        <Text display="block" mx="auto" fontSize="20px" mt="0.8em" pb="3em">
          {props.main}
        </Text>
      ) : null}
    </div>
  );
};
export default Main;
