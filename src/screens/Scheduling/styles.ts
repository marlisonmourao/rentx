import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface dateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts_family.secondary_600};
  font-size: ${RFValue(34)}px;

  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 32px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts_family.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<dateValueProps>`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts_family.primary_500};
  font-size: ${RFValue(15)}px;

  ${({ theme, selected }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
    `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
    showsVerticalIndicator: false,
  },
})``;
export const Footer = styled.View`
  padding: 24px;
`;
