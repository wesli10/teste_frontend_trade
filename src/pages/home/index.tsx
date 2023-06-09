import { Container } from "../../components/Container";
import Head from "next/head";
import { FormData } from "@/components/home/FormData";

const Index = () => (
  <Container>
    <Head>
      <title>My Team</title>
    </Head>
    <FormData />
  </Container>
);

export default Index;
