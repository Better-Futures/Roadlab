import React from 'react'
import { Container} from '../../globalStyles';
import {Link} from 'react-router-dom';
import {
  InfoSec,
  ImgContainer,
  ImgWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Img
} from './Countries.elements';

const Countries = ({
  heading,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  name1,
  name2,
  name3,
  name4,
  name5,
  name6
}) => {

   
  return (
    <>
      <InfoSec >
        <Container>
        <TextWrapper>
       
            <TopLine>       
              {heading}
            </TopLine>
            </TextWrapper>
            <Link to ='/services' style={{textDecoration:'none', color:'#fff'}}>
            <ImgContainer>
                <ImgWrapper>
                   <Img src={img1} alt='/' />
                  
                   <Heading>{name1}</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img2} alt='/' />
                  
                   <Heading>{name2}</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img3} alt='/' />
                   
                   <Heading>{name3}</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img4} alt='/' />
                  
                   <Heading>{name4}</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img5} alt='/' />
                   
                   <Heading>{name5}</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img6} alt='/' />
                   
                   <Heading>{name6}</Heading> 
                </ImgWrapper>
            </ImgContainer>
            </Link>
            </Container>
            </InfoSec>


    </>
  )
}

export default Countries;