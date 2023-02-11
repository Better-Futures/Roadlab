import React from 'react'
import { Container, Button} from '../../globalStyles';
import {img1,img2, img3, img4, img5, img6} from '../../images';

import {
  InfoSec,
  ImgContainer,
  ImgWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Left,
  Right,
  CTA,
  CTAContainer,
  Paragrap,
  Headers,
  Img
} from './Projects.elements';

const Projects = (
  lightBg,
) => {

   
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
        <TextWrapper>
            <TopLine>       
        Some of our work include:
            </TopLine>
            </TextWrapper>
            <ImgContainer>
                <ImgWrapper>
                   <Img src={img1} alt='/' />
                   <Heading>Bamenda</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img2} alt='/' />
                   <Heading>Yaounde</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img3} alt='/' />
                   <Heading>Maroua</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img4} alt='/' />
                   <Heading>Limbe</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img5} alt='/' />
                   <Heading>Littoral</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img6} alt='/' />
                   <Heading>Baffoussam</Heading> 
                </ImgWrapper>
            </ImgContainer>
            <CTA>
                <CTAContainer>
                <Left>
                  <Headers>
                  What are you waiting for! 
                  </Headers>
                    <Paragrap>
            Just contact us and
            give you orders, then follow the payment method
            and you're done.            
                    </Paragrap>
                    </Left>
                    <Right>
                    <Button fontBig >Let's Begin</Button>
                    </Right>
                </CTAContainer>
            </CTA>

            </Container>
            </InfoSec>


    </>
  )
}

export default Projects;