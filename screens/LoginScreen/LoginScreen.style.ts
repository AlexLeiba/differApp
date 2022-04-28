import styled from "styled-components/native";

import { StyleSheet } from "react-native";

interface Props {
  platform: boolean;
}

export const PageWrapperWeb = styled.SafeAreaView`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageWrapper = styled.SafeAreaView`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  background-color: white;
  flex-direction: column;
`;

export const Container = styled.View`
  & > * {
    max-width: 100%;
  }
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  display: flex;
  margin-top: -50px;
  margin-bottom: 30px;
`;

export const InnerContainer = styled.View`
  max-width: 340px;
  margin: auto;
  height: 100%;
`;

export const InnerContainerWeb = styled.View`
  max-width: 340px;
  margin: auto;
`;
export const Tabs = styled.View<Props>`
  display: flex;
  align-items: center;
  justify-content: ${({ platform }) =>
    platform ? "flex-start" : "space-between"};
  flex-direction: row;
`;

export const Tab = styled.TouchableOpacity`
  margin-right: 32px;
`;

export const Paragraph = styled.Text`
  color: rgb(99, 105, 120);
  font-size: 17px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: rgb(74, 203, 226);
`;

interface Props {
  size: number;
}

export const Spacer = styled.View<Props>`
  width: 100% !important;
  height: ${({ size }) => size}px;
`;

export const stylesLogin = StyleSheet.create({
  phoneVerificationBorder: {
    borderColor: "#8f98ae",
    borderStyle: "solid",
    borderWidth: 2,

    position: "absolute",
    top: 18,
    width: "100%",
  },
  phoneVerificationText: {
    fontWeight: "800",
    fontSize: 14,
    color: "#8f98ae",
  },
  inputStyles: {},
  iconStyle: {
    position: "absolute",
    left: 10,
    width: 19,
    height: 19,
  },
  iconEmoji: {
    position: "absolute",
    width: 15,
    height: 15,
  },
  keyboardVerificationCodeContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputTextWrapper: {
    marginTop: 80,
    maxWidth: 340,
    margin: "auto",
  },
  loginScreenInputTextWrapper: {
    padding: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  verificationCodeScreenTextWrapper: {
    padding: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  loginScreenButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 5,
  },
  verificationScreenButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 5,
  },
  textInputStyle: {
    width: 340,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 19,
    // marginRight: 100,
    paddingLeft: 35,
    borderColor: "#cacaca",
  },
  loginTextStyleBlack: {
    fontSize: 14,
    color: "#020202",
    textAlign: "center",
  },
  loginTextStyleBlue: {
    color: "#332df1",
    textAlign: "center",
    fontSize: 14,
  },
  flexTextVerificationCode: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  positionTextVerificationcode: {
    textAlign: "center",
    width: 270,
    marginRight: 18,
  },
  // phone input
  containerStyle: {
    width: "100%",
    backgroundColor: "transparent",
    borderColor: "#cacaca",
    borderWidth: 1,
    borderRadius: 10,
  },
  textContainerStyle: {
    paddingLeft: 0,
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  flagButtonStyle: {
    paddingLeft: 0,
    width: 52,
    paddingTop: 6,
    paddingBottom: 6,
  },
  codeTextStyle: {
    minWidth: 30,
  },
  // web
  // phone country input:
  containerWebStyle: {
    width: "100%",
    // backgroundColor: "#FFFFF",
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#cacaca",
  },
  textContainerWebStyle: {
    // backgroundColor: "#FFFFF",
    paddingLeft: 8,
    paddingBottom: 0,
    paddingTop: 0,
  },
  flagButtonWebStyle: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  codeTextWebStyle: {
    minWidth: 50,
    paddingLeft: 0,
    margin: 0,
  },
  // verification code input
  containerStyleTextInput: {
    width: 340,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 4,
    padding: 14,
    fontSize: 14,
    marginRight: 20,
  },
  imageBackgroundStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // invitation code input
  containerStyleInvitationInput: {
    width: 236,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#636978",
    padding: 9,
    fontSize: 17,
  },
});
