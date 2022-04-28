import react, { useEffect, useContext, useState } from "react";
import { useLogin } from "../../hooks/accounts/useLogin";
import { Text, SafeAreaView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../components";
import { AuthContext } from "../../consts";
import { stylesHomeScreen } from "./HomeScreenStyle";
import jwtDecode from "jwt-decode";

export function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [dataToken, setDataToken] = useState();
  const [{ data }] = useLogin();

  useEffect(() => {
    setLoading(true);
    async function Fetch() {
      const token: any = await AsyncStorage.getItem("@token");
      const userData: any = jwtDecode(token);
      if (userData !== undefined) {
        setDataToken(userData);
      }
    }
    setLoading(false);
    Fetch();
  }, []);

  console.log(dataToken);

  const { signOut } = useContext(AuthContext);

  async function handleSignOut() {
    signOut();
    AsyncStorage.clear();
  }

  return (
    <SafeAreaView style={stylesHomeScreen.containerHomeScreen}>
      <Text style={{ fontSize: 20, marginTop: 50 }}>
        Welcome on the home page!
      </Text>
      <View style={{ marginBottom: 20 }}>
        <Button
          title="Log out"
          colorContainer="black"
          colorTitle="white"
          handlePress={handleSignOut}
          width={300}
          textAlign={"center"}
          borderRadius={4}
          padding={16}
        />
      </View>
    </SafeAreaView>
  );
}
