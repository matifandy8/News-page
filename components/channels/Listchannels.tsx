import {  NextPage } from "next";
import { Channel } from "../../type";
import Cardchannel from "./Cardchannel";
import {Grid} from "@chakra-ui/react";



const Listchannels: NextPage<{channels: Channel[]}> = ({channels}) => {
    return (
        <Grid templateColumns={{ base: "repeat(2, 0,3fr)", sm: "repeat(2, 0.5fr)", md: "repeat(4, 0.4fr)", lg:"repeat(5, 1fr)" }} gap={6} p={5}>
        {channels?.slice(0, 5).map((channel) => (
          <Cardchannel key={channel.id} channel={channel} />
        ))}
      </Grid>
    );
  };
  
  export default Listchannels;