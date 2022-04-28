import { Container, Title } from "./RegisterScreen.style";
import { useLogin } from "../../hooks/accounts/useLogin";
import { useEffect } from "react";
import { Text } from "react-native";

export function RegisterScreen() {
  const [{ loading, error, data }, handler] = useLogin();

  useEffect(() => {
    handler("zmed", "alex");
  }, []);

  return (
    <Container>
      <Title>Register</Title>
      <Text>Loading: {loading.toString()}</Text>
      <Text>Error: {error.toString()}</Text>
      <Text>Data: {data.toString()}</Text>
    </Container>
  );
}
