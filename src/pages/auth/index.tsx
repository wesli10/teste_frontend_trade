import { Auth } from "@/components/auth/Auth";
import { Container } from "../../components/Container";
import Head from "next/head";

const Index = () => (
  <Container>
    <Head>
      <title>My Team</title>
    </Head>
    <Auth />
  </Container>
);

export default Index;
