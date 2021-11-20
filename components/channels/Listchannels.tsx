import {  NextPage } from "next";
import { Channel } from "../../type";
import Cardchannel from "./Cardchannel";
import {Grid} from "@chakra-ui/react";



const Listchannels: NextPage<{channels: Channel[]}> = ({channels}) => {
    return (
        <Grid templateColumns={{ base: "repeat(2, 0,5fr)", sm: "repeat(2, 0.7fr)", md: "repeat(3, 0.7fr)", lg:"repeat(5, 0.7fr)" }} gap={6} p={5}>
        {channels?.slice(0, 5).map((channel) => (
          <Cardchannel key={channel.id} channel={channel} />
        ))}
      </Grid>
    );
  };
  
  export default Listchannels;