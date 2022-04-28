import { useMemo, useState } from "react";
LogBox.ignoreLogs(["Remote debugger"]);
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContext, UserTokenStateContext } from "./consts";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

import { configureStore } from "./store";

import { Provider } from "react-redux";
import { SplashScreen } from "./screens";
import { LogBox } from "react-native";

const store = configureStore();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userNumber, setUserNumber] = useState("");

  const authContext = useMemo(() => {
    return {
      signIn: (token: string | any) => {
        setUserToken(token);
        setIsLoading(false);
      },
      signOut: () => {
        setUserToken(null);
        setIsLoading(false);
      },
    };
  }, []);
  const isLoadingComplete = useCachedResources();

  const tokenState = {
    isLoading,
    userToken,
    userNumber,
    setUserNumber,
  };

  if (!isLoadingComplete) {
    return <SplashScreen />;
  } else {
    return (
      <UserTokenStateContext.Provider value={tokenState}>
        <AuthContext.Provider value={authContext}>
          <SafeAreaProvider>
            <Provider store={store}>
              <Navigation />
              <StatusBar />
            </Provider>
          </SafeAreaProvider>
        </AuthContext.Provider>
      </UserTokenStateContext.Provider>
    );
  }
}
