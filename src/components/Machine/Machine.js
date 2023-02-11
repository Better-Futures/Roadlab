import React from 'react'
import { Container, Paragraph, Button} from '../../globalStyles';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrapper,
  Img
} from './Machine.elements';

const Machine= ({
  imgStart,
  start,
  lastText,
  first,
  second,
  third,
  paragraph,
  buttonInfo,
  img,
  alt,
}) => {

   
  return (
    <>
      <InfoSec >
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
            <TextWrapper lastText = {lastText}>
            
                <TopLine >{first}</TopLine>
                
                <Heading >{second}  </Heading>
               
                <TopLine>{third}</TopLine>
              
              <Paragraph>
               {paragraph}
              </Paragraph>  
              <Button>{buttonInfo}</Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>              
                <Img src={img} alt={alt} />  
              </ImgWrapper>              
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>

</>

  )
}

export default Machine;