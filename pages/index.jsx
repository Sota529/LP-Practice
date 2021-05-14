import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import Footer from "../components/template/footer";
import Header from "../components/template/header";
import Layout from "../components/template/Layout";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>SOTOKo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box
        bgImage="url('/image/Topimage.jpg')"
        h={{ base: "40vh", sm: "50vh", md: "70vh" }}
        w="100%"
        bgSize={{ base: "cover", md: "cover" }}
      >
        <Box
          textAlign="center"
          pt={{ base: "2.5em",  md: "3.5em" }}
          fontSize={["2.5em", "4rem"]}
          color="#fff"
          fontFamily="Philosopher serif"
        >
          によにょにょ
        </Box>
      </Box>
      <Layout>
        <Main
          id="About"
          title="SOTOKoについて"
          main="SOTOKoは猫をこよなく愛する私が作成した架空の会社です。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
        />
        <Main
          id="Contents"
          title="業務内容"
          main="猫を眺めることです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
        />
        <Main
          id="Recruit"
          title="求人情報"
          main="将来は猫を飼いたいと思っています。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
        />
        <Main id="Contact" title="お問い合わせ" />
      </Layout>
      <Footer />
    </>
  );
}
