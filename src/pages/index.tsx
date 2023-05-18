import { Hub } from "@/components/home/Hub";
import { Container } from "../components/Container";
import Head from "next/head";

const Index = () => (
  <Container>
    <Head>
      <title>Meu Time</title>
    </Head>
    <Hub />
  </Container>
);

export default Index;
