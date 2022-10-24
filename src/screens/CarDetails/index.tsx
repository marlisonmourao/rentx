import { StatusBar } from "react-native"
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rend,
  Period,
  Price,
  About,
  Accessories,
  Footer
} from "./styles";

import { BackButton } from "@components/BackButton";
import { ImageSlide } from "@components/ImageSlide";
import { Accessory } from "@components/Accessory";
import { Button } from "@components/Button";


import { CarDTO } from "../../dtos/CarDTO";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon"

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate("Scheduling", { car })
  }

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <StatusBar 
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlide
          imagesUrl={car.photos}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand> {car.brand} </Brand>
            <Name> {car.name} </Name>
          </Description>

          <Rend>
            <Period> {car.rent.period} </Period>
            <Price> R$ {car.rent.price} </Price>
          </Rend>
        </Details>

        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory
                key={accessory.type} 
                name={accessory.name} 
                icon={getAcessoryIcon(accessory.type)}
              />
            ))
          }
        </Accessories>

        <About> {car.about} </About>
      </Content>

      <Footer>
        <Button 
          title="Escolher período do aluguel" 
          onPress={handleConfirmRental}
          disabled={false}
        />
      </Footer>
    </Container>
  );
}
