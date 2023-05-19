import { Leagues } from "@/components/leagues/Leagues";
import { Container } from "../../components/Container";
import Head from "next/head";

const Index = () => (
  <Container>
    <Head>
      <title>Meu time</title>
    </Head>
    <Leagues />
  </Container>
);

export default Index;
