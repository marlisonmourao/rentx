import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";

import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import ArrowSvg from "@assets/arrow.svg";

import { getPlatformDate } from "@utils/getPlataformDate";
import { CarDTO } from "src/dtos/CarDTO";

import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarketDateProps,
} from "@components/Calendar";

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
interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}
interface Params {
  car: CarDTO;
}

export function Scheduling() {
  const [lastSelectedDate, setSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarketDateProps>({} as MarketDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const route = useRoute();
  const { car } = route.params as Params;

  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDates),
    });
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDates(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
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
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDates} />
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          disabled={!rentalPeriod.endFormatted}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
