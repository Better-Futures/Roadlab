import React from 'react'
import { Container} from '../../globalStyles';
import {
  Star,
  Security,
  TextContainer,
  Plane,
  IconContainer,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Paragrap,
  Header,
  Heading,
  ImgWrapper,
 
} from './Cards.elements';

const Home = (
  lightBg,
  imgStart,
  start
) => {

   
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>

              <TextWrapper>
                <Heading>How does it's work!</Heading>
                <Paragrap>By carefull planning and management
        we make sure that we give credibility to the work we do.     
                </Paragrap>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
              <IconContainer>
            <Star/>
            <TextContainer>
            <Header>Speed</Header>
            <Paragrap> We do all to make sure we finish on time.</Paragrap>
            </TextContainer>
            </IconContainer>
            </ImgWrapper>
            <ImgWrapper>
            <IconContainer>
            <Security/>
            <TextContainer>
            <Header>Accuracy</Header>
              <Paragrap>Well planned, and to ensure nothing is left out.</Paragrap>
              </TextContainer>
            </IconContainer>
            </ImgWrapper>
            <ImgWrapper>
            <IconContainer>
            <Plane/>
            <TextContainer>
            <Header>Sustainability</Header>
            <Paragrap> Making sure it's endures as time goes by never
            depart from our mind.
            </Paragrap>
            </TextContainer>
            </IconContainer>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>


  )
}

export default Home