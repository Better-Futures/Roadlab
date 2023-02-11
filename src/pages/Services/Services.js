import React from 'react'
import { Countries, Info } from '../../components'
import { Object1, Object2 } from './Data'

const Features = () => {
  return (
    <>
    <Countries {...Object1} />
    <Info {...Object2} />
    </>
  )
}

export default Features