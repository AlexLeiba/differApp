import { useRef, useState, useContext } from "react";
import {
  Text,
  View,
  Platform,
  Linking,
  Alert,
  KeyboardAvoidingView,
  useWindowDimensions,
  Keyboard,
} from "react-native";
import { Button, Spacer } from "../../components";
import PhoneInput from "react-native-phone-number-input";
import { apiFactory } from "../../api";
import { LoginWebScreen } from "./LoginWebScreen";
import { UserTokenStateContext } from "../../consts";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesLogin } from "./LoginScreen.style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList>;

export function LoginScreen({ navigation }: Props) {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const { setUserNumber } = useContext(UserTokenStateContext);

  function handleVerificationValidNumber() {
    Keyboard.dismiss();
    const checkValid = phoneInput.current?.isValidNumber(value);
    if (checkValid) {
      handleRequestSMSCode();
    }

    if (!checkValid) {
      navigation.navigate("invitation-mobile", {
        formattedValue,
      });
    }
  }

  async function handleRequestSMSCode() {
    setLoading(true);
    const {
      data: { requestSMSCode },
    } = await apiFactory().auth().requestSMSCode(formattedValue);
    if (requestSMSCode === "OK") {
      setUserNumber(formattedValue);
      navigation.navigate("verification-code", {
        formattedValue,
      });
    }
    if (requestSMSCode !== "OK") {
      navigation.navigate("invitation-mobile", {
        formattedValue,
      });
    }

    setLoading(false);
  }

  async function openUrl(url: any) {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`An unreadable link: ${url}`);
    }
  }
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView>
      {Platform.OS !== "web" ? (
        <KeyboardAvoidingView
          behavior={"padding"}
          style={{
            height: height,
          }}
          keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 0}
        >
          <View style={stylesLogin.loginScreenInputTextWrapper}>
            <View>
              <Text style={stylesLogin.loginTextStyleBlack}>
                Enter your phone number, incl. country code.
              </Text>
              <Text
                style={stylesLogin.loginTextStyleBlue}
                onPress={() => openUrl("https://nation.so")}
              >
                FAQ
              </Text>

              <Spacer height={20} />

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
                autoFocus
                containerStyle={stylesLogin.containerStyle}
                textContainerStyle={stylesLogin.textContainerStyle}
                codeTextStyle={stylesLogin.codeTextStyle}
                flagButtonStyle={stylesLogin.flagButtonStyle}
                disableArrowIcon={true}
              />

              <Spacer height={30} />

              <Text style={stylesLogin.loginTextStyleBlack}>By signing up</Text>

              <Text style={stylesLogin.loginTextStyleBlack}>
                you agree to the{" "}
                <Text
                  style={stylesLogin.loginTextStyleBlue}
                  onPress={() => openUrl("https://www.differ.chat/about/tos")}
                >
                  Terms of service
                </Text>
              </Text>
              <Text
                style={stylesLogin.loginTextStyleBlue}
                onPress={() => openUrl("https://www.differ.chat/about/tos")}
              >
                <Text style={stylesLogin.loginTextStyleBlack}>&</Text> Privacy
                policy
              </Text>
            </View>
          </View>
          <View style={stylesLogin.loginScreenButtonWrapper}>
            <Button
              disabled={loading}
              handlePress={handleVerificationValidNumber}
              textAlign="center"
              colorContainer="#38ae6f"
              width={340}
              colorTitle="#e6e6e6"
              fontSize={16}
              title="Continue"
              padding={16}
              borderRadius={5}
              testID="login"
            />
          </View>
        </KeyboardAvoidingView>
      ) : (
        <LoginWebScreen navigation={navigation} />
      )}
    </SafeAreaView>
  );
}
