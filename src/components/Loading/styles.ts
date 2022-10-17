import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary}
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
  color: 'blue',
  size: 30
}))``