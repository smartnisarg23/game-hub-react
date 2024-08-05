import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as={"h1"} marginY={5}>
      {gameQuery.platform?.name || ""} {gameQuery.genre?.name || ""} Games
    </Heading>
  );
};

export default GameHeading;
