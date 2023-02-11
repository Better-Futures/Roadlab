import React from 'react'
import { Info, Machine } from '../../components'
import { Object1, Object2 } from './Data'

const Products = () => {
  return (
    <>
  <Machine {...Object1} />
  <Info {...Object2} />  
    </>
  )
}

export default Products