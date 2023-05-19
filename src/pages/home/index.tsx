import { Header } from "@/components/layout/Header";
import { Container } from "../../components/Container";
import Head from "next/head";
import { FormData } from "@/components/home/FormData";

const Index = () => (
  <Container>
    <Head>
      <title>Meu Time</title>
    </Head>
    <Header />
    <FormData />
  </Container>
);

export default Index;
