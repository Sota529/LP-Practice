import { Box, Heading, Link } from "@chakra-ui/layout";
import Head from "next/head";
import Footer from "../components/template/footer";
import Header from "../components/template/header";
import Layout from "../components/template/Layout";
import Main from "../components/Main";
import GridItem from "../components/atoms/GridItem";
import { Button } from "@chakra-ui/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>SOTOKo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        bgImage="url('/image/Topimage.jpg')"
        h={{ base: "40vh", sm: "50vh", md: "70vh" }}
        w="100%"
        bgSize={{ base: "cover", md: "cover" }}
      >
        <Header />
        <Heading
          textAlign="center"
          pt={{ base: "2.5em", md: "3.0em" }}
          fontSize={["2.5em", "4rem"]}
          color="#fff"
          mx="auto"
          fontFamily="Philosopher serif"
        >
          We Love Cats
        </Heading>
        <Button display="block" mx="auto" mt="1em" _focus={"none"}>
          ネコ好き?
        </Button>
      </Box>
      <Layout>
        <Main
          id="About"
          title="SOTOKoについて"
          main="SOTOKoは猫をこよなく愛する私が作成した架空の会社です。"
        />
        <GridItem />
      </Layout>
      <Main
        id="cat"
        title="猫を見るだけのアプリ"
        main={
          <Link
            href="https://love-cats.vercel.app/ "
            isExternal
            _focus={"none"}
          >
            https://love-cats.vercel.app/
          </Link>
        }
      />
      <Footer />
    </>
  );
}
