import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function ConfirmButton({title, ...rest}: Props) {
  return (
    <Container activeOpacity={0.7} { ...rest }>
        <Title>{title}</Title>
    </Container>
  );
}