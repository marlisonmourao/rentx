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

import speedSvg  from '@assets/speed.svg';
import acceleration  from '@assets/acceleration.svg';
import force  from '@assets/force.svg';
import gasoline  from '@assets/gasoline.svg';
import exChange  from '@assets/exchange.svg';
import people  from '@assets/people.svg';
import { Button } from "@components/Button";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlide
          imagesUrl={[
            "https://w7.pngwing.com/pngs/853/38/png-transparent-2017-audi-r8-car-audi-rs5-audi-r8-lms-2016-audi-sedan-car-performance-car.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rend>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rend>
        </Details>

        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg}/>
          <Accessory name="3.2s" icon={acceleration}/>
          <Accessory name="800 HP" icon={force}/>
          <Accessory name="Gasolina" icon={gasoline}/>
          <Accessory name="Auto" icon={exChange}/>
          <Accessory name="2 pessoas" icon={people}/>
        </Accessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
