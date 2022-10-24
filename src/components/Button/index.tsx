import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  title: string;
  color?: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  color,
  disabled = false,
  loading = false,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container
      activeOpacity={0.6}
      color={color ? color : theme.colors.main}
      disabled={disabled}
      style={{ opacity: disabled === false || loading === true ? 1 : .5 }}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
