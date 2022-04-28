import React from "react";
import styled from "styled-components/native";

interface Props {
  textAlign?: string;
}

const H1 = styled.Text`
  font-size: 48px;
  line-height: 58px;
  font-weight: 500;
`;

const H2 = styled.Text`
  font-size: 36px;
  line-height: 44px;
  font-weight: 300;
`;

const H3 = styled.Text<Props>`
  font-size: 24px;
  line-height: 30px;
  font-weight: 400;

  ${({ textAlign }) => (textAlign ? { textAlign: "center" } : {})}
`;

const H4 = styled.Text`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
`;

const H5 = styled.Text`
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
`;

const Body = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const Error = styled.Text`
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
`;

const Label = styled.Text`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
`;

const Description = styled.Text`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`;

export function Typography() {
  return null;
}

Typography.H1 = H1;
Typography.H2 = H2;
Typography.H3 = H3;
Typography.H4 = H4;
Typography.H5 = H5;
Typography.Body = Body;
Typography.Error = Error;
Typography.Label = Label;
Typography.Description = Description;
