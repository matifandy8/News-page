import Image from "next/image";

import { Headline } from "../../type"
import {Stack,Text} from "@chakra-ui/react";


const Cardheadline = ({headline}: {headline: Headline}): JSX.Element => {
    return (
    <Stack p={8} boxShadow={'lg'} bg="white.100" borderRadius={8} height="160px" width="150px">
      <Image alt={headline.name} src={headline.urlToImage} width="100%" height="100%" />
      <Text fontWeight="bold" fontSize="lg">{headline.name}</Text>
    </Stack>
    )
}

export default Cardheadline
