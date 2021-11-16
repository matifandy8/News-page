import {  NextPage } from "next";
import { Channel } from "../channels/type";
import Cardchannel from "./Cardchannel";


const Listchannels: NextPage<{channels: Channel[]}> = ({channels}) => {
    return (
        <section className="px-4 mt-24 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {channels?.map((channel) => (
          <Cardchannel key={channel.id} channel={channel} />
        ))}
      </section>
    );
  };
  
  export default Listchannels;