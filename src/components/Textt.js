import React from "react";
import { Text } from "@chakra-ui/react";

export default function Textt({ title, color, fontWeight }) {
  return (
    <Text
      fontSize={{ lg: "lg", base: "xs", md: "md", sm: "sm" }}
      color={color}
      fontWeight={fontWeight}
    >
      {title}
    </Text>
  );
}
