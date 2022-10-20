import React from 'react'
import Carousel from "react-multi-carousel"
import { useSelector } from 'react-redux';



const SliderCard = () => {
 
    const product = useSelector(state => state.product.products)
    //const samsungProduct = product.filter(f => f.name.toLowerCase().includes('samsung'))
   // const motorolaProduct = product.filter(f => f.name.toLowerCase().includes('motorola'))
   // const iphoneProduct = product.filter(f => f.name.toLowerCase().includes('iphone'))
    
   
  

  return (
   
     <Carousel  infinite={true} >
        <div>hola</div>
        <div>hola</div>
        <div>hola</div>
       <div>hola</div>
   
     </Carousel>
  
  )
}

export default SliderCard
