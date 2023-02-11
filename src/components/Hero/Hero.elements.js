import styled from "styled-components"; 
import {BiRightTopArrowCircle} from 'react-icons/bi';

export const HeroContainer= styled.div`
    height: 100%;
    width: 100%;
`;
export const Arrow = styled(BiRightTopArrowCircle)`
    font-size: 23px;
    color: #bfda27;
    margin-left: 4px;

`;
export const Mask= styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    &::after{
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: #000;
        opacity: 0.8;
    }
`;
export const Image= styled.img`
    width: 100%;
    height: 100%;
   
`;
export const HeroImage= styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    
`;
export const Content= styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 32%;
    text-align: center;

 
   @media screen and (max-width: 760px) {
    left: auto;
   }
    

`;
export const HeroHeader= styled.h1`
    font-size: 4rem;
    padding: 0.6rem 0 1.5rem;
    color: #fff;
    text-transform: uppercase;
    position: absolute;
    font-family: sans;
    background: radial-gradient(
    64.18% 64.18% at 71.16% 35.69%,
    #f2fade 0.89%,
    #e5f5be 17.23%,
    #e4f09d 42.04%,
    #c5dd6c 12%,
    #c2dd4c 71.54%,
    #bfda27 100%
  ); 
    
   letter-spacing: 15px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 390px){
    letter-spacing: normal;
    display: flex;
    
  }
  
`;

export const Circle = styled.div`
    width: 100px;
    height: 100px;
    background: radial-gradient(
    64.18% 64.18% at 71.16% 35.69%,
    #f2fade 0.89%,
    #e5f5be 17.23%,
    #e4f09d 42.04%,
    #c5dd6c 12%,
    #c2dd4c 71.54%,
    #bfda27 100%
  );
    border-radius: 100%;
    padding: 2px;
    cursor: pointer;
    transform: translate(160%, 100%);
    
`;
export const CircleContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 100%;
    text-align: center;
    &:hover{
        background: #272727;
    }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;  
  text-align: center;  
  transform: translate(25%, 100%);
  margin-bottom: 8px;
`;
export const Parag = styled.p`
 background: radial-gradient(
    64.18% 64.18% at 71.16% 35.69%,
    #f2fade 0.89%,
    #e5f5be 17.23%,
    #e4f09d 42.04%,
    #c5dd6c 12%,
    #c2dd4c 71.54%,
    #bfda27 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  
`;