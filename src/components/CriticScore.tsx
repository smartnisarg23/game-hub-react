import { Badge, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      colorScheme={score > 75 ? "green" : score > 60 ? "yellow" : "red"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
