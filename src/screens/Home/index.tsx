import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "styled-components";

import { 
  Container, 
  Header, 
  TotalCars, 
  HeaderContent, 
  CarList,
  MyCarButton
} from "./styles";

import Logo from "@assets/logo.svg";
import api from "../../api/api";

import { Car } from "@components/Car";
import { Loading } from "@components/Loading";

import { CarDTO } from "../../dtos/CarDTO";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const theme = useTheme()

  function handleCarDetails(car:CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handlOpenMyCar() {
    navigation.navigate("MyCars");
  }

  async function fecthCar() {
    try {
      const response = await api.get("/cars");
      setCars(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fecthCar();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <MyCarButton activeOpacity={0.7} onPress={handlOpenMyCar}>
        <Ionicons 
          name="ios-car-sport"
          size={32}
          color={theme.colors.shape}
        />
      </MyCarButton>
    </Container>
  );
}
