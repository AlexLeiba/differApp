import { Container } from "./RestrictedLayout.style";

interface Props {
  children: React.ReactNode;
}

export const RestrictedLayout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
