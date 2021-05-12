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
      {props.id === "Contact" ? (
        <Box mt="0.8em" w="60%" mx="auto">
          <Button
            display="block"
            variant="solid"
            colorScheme="red"
            shadow="md"
            mx="auto"
            mb={["1em", "none"]}
            _focus="none"
            _hover="none"
          >
            <PhoneIcon
              mr="2px"
              verticalAlign="text-bottom"
              display="inline-block"
            />
            電話でお問い合わせ
          </Button>
          <Button
            display="block"
            variant="solid"
            colorScheme="blue"
            shadow="md"
            mx="auto"
            _focus="none"
            _hover="none"
          >
            <EmailIcon
              mr="2px"
              verticalAlign="text-bottom"
              display="inline-block"
            />
            メールでお問い合わせ
          </Button>
        </Box>
      ) : null}
    </div>
  );
};
export default Main;
