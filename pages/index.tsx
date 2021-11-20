import type { GetStaticProps, NextPage } from "next";
import {
  Container,
  Stack,
  StackDivider,
  Box,
} from "@chakra-ui/react";
import { Channel } from "../type";
import Listchannels from "../components/channels/Listchannels";
import Sidebar from "../components/layout/sidebar";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Sectionheader from "../components/Sectionheader";
import Headlines from "../components/headlines";

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        channels {
          id
          name
          image
        }
      }
    `,
  });

  return {
    props: {
      channels: data.channels,
    },
  };
}

const Home: NextPage<{ channels: Channel[] }> = ({ channels }) => {
  return (
    <Container
      alignSelf="center"
      height="100%"
      maxWidth="container.xl"
      paddingX={0}
    >
      <Stack
        direction="row"
        divider={<StackDivider margin={0} />}
        height="100%"
        spacing={0}
      >
        <Stack
          justifyContent="space-between"
          maxHeight="500px"
          maxWidth={255}
          width="100%"
        >
          <Sidebar />
        </Stack>
        <Box width="100%">
          <Sectionheader name="Explore Channels" />
          <Listchannels channels={channels} />

          <Sectionheader name="Today's Headlines" />
          <Headlines />
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
