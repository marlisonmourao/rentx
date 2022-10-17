import { Container, Title } from './styles';

interface Props {
    title: string;
    color?: string;
    onPress?: () => void;
}

export function Button({ title, color, ...rest }: Props) {
  return (
    <Container activeOpacity={0.6} {...rest} color={color}>
        <Title>{title}</Title>
    </Container>
  );
}