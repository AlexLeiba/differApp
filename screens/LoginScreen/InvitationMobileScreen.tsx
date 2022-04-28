import react from "react";
import { Text, View, Image, TextInput } from "react-native";
import {
  StylesWelcomePage,
  ContainerIconChat,
} from "../WelcomeScreen/WelcomeScreen.style";
import { Button, Spacer } from "../../components";

import { PageWrapper } from "./LoginScreen.style";

export function InvitationMobileScreen({ navigation, route: { params } }: any) {
  const { formattedValue } = params;

  return (
    <PageWrapper>
      <Spacer height={10} />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, color: "#000000" }}>
          Invitation needed!
        </Text>
        <Spacer height={20} />
        <View style={{ width: 338 }}>
          <Text style={{ fontSize: 16, color: "#000000", textAlign: "center" }}>
            Find someone who's already on Differ, or request an invite here
          </Text>
        </View>

        <Spacer height={40} />

        <TextInput
          keyboardType="numeric"
          onChangeText={() => {}}
          defaultValue={formattedValue}
          style={{
            width: 236,
            borderStyle: "solid",
            borderBottomWidth: 1,
            borderBottomColor: "#ecf1fd",
            padding: 9,
            fontSize: 17,
          }}
        />

        <Spacer height={15} />

        <Button
          fontWeight={600}
          handlePress={() => {}}
          title={"Request invite"}
          colorContainer={"#38ae6f"}
          colorTitle={"#ffffff"}
          width={236}
          fontSize={14}
          borderRadius={5}
          textAlign="center"
          padding={15}
        />
        <Spacer height={32} />
      </View>

      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15 }}>No time to wait? chat with us</Text>
        <Spacer height={30} />
        <ContainerIconChat>
          <Image
            style={StylesWelcomePage.iconChatWithUs}
            source={{
              uri: "https://dev-app.differ.chat/f09cc177a4476f99503405f1f308213f.png",
            }}
          />
        </ContainerIconChat>
      </View>
      <Spacer height={80} />
    </PageWrapper>
  );
}
