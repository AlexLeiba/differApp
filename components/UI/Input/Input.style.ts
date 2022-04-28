import styled from "styled-components/native";
import { TextInput, Text } from "react-native";

interface Props {
  width: string | number;
  padding?: string | number;
  border?: string | number;
  fontSize?: string | number;
  height?: string | number;
  labelFontSize?: string | number;
  labelColor?: string | number;
  onFocus?: string;
  borderRadius?: string | number;
  paddingBottom?: string | number;
}
export const Container = styled.View<Props>`
  width: ${({ width }) => (width ? width : "100%")};
`;

export const InputElement = styled(TextInput)<Props>`
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? { fontSize } : "16px")};
  line-height: 24px;
  padding: ${({ padding }) => (padding ? padding : "1px")};
  background-color: #ffffff;
  border: ${({ border }) => (border ? border : {})};
  height: ${({ height }) => (height ? height : "25px")};
  ${({ onFocus }) => (onFocus ? onFocus : {})} /* outline-style: none; */
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? { paddingBottom } : {}};
`;

export const Label = styled.Text<Props>`
  font-size: ${({ labelFontSize }) => (labelFontSize ? labelFontSize : "15px")};
  color: ${({ labelColor }) => (labelColor ? labelColor : "black")};
`;
