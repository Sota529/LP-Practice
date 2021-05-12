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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box bgImage="url('/image/Topimage.jpg')" minH="100vh" bgSize="cover">
        <Box
          textAlign="center"
          pt="20%"
          fontSize="4rem"
          color="#fff"
          fontFamily="Philosopher serif"
          transition="1s"
        >
          猫好きですか
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
