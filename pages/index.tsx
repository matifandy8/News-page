import type { GetStaticProps, NextPage } from 'next'
import { Text, Container} from "@chakra-ui/react"
import { Channel } from '../channels/type';
import Listchannels from '../components/Listchannels';
import Sidebar from '../components/layout/sidebar';
import Footer from '../components/layout/footer';

export const getStaticProps: GetStaticProps = async () => {
  const channels: Channel[] = await import("../channels/mock.json").then((res) => res.default);
  return {props: {channels}};
};

const Home: NextPage<{channels: Channel[]}> = ({channels}) =>{
  return (
    <Container bg="secondary.100" alignSelf="center" height="100%" maxWidth="container.xl" paddingX={0}>
         <Sidebar/>
        <Listchannels channels={channels}/>
        <Footer/>
    </Container>
  )
}

export default Home
