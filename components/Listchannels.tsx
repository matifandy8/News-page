import {  NextPage } from "next";
import { Channel } from "../channels/type";
import Cardchannel from "./Cardchannel";
import {Grid} from "@chakra-ui/react";



const Listchannels: NextPage<{channels: Channel[]}> = ({channels}) => {
    return (
        <Grid templateColumns={{ base: "repeat(2, 0,5fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg:"repeat(5, 1fr)" }} gap={6} p={5}>
        {channels?.map((channel) => (
          <Cardchannel key={channel.id} channel={channel} />
        ))}
      </Grid>
    );
  };
  
  export default Listchannels;