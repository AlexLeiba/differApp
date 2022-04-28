import react, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Image,
  Platform,
  Text,
  ImageBackground,
  View,
  useWindowDimensions,
  TextInput,
} from "react-native";
import { Typography, Button, Spacer, Input } from "../../components";
import { colors } from "../../consts/colors";
import {
  Container,
  ContainerParagraph,
  ContainerWebWindow,
  StylesWelcomePage,
  ContainerIcon,
} from "./EnterCommunityPin.style";

// var { vw, vh, vmin, vmax } = require("react-native-viewport-units");

interface Props {
  navigation: any;
}
export function EnterCommunityPin({ navigation }: Props) {
  const [platform, setPlatform] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleNavigation() {
    navigation.navigate("login");
  }
  const { width, height } = useWindowDimensions();

  function ChechPlatform() {
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
    ChechPlatform();
  }, []);

  return (
    <SafeAreaView>
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
          <Input
            width={"344px"}
            value={inputValue}
            onChange={(value) => {
              setInputValue(value);
            }}
            padding={"0px"}
            border={"solid 2px #7a849e"}
            labelFontSize={"16px"}
            labelColor={"#40424A"}
            onFocus={false}
            labelText={"Entry your community pin"}
          />
          <Spacer height={10} />
          <Button
            colorTitle={"#CCCCCC"}
            fontSize={"15px"}
            title="Redeem code"
            //   backgroundImage={lineColor}
            width={"344px"}
            padding={"15px"}
            handlePress={() => {}}
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
    </SafeAreaView>
  );
}
