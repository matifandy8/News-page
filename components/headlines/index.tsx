import {Grid} from "@chakra-ui/react";
import { NextPage } from "next";
import { Headline } from "../../type";
import Cardheadline from "./Cardheadline";


const Headlines: NextPage<{headlines: Headline[]}> = ({headlines}) => {
    return (
        <Grid templateColumns={{ base: "repeat(1, 0,5fr)", sm: "repeat(2, 1fr)", md: "repeat(2, 1.5fr)", lg:"repeat(3, 2fr)" }} gap={6} p={5}>
        {headlines?.map((headline:Headline) => (
          <Cardheadline key={headline.id} headline={headline} />
        ))}
      </Grid>
    )
}

export default Headlines

