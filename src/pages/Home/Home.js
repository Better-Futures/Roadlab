import React from 'react'
import { Hero, Features,Cards, Machine } from '../../components';
import Projects from '../../components/Projects/Projects';
import { Object1, Object2 } from './Data';

const Home = () => {
  return (
    <>
    <Hero />
    <Features {...Object2} />
    <Cards />
    <Machine {...Object1} />
    <Projects />
    </>
  )
}

export default Home;