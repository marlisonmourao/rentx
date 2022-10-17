import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme/theme";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import { Home } from "@screens/Home";
import { CarDetails } from "@screens/CarDetails";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <CarDetails /> : <Loading />}
    </ThemeProvider>
  );
}
