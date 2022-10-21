import { Container, Title } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  title: string;
  color?: string;
  onPress?: () => void;
}

export function Button({ title, color, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container
      activeOpacity={0.6}
      {...rest}
      color={color ? color : theme.colors.main}
    >
      <Title>{title}</Title>
    </Container>
  );
}
