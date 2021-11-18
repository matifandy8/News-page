import type { GetStaticProps, NextPage } from 'next'
import { Text, Container,Stack,StackDivider,Box} from "@chakra-ui/react"
import { Channel } from '../channels/type';
import Listchannels from '../components/Listchannels';
import Sidebar from '../components/layout/sidebar';

export const getStaticProps: GetStaticProps = async () => {
  const channels: Channel[] = await import("../channels/mock.json").then((res) => res.default);
  return {props: {channels}};
};

const Home: NextPage<{channels: Channel[]}> = ({channels}) =>{
  return (
    <Container bg="secondary.100" alignSelf="center" height="100%" maxWidth="container.xl" paddingX={0}>
      <Stack direction="row" divider={<StackDivider margin={0} />} height="100%" spacing={0}>
        <Stack bg="white" justifyContent="space-between" maxWidth={255} width="100%">
        <Sidebar/>
        </Stack>
        <Box width="100%">
        <Text m={5} fontWeight="bold" fontSize="2xl">Explore Channels</Text>
        <Listchannels channels={channels}/>
        </Box>
      </Stack>
    </Container>
  )
}

export default Home
