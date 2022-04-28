import * as React from "react";
import { Linking, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  LoginScreen,
  WelcomeScreen,
  EnterCommunityPin,
  InvitationWebScreen,
  InvitationMobileScreen,
  VerificationCode,
} from "../screens";
import LinkingConfiguration from "./LinkingConfiguration";
import { UserTokenStateContext } from "../consts";

const PERSISTENCE_KEY = "NAVIGATION_STATE";

export default function Navigation() {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== "web" && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }
      linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<any>();

function RootNavigator() {
  const { userToken, userNumber } = React.useContext(UserTokenStateContext);

  return (
    <Stack.Navigator>
      {userToken === null ? (
        <>
          <Stack.Screen
            name="welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="community-code"
            component={EnterCommunityPin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"login"}
            component={LoginScreen}
            options={
              Platform.OS !== "web"
                ? {
                    headerShown: true,
                    title: "Your phone number",
                  }
                : { headerShown: false }
            }
          />
          <Stack.Screen
            name={"verification-code"}
            component={VerificationCode}
            options={
              Platform.OS !== "web"
                ? {
                    headerShown: true,
                    title: userNumber,
                  }
                : { headerShown: false }
            }
          />
          <Stack.Screen
            name="invitation"
            component={InvitationWebScreen}
            options={
              Platform.OS !== "web"
                ? { headerShown: true, title: "Your phone number" }
                : { headerShown: false }
            }
          />
          <Stack.Screen
            name="invitation-mobile"
            component={InvitationMobileScreen}
            options={
              Platform.OS !== "web"
                ? { headerShown: true, title: "Request invitation" }
                : { headerShown: false }
            }
          />
        </>
      ) : (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={
            Platform.OS !== "web"
              ? { headerShown: true, title: "Home" }
              : { headerShown: false }
          }
        />
      )}
    </Stack.Navigator>
  );
}

// const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   return (
//     <BottomTab.Navigator initialRouteName="Login">
//       <BottomTab.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{
//           title: "Login",
//           tabBarIcon: () => <TabBarIcon name="sign-in" color="#54CFA4" />,
//           tabBarInactiveTintColor: "#b0b0b0",
//           tabBarActiveTintColor: "#54CFA4",
//         }}
//       />
//       <BottomTab.Screen
//         name="Register"
//         component={RegisterScreen}
//         options={{
//           title: "Register",
//           tabBarIcon: () => <TabBarIcon name="plus-square" color="#54CFA4" />,
//           tabBarInactiveTintColor: "#b0b0b0",
//           tabBarActiveTintColor: "#54CFA4",
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
