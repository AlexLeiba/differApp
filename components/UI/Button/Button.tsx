import react from "react";
import { Container, TextContainer } from "./Button.style";
// import { Text } from "react-native";

interface Props {
  width: number | string;
  title: string;
  handlePress: (value: any) => void;
  padding?: string | number;
  colorContainer?: string;
  fontSize?: string | number;
  colorTitle?: string;
  textAlign?: string;
  borderRadius?: number | string;
  backgroundImage?: string | number;
  disabled?: boolean;
  fontWeight?: string | number;
}
export function Button({
  title,
  colorContainer,
  backgroundImage,
  colorTitle,
  width,
  fontSize,
  textAlign,
  handlePress,
  padding,
  borderRadius,
  disabled,
  fontWeight,
}: Props) {
  return (
    <Container
      colorContainer={colorContainer}
      width={width}
      onPress={handlePress}
      padding={padding}
      borderRadius={borderRadius}
      backgroundImage={backgroundImage}
      disabled={disabled}
    >
      <TextContainer
        colorTitle={colorTitle}
        fontSize={fontSize}
        textAlign={textAlign}
        fontWeight={fontWeight}
      >
        {title}
      </TextContainer>
    </Container>
  );
}
