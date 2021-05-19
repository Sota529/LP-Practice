import { Box, Center, Heading, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import Grid1 from "./Icons/Grid1";
import Grid2 from "./Icons/Grid2";
import Grid3 from "./Icons/Grid3";

const GridItemList = [
  {
    id: "Left",
    icon: <Grid1 />,
    main: (
      <>
        <Text color="yellow" display="inline">
          幸福
        </Text>
        を運ぶのもの
      </>
    ),
    text: "猫は可愛い生き物です。一日一回は必ず見るようにしましょう。",
  },
  {
    id: "Center",
    icon: <Grid2 />,
    main: (
      <>
        <Text color="yellow" display="inline">
          仲間
        </Text>
        を増やすもの
      </>
    ),
    text: "猫を好きな人はたくさんいます。人と人とのつながりを大切にしてみませんか？",
  },
  {
    id: "Right",
    icon: <Grid3 />,
    main: (
      <>
        <Text color="yellow" display="inline">
          気軽に
        </Text>
        みれるもの
      </>
    ),
    text: "猫カフェやYoutube。猫を見るのに準備は要りません。",
  },
];

const GridItem = () => {
  return (
    <Wrap spacing="10px" justify="center">
      {GridItemList.map((item) => {
        return (
          <WrapItem key={item.id}>
            <Box
              shadow="md"
              w="350px"
              h="450px"
              borderRadius="lg"
              bgGradient="linear(to-b, blue.400,  blue.200 )"
            >
              <Box borderRadius="full" bg="white" w="90%" mx="auto">
                {item.icon}
              </Box>
              <Heading
                fontWeight="semibold"
                fontSize="28px"
                textAlign="center"
                color="whiteAlpha.900"
                m="0.8em 0 1em"
              >
                {item.main}
              </Heading>
              <Text
                mx="1em"
                color="white"
                fontWeight="semibold"
                fontSize="18px"
              >
                {item.text}
              </Text>
            </Box>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default GridItem;
