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
        <Box
          display="flex"
          justifyContent="space-around"
          mt="0.8em"
          w="50%"
          mx="auto"
        >
          <Button
            display="inline-block"
            variant="solid"
            colorScheme="red"
            shadow="md"
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
            display="inline-block"
            variant="solid"
            colorScheme="blue"
            shadow="md"
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
