import styled from "styled-components/native";

interface Props {
  width: number | string;
  title: string;
  colorContainer?: string;
  fontSize?: string;
  colorTitle?: string;
  textAlign: string;
  padding: number | string;
  marginBottom: number | string;
  backgroundImage: string;
  disabled: boolean;
  fontWeight: string | number;
}
export const Container = styled.TouchableOpacity<Props>`
  ${({ width }) => (width ? { width: width } : { width: 200 })}
  ${({ colorContainer }) =>
    colorContainer
      ? { backgroundColor: colorContainer }
      : { backgroundColor: "white" }}
        ${({ backgroundImage }) =>
    backgroundImage ? { backgroundImage: backgroundImage } : {}}
      ${({ padding }) => (padding ? { padding: padding } : {})}
      ${({ borderRadius }) =>
    borderRadius ? { borderRadius: borderRadius } : {}}
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)}
`;

export const TextContainer = styled.Text<Props>`
  ${({ fontSize }) => (fontSize ? { fontSize: fontSize } : { fontSize: 20 })}
  ${({ colorTitle }) =>
    colorTitle ? { color: colorTitle } : { color: "black" }}
    ${({ textAlign }) => (textAlign ? { textAlign: textAlign } : {})}
    ${({ fontWeight }) => (fontWeight ? { fontWeight } : {})}
`;
