import styled from "styled-components/native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export const Container = styled.SafeAreaView`
  background-color: ${width < 767 ? "blue" : "red"};
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const Title = styled.Text`
  font-size: 48px;
  line-height: 54px;
  color: #ffffff;
`;
