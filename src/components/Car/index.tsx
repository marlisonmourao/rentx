import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

import { CarDTO } from "../../dtos/CarDTO";
import { getAcessoryIcon } from "@utils/getAcessoryIcon";

interface Props extends TouchableOpacityProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAcessoryIcon(data.fuel_type)

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage 
        source={{ uri: data.thumbnail }} 
        resizeMode="contain" 
      />
    </Container>
  );
}
