import styled from "styled-components/native";

interface Props {
  height: number | string;
}
export const Container = styled.View<Props>`
  width: 100%;
  ${({ height }) => (height ? { height: height } : {})}
`;
