import React from 'react';
import img1 from '../../images/Fixing_road.jpg';
import {Container} from '../../globalStyles';

import {
  HeroContainer,
  Mask, 
  Arrow,
  Content, 
  HeroHeader, 
  HeroImage, 
  Image,
  Circle,
  CircleContainer,
  TextContainer,
  Parag
} from './Hero.elements';


  


const Hero = () => {


  return (
    <HeroContainer>
       
        <Mask>
            <HeroImage>
            <Image src={img1} alt={'Road'}/>
            </HeroImage> 
        </Mask>
        <Container>
        <Content>
       <HeroHeader>Roadlab</HeroHeader>
        <Circle>
          <CircleContainer>
        <TextContainer>
          <Parag>Let's</Parag>
          <Arrow/>
          
        </TextContainer>
        <TextContainer>
        <Parag>Begin</Parag>
        </TextContainer>
          </CircleContainer>
        </Circle>
                    </Content>
                  </Container>   
                       
        </HeroContainer>
  )
}

export default Hero