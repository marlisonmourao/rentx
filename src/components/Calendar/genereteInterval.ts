import { eachDayOfInterval, format } from "date-fns";

import { MarketDateProps, DayProps } from ".";
import { getPlatformDate } from "@utils/getPlataformDate";
import theme from "../../theme/theme";

export function generateInterval(start: DayProps, end: DayProps) {
  let intervalo: MarketDateProps = {};

  eachDayOfInterval({start: new Date(start.timestamp), end: new Date(end.timestamp)}).forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd");

    intervalo = {
      ...intervalo,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,

        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });

  return intervalo;
}
