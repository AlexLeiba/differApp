import { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
  TextInput,
} from "react-native";
import {
  ContainerWebWindow,
  ContainerIcon,
  StylesWelcomePage,
  ContainerIconChat,
} from "../WelcomeScreen/WelcomeScreen.style";
import { Layout, Button, Spacer } from "../../components";

import { PageWrapper, stylesLogin } from "./LoginScreen.style";

export function InvitationWebScreen({ navigation, route: { params } }: any) {
  const { formattedValue } = params;
  const [formattedTextLenght, setFormattedTextLenght] = useState(true);
  const [formattedValueRequest, setFormattedValueRequest] =
    useState(formattedValue);

  const image = {
    uri: "https://dev-app.differ.chat/0177bd531bd722cfc532489f908d8192.jpg",
  };

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    checkFormatedTextLength();
  }, [formattedValueRequest]);

  function checkFormatedTextLength() {
    if (formattedValueRequest.length > 7) {
      setFormattedTextLenght(false);
    } else {
      setFormattedTextLenght(true);
    }
  }

  return (
    <PageWrapper>
      <ImageBackground
        source={image}
        resizeMethod="auto"
        style={[
          stylesLogin.imageBackgroundStyle,
          {
            width: width,
            height: height,
          },
        ]}
      >
        <ContainerWebWindow>
          <Spacer height={80} />

          <Text style={{ fontSize: 32, color: "#636978" }}>
            Invitation needed!
          </Text>

          <Spacer height={20} />

          <View style={{ width: 338 }}>
            <Text
              style={{ fontSize: 20, color: "#636978", textAlign: "center" }}
            >
              Find someone who's already on Differ, or request an invite here
            </Text>
          </View>

          <Spacer height={20} />

          <TextInput
            keyboardType="numeric"
            onChangeText={(value) => {
              setFormattedValueRequest(value);
            }}
            defaultValue={formattedValue}
            style={stylesLogin.containerStyleInvitationInput}
          />

          <Spacer height={8} />

          <Button
            disabled={formattedTextLenght}
            fontWeight={650}
            handlePress={() => {}}
            title={"Request invite"}
            colorContainer={"rgb(74, 144, 226)"}
            colorTitle={"#fff"}
            width={236}
            fontSize={14}
            borderRadius={4}
            textAlign="center"
            padding={15}
          />
          <Spacer height={32} />

          <Text>No time to wait? chat with us</Text>

          <ContainerIconChat>
            <Image
              style={StylesWelcomePage.iconChatWithUs}
              source={{
                uri: "https://dev-app.differ.chat/f09cc177a4476f99503405f1f308213f.png",
              }}
            />
          </ContainerIconChat>
          <Spacer height={135} />
          <ContainerIcon>
            <Image
              style={StylesWelcomePage.iconWelcome}
              source={{
                uri: "https://dev-app.differ.chat/1eb063455f96bad002734d17043a8567.png",
              }}
            />
          </ContainerIcon>
          <Spacer height={20} />
        </ContainerWebWindow>
      </ImageBackground>
    </PageWrapper>
  );
}
