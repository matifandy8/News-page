import Image from "next/image";

import { Headline } from "../../type";
import { Stack, Text, Flex } from "@chakra-ui/react";

const Cardheadline = ({ headline }: { headline: Headline }): JSX.Element => {
  return (
    <Stack p={8} boxShadow={"lg"} borderRadius={8} height="1.5fr" width="2fr">
      <Flex >
        <Stack height="100px" width="100px">
          <Image
            alt={headline.name}
            src={headline.urlToImage}
            width="100%"
            height="100%"
            />
        </Stack>
        <Stack>
        <Text fontWeight="bold" fontSize="lg">
          {headline.name}
        </Text> 
        <Text fontWeight="bold" fontSize="sm">
        {headline.name}
      </Text>
      </Stack>

      </Flex>
     
    </Stack>
  );
};

export default Cardheadline;
