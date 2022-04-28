import React from "react";
import { Container, InputElement, Label } from "./Input.style";

interface Props {
  value: string;
  onChange: (e: string) => void;
  width?: string | number;
  padding?: string | number;
  border?: string | number;
  fontSize?: string | number;
  height?: string | number;
  label?: string | number;
  labelFontSize?: string | number;
  labelColor?: string;
  onFocus?: boolean;
  labelText?: string;
  borderRadius?: string | number;
  placeholder?: string;
  type?: string;
  keyboardType?: string;
  paddingBottom?: string | number;
}
export const Input = ({
  value,
  onChange,
  width,
  padding,
  border,
  fontSize,
  height,
  labelFontSize,
  labelColor,
  onFocus,
  labelText,
  placeholder,
  keyboardType,
  paddingBottom,
}: Props) => {
  return (
    <Container width={width}>
      <Label labelFontSize={labelFontSize} labelColor={labelColor}>
        {labelText}
      </Label>
      <InputElement
        value={value}
        onChange={(e) => onChange(e.target.value)}
        border={border}
        padding={padding}
        fontSize={fontSize}
        height={height}
        onFocus={onFocus}
        placeholder={placeholder}
        keyboardType={keyboardType}
        paddingBottom={paddingBottom}
      />
    </Container>
  );
};
