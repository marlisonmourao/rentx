import { Calendar as CustomCalendar, LocaleConfig, CalendarProps  } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { generateInterval } from "./genereteInterval"
import { ptBR } from "./localConfig";

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

interface MarketDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchevents?: boolean;
  }
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;

}

function Calendar({markedDates, onDayPress,}: CalendarProps) {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction == "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}

      theme={{
        textDayFontFamily: theme.fonts_family.primary_400,
        textDayHeaderFontFamily: theme.fonts_family.primary_500,
        textMonthFontFamily: theme.fonts_family.secondary_600,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
            marginHorizontal: -15
        }
      }}

      firstDay={1}
      minDate={String(new Date())}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export {
  Calendar,
  MarketDateProps,
  DayProps,
  generateInterval
}
