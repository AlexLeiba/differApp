import { Container, Logo } from "./SplashScreen.style";

export const SplashScreen = () => {
  return (
    <Container>
      <Logo source={{ uri: "../../assets/splash.png" }} />
    </Container>
  );
};
