import {Grid} from "@chakra-ui/react";
import { NextPage } from "next";
import { Headline } from "../../type";
import Cardheadline from "./Cardheadline";


const Headlines: NextPage<{headlines: Headline[]}> = ({headlines}) => {
    return (
        <Grid templateColumns={{ base: "repeat(2, 0,5fr)", sm: "repeat(2, 0.7fr)", md: "repeat(3, 0.7fr)", lg:"repeat(5, 0.7fr)" }} gap={6} p={5}>
        {headlines?.map((headline:Headline) => (
          <Cardheadline key={headline.id} headline={headline} />
        ))}
      </Grid>
    )
}

export default Headlines

