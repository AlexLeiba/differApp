import { Container } from "./Layout.style";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
