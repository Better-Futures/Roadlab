import React from 'react';
import {CallToAction, Countries, Features} from '../../components';
import { Object1, Object2 } from './Data';

const Clients = () => {
  return (
    <>
    <Countries {...Object1} />
    <Features {...Object2} />
    <CallToAction />
    </>
    
  )
}

export default Clients