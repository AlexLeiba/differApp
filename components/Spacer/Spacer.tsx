import React from "react";
import { Container } from "./Spacer.style";

interface Props {
  height: number | string;
}
export function Spacer({ height }: Props) {
  return <Container height={height} />;
}
