import {Grid} from "@chakra-ui/react";
import Cardheadline from "./Cardheadline";


export default function Projects({ headlines }:any) {
   console.log(headlines)
    return (
        <Grid templateColumns={{ base: "repeat(2, 0,5fr)", sm: "repeat(2, 0.7fr)", md: "repeat(3, 0.7fr)", lg:"repeat(5, 0.7fr)" }} gap={6} p={5}>
        {headlines?.map((headline:any) => (
          <Cardheadline key={headline.id} headline={headline} />
        ))}
      </Grid>
    )
}


