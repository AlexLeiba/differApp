import styled from "styled-components/native";
import { StyleSheet } from "react-native";

interface Props {
  PlatformOs: string;
  platformAndroidAndIos: boolean;
}
export const Container = styled.View<Props>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${({ platformAndroidAndIos }) =>
    platformAndroidAndIos ? { marginTop: "10px" } : { marginTop: "200px" }};
  width: 100%;
  height: 100%;
`;

export const ContainerParagraph = styled.View`
  margin-right: 35px;
  margin-left: 35px;
  margin-bottom: 100px;
  width: 300px;
`;

export const ContainerWebButtons = styled.View`
  width: 600px;
  min-height: 80px;
  background-color: yellow;
`;
export const ContainerWebWindow = styled.View`
  width: 600px;
  min-height: 272px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 3px 9px #c4c2be;
`;

export const ContainerIcon = styled.View`
  position: absolute;
  top: -50px;
`;

export const StylesWelcomePage = StyleSheet.create({
  containerWebWelcomePage: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconWelcome: {
    width: 100,
    height: 100,
    zIndex: 200,
  },
});
