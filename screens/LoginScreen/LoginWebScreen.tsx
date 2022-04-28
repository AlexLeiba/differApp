import { useEffect, useRef, useState, useContext } from "react";
import {
  Text,
  View,
  Platform,
  ImageBackground,
  useWindowDimensions,
  Image,
  TextInput,
  Linking,
} from "react-native";
import {
  ContainerWebWindow,
  ContainerIcon,
  StylesWelcomePage,
} from "../WelcomeScreen/WelcomeScreen.style";
import { Button } from "../../components";
import PhoneInput from "react-native-phone-number-input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  PageWrapperWeb,
  Logo,
  InnerContainerWeb,
  Tab,
  Tabs,
  Paragraph,
  Spacer,
  stylesLogin,
} from "./LoginScreen.style";
import { AuthContext } from "../../consts";
import { apiFactory } from "../../api";

export function LoginWebScreen({ navigation }: any) {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [code, setCode] = useState("");
  const [valid, setValid] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [loading, setLoading] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const [borderBottomPhone, setborderBottomPhone] = useState(true);
  const [borderBottomVerification, setborderBottomVerification] =
    useState(false);
  const [formattedTextLenght, setFormattedTextLenght] = useState(true);
  const [formattedCodeLength, setFormattedCodeLength] = useState(true);
  const [errorData, setErrorData] = useState(false);

  // function handleVerificationValidNumber() {
  //   const checkValid = phoneInput.current?.isValidNumber(value);
  //   setValid(checkValid ? checkValid : false);
  //   console.log(`validdddd`, checkValid);
  //   if (checkValid) {
  //     handleRequestSMSCode();
  //   }

  //   if (!checkValid) {
  //     alert("Invalid number");
  //   }
  // }

  async function handleRequestSMSCode() {
    setLoading(true);
    const {
      data: { requestSMSCode },
    } = await apiFactory().auth().requestSMSCode(formattedValue);

    if (requestSMSCode === "OK") {
      setShowVerification(true);
      handleBottomVerification();
    }
    if (requestSMSCode !== "OK") {
      navigation.navigate("invitation", {
        formattedValue,
      });
    }

    setLoading(false);
  }

  async function handleVerifySMSCode() {
    setLoading(true);
    const { data } = await apiFactory()
      .auth()
      .verifySMSCode(formattedValue, code);

    if (data.verifySMSCode !== null) {
      await AsyncStorage.setItem("@token", data.verifySMSCode.token);

      signIn(data.verifySMSCode.token);
    }
    if (data.verifySMSCode === null) {
      setErrorData(true);
    }
    setLoading(false);
    return;
  }

  const image = {
    uri: "https://dev-app.differ.chat/0177bd531bd722cfc532489f908d8192.jpg",
  };

  const { width, height } = useWindowDimensions();

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    checkFormatedTextLength();
  }, [code, formattedValue]);

  function checkFormatedTextLength() {
    if (formattedValue.length > 7) {
      setFormattedTextLenght(false);
    } else {
      setFormattedTextLenght(true);
    }

    if (code.length === 6) {
      setFormattedCodeLength(false);
    } else {
      setFormattedCodeLength(true);
    }
  }

  function handleBottomBorderPhone() {
    setborderBottomPhone(true);
    setborderBottomVerification(false);
  }
  function handleBottomVerification() {
    setborderBottomPhone(false);
    setborderBottomVerification(true);
  }

  function handleValueChangeCode(value: any) {
    setCode(value);
  }

  async function openUrl(url: any) {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      alert(`An unreadable link: ${url}`);
    }
  }
  return (
    <PageWrapperWeb>
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
          <Logo source={{ uri: "../../assets/images/differ.png" }} />

          <InnerContainerWeb>
            {borderBottomPhone && (
              <Paragraph>
                Please sign in with your phone number. You need to add your
                country code
              </Paragraph>
            )}

            {borderBottomVerification && (
              <Paragraph>
                Please fill in the verification code that we have sent you by
                sms .
              </Paragraph>
            )}

            <Spacer size={38} />

            <Tabs platform={Platform}>
              <Tab onPress={handleBottomBorderPhone}>
                <Text
                  style={[
                    stylesLogin.phoneVerificationText,
                    borderBottomPhone ? { color: "#8f98ae" } : { opacity: 0.5 },
                  ]}
                >
                  PHONE NO
                </Text>
                {borderBottomPhone && (
                  <View style={stylesLogin.phoneVerificationBorder} />
                )}
              </Tab>

              <Tab
                onPress={handleBottomVerification}
                disabled={!showVerification}
              >
                <Text
                  style={[
                    stylesLogin.phoneVerificationText,
                    borderBottomVerification
                      ? { color: "#8f98ae" }
                      : { opacity: 0.5 },
                  ]}
                >
                  VERIFICATION CODE
                </Text>
                {borderBottomVerification && (
                  <View style={stylesLogin.phoneVerificationBorder} />
                )}
              </Tab>
            </Tabs>

            <Spacer size={24} />

            {borderBottomPhone && (
              <>
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={value}
                  defaultCode="RO"
                  layout="first"
                  onChangeText={(text) => {
                    setValue(text);
                  }}
                  onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                  }}
                  withDarkTheme
                  // autoFocus
                  textInputStyle={{}}
                  containerStyle={stylesLogin.containerWebStyle}
                  textContainerStyle={stylesLogin.textContainerWebStyle}
                  codeTextStyle={stylesLogin.codeTextWebStyle}
                  flagButtonStyle={[
                    stylesLogin.flagButtonStyle,
                    {
                      backgroundColor: "#EFEFEF",
                      marginRight: 15,
                      paddingLeft: 15,
                      width: 70,
                      paddingTop: 2,
                      paddingBottom: 2,
                    },
                  ]}
                  countryPickerButtonStyle={{ paddingRight: 10 }}
                />
                {/* </View> */}
                <Spacer size={35} />
                <Button
                  disabled={formattedTextLenght}
                  handlePress={handleRequestSMSCode}
                  title={"DONE"}
                  colorContainer={"rgb(74, 144, 226)"}
                  colorTitle={formattedTextLenght ? "#CCCCCC" : "#ffffff"}
                  width={344}
                  fontSize={15}
                  borderRadius={3}
                  textAlign="center"
                  padding={15}
                />
              </>
            )}
            {borderBottomVerification && (
              <>
                <TextInput
                  keyboardType="numeric"
                  value={code}
                  onChangeText={(value) => handleValueChangeCode(value)}
                  style={[
                    stylesLogin.containerStyleTextInput,
                    {
                      borderColor: "#636978",
                    },
                    !errorData
                      ? { borderColor: "#636978" }
                      : { borderColor: "red" },
                  ]}
                  placeholder="e .g. 123456"
                />

                <Spacer size={35} />

                <Button
                  disabled={formattedCodeLength}
                  handlePress={handleVerifySMSCode}
                  title={!errorData ? "DONE" : "Wrong access code"}
                  colorContainer={!errorData ? "#4a90e2" : "#ff5976"}
                  colorTitle={
                    !errorData && formattedCodeLength ? "#CCCCCC" : "#ffffff"
                  }
                  width={344}
                  fontSize={15}
                  borderRadius={4}
                  textAlign="center"
                  padding={15}
                />
              </>
            )}

            <Spacer size={10} />

            <Text style={{ fontSize: 15, color: "#636978" }}>
              <Text style={{ fontSize: 15, color: "black" }}>
                By logging in you agree to Differ's {""}
              </Text>
              <Text
                style={{
                  color: "#353e54",
                  textDecorationLine: "underline",
                }}
                onPress={() => openUrl("https://www.differ.chat/about/tos")}
              >
                Terms of Service
              </Text>
              <Text
                style={{
                  color: "black",
                }}
              >
                {" "}
                and{" "}
              </Text>
              <Text
                style={{
                  color: "#353e54",
                  textDecorationLine: "underline",
                }}
                onPress={() => openUrl("https://www.differ.chat/about/privacy")}
              >
                privacy policy.
              </Text>
            </Text>

            <Spacer size={48} />

            <Paragraph>
              Having trouble logging in or would like to use Differ for your
              course?{" "}
              <Text
                style={{
                  color: "#353e54",
                  textDecorationLine: "underline",
                }}
                onPress={() =>
                  openUrl(
                    "https://www.notion.so/Knowledge-base-f8fcc3fdded64f4eb6b2c4a0e52065f7"
                  )
                }
              >
                Contact us here
              </Text>
            </Paragraph>
          </InnerContainerWeb>

          <ContainerIcon>
            <Image
              style={StylesWelcomePage.iconWelcome}
              source={{
                uri: "https://dev-app.differ.chat/1eb063455f96bad002734d17043a8567.png",
              }}
            />
          </ContainerIcon>
          <Spacer size={80} />
        </ContainerWebWindow>
      </ImageBackground>
    </PageWrapperWeb>
  );
}
