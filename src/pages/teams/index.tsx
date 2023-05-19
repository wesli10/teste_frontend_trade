import { Teams } from "@/components/teams/Teams";
import { Container } from "../../components/Container";
import Head from "next/head";

const Index = () => (
  <Container>
    <Head>
      <title>Meu time</title>
    </Head>
    <Teams />
  </Container>
);

export default Index;
