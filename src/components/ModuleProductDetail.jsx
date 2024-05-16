import React from 'react'
import { useParams } from 'react-router-dom'

const ModuleProductDetail = () => {
  const {productId} = useParams()
  console.log(productId);
  return (
    <div>ModuleProductDetail</div>
  )
}

export default ModuleProductDetail