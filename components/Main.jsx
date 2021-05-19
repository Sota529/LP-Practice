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
        <Text
          display="block"
          fontSize="20px"
          m="2em 0 2.5em"
          pb=""
          textAlign="center"
        >
          {props.main}
        </Text>
      ) : null}
    </div>
  );
};
export default Main;
