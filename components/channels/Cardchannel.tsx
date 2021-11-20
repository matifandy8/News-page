import Image from "next/image";
import { Channel } from "../../type";
import {Stack,Text} from "@chakra-ui/react";


const Cardchannel = ({channel}: {channel: Channel}): JSX.Element => {
    
  return (
    <Stack p={8} boxShadow={'lg'} bg="white.100" borderRadius={8} height="160px" width="150px">
      <Image alt={channel.name} src={channel.image} width="100%" height="100%" />
      <Text fontWeight="bold" fontSize="lg">{channel.name}</Text>
    </Stack>
  );
};

export default Cardchannel;