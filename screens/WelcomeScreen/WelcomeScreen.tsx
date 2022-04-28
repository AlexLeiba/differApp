import react, { useEffect, useState, useContext } from "react";
import {
  SafeAreaView,
  Image,
  Platform,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { Typography, Button, Spacer } from "../../components";
import {
  Container,
  ContainerParagraph,
  ContainerWebWindow,
  StylesWelcomePage,
  ContainerIcon,
} from "./WelcomeScreen.style";
import { UserTokenStateContext } from "../../consts";

// var { vw, vh, vmin, vmax } = require("react-native-viewport-units");

interface Props {
  navigation: any;
}
export function WelcomeScreen({ navigation }: Props) {
  const [platform, setPlatform] = useState(false);

  const { setUserNumber, userNumber } = useContext(UserTokenStateContext);

  function handleNavigation() {
    navigation.navigate("login");
  }

  const { width, height } = useWindowDimensions();

  function CheckPlatform() {
    if (Platform.OS === "ios" || Platform.OS === "android") {
      return setPlatform(true);
    }
  }

  const image = {
    uri: "https://dev-app.differ.chat/0177bd531bd722cfc532489f908d8192.jpg",
  };

  const lineColor =
    "linear-gradient(315deg, rgb(74, 203, 226) 0%, rgb(74, 144, 226) 100%)";

  useEffect(() => {
    CheckPlatform();
    setUserNumber("");
  }, []);

  return (
    <SafeAreaView>
      {platform ? (
        <Container PlatformOs={Platform.OS} platformAndroidAndIos={platform}>
          <ContainerParagraph>
            <Typography.H3 textAlign>
              Differ makes it easier to get to know students, like yourself
            </Typography.H3>
          </ContainerParagraph>
          <Image source={require("../../consts/images/message.png")} />
          <Spacer height={"50px"} />

          <Button
            title="Get started"
            width={"300px"}
            textAlign="center"
            padding={"15px"}
            borderRadius={"5px"}
            handlePress={handleNavigation}
            colorContainer={"#38ae6f"}
            colorTitle={"#e6e6e6"}
          />
        </Container>
      ) : (
        <ImageBackground
          source={image}
          resizeMethod="auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: width,
            height: height,
          }}
        >
          <ContainerWebWindow>
            <Button
              fontSize={"15px"}
              colorTitle={"white"}
              title="Login"
              //   backgroundImage={lineColor}
              width={"344px"}
              padding={"15px"}
              handlePress={handleNavigation}
              borderRadius={"5px"}
              textAlign="center"
              colorContainer={"rgb(74, 144, 226)"}
            />
            <Spacer height={10} />
            <Button
              colorTitle={"white"}
              fontSize={"15px"}
              title="Enter community pin"
              //   backgroundImage={lineColor}
              width={"344px"}
              padding={"15px"}
              handlePress={() => {
                navigation.navigate("community-code");
              }}
              borderRadius={"5px"}
              textAlign="center"
              colorContainer={"rgb(74, 144, 226)"}
            />
            <ContainerIcon>
              <Image
                style={StylesWelcomePage.iconWelcome}
                source={{
                  uri: "https://dev-app.differ.chat/1eb063455f96bad002734d17043a8567.png",
                }}
              />
            </ContainerIcon>
          </ContainerWebWindow>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}
