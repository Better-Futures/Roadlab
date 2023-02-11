import React from 'react'
import { Container, Paragraph} from '../../globalStyles';

import {
  Top,
  Bottom,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrapper,
  Img
} from './Features.elements';

const Features= ({
  imgStart,
  start,
  lastText,
  first,
  second,
  third,
  paragraph,
  img1,
  img2,
  alt1,
  alt2
}) => {

   
  return (
    <>
      <InfoSec >
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
            <TextWrapper lastText = {lastText}>
            
                <TopLine >{first}</TopLine>
               
                <Heading > {second} </Heading>
               
                <TopLine>{third}</TopLine>
               
              <Paragraph>
              {paragraph}
              </Paragraph>  
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
              <Top>
                <Img src={img1} alt={alt1} />
                </Top>
                <Bottom>
                <Img src={img2} alt={alt2} />
                </Bottom>
                
              </ImgWrapper>              
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    
 
</>

  )
}

export default Features;