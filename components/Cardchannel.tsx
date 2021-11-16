import Image from "next/image";
import { Channel } from "../channels/type";


const Cardchannel = ({channel}: {channel: Channel}): JSX.Element => {
    
  return (
    <section >
      <p>{channel.name}</p>
    </section>
  );
};

export default Cardchannel;