import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  View,
  Platform,
  TextInput,
  Image,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import { Button, Spacer } from "../../components";
import { stylesLogin } from "./LoginScreen.style";
import { apiFactory } from "../../api";
import { AuthContext } from "../../consts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

export function VerificationCode({ navigation, route: { params } }: any) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorData, setErrorData] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const { height } = useWindowDimensions();

  const { formattedValue } = params;

  const { signIn } = useContext(AuthContext);

  async function handleVerifySMSCode() {
    setLoading(true);
    const { data } = await apiFactory()
      .auth()
      .verifySMSCode(formattedValue, code);
    if (data.verifySMSCode !== null) {
      await AsyncStorage.setItem("@token", data.verifySMSCode.token);
      signIn(data.verifySMSCode.token);
      setErrorData(false);
    }

    if (data.verifySMSCode === null) {
      setErrorData(true);
    }
    setLoading(false);
  }

  function handleValueChangeCode(value: any) {
    setCode(value);
  }

  useEffect(() => {
    code.length !== 6 ? setSubmitDisabled(true) : setSubmitDisabled(false);
  }, [code]);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={"padding"}
        style={{
          height: height,
        }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 0}
      >
        <View style={stylesLogin.verificationCodeScreenTextWrapper}>
          <View
            style={{
              marginTop: 50,
            }}
          >
            <View style={{ width: "100%" }}>
              <TextInput
                keyboardType="numeric"
                value={code}
                onChangeText={(value) => handleValueChangeCode(value)}
                style={[
                  stylesLogin.textInputStyle,
                  {
                    padding: Platform.OS === "ios" ? 13 : 6,
                  },
                ]}
                placeholder="Code"
                autoFocus={true}
              />
            </View>

            <Image
              style={[
                stylesLogin.iconStyle,
                Platform.OS === "ios" ? { top: 15 } : { top: 11 },
              ]}
              source={require("../../consts/images/lock.png")}
            />

            <Spacer height={35} />
            <View style={stylesLogin.flexTextVerificationCode}>
              <Text style={{ textAlign: "center", width: 270 }}>
                We have sent you an SMS with the code.
              </Text>
              <Text style={stylesLogin.positionTextVerificationcode}>
                This might take some minutes. Stay cool
              </Text>
              <Image
                style={[
                  stylesLogin.iconEmoji,
                  Platform.OS === "ios"
                    ? { top: 18, right: 25 }
                    : { top: 21, right: 30 },
                ]}
                source={require("../../consts/images/emojii.png")}
              />
            </View>
          </View>
        </View>
        <View style={[stylesLogin.verificationScreenButtonWrapper]}>
          <Button
            handlePress={handleVerifySMSCode}
            textAlign="center"
            width={340}
            fontSize={16}
            padding={16}
            title={!errorData ? "Continue" : "Wrong code. Please try again"}
            colorContainer={!errorData ? "#38ae6f" : "#f12222"}
            colorTitle={!errorData ? "#e6e6e6" : "#ffffff"}
            borderRadius={5}
            disabled={submitDisabled}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
