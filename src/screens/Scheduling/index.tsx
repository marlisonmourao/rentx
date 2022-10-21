import { useState } from "react"
import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { 
  Calendar, 
  DayProps, 
  generateInterval,
  MarketDateProps
} from "@components/Calendar";

import ArrowSvg from "@assets/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateTitle,
  DateInfo,
  DateValue,
  Content,
  Footer,
} from "./styles";

export function Scheduling() {
  const [lastSelectedDate, setSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarketDateProps>({} as MarketDateProps)

  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails");
  }

  function handleBack() {
    navigation.goBack()
  }

  function handleChangeDates(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date: lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp) {
      start = end;
      end = start
    }

    setSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval)
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"}
          data de inicio e {"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/03/2022</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>18/03/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDates}
        />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
