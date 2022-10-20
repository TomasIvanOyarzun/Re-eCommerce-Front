import React from 'react'
import CardMui from '../cardMui/CardMui'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
import style from './SliderCard.module.css'


const SliderCard = () => {
 
    const product = useSelector(state => state.product.products)
    //const samsungProduct = product.filter(f => f.name.toLowerCase().includes('samsung'))
   // const motorolaProduct = product.filter(f => f.name.toLowerCase().includes('motorola'))
   // const iphoneProduct = product.filter(f => f.name.toLowerCase().includes('iphone'))
    
   
  

  return (
    <div className={style.container}>
     <div className={style.sub_container}>
    <h2>Celulares Samsung</h2>
    <Carousel  infinite={true} >
  <div>hola</div>
    
  </Carousel>
  <h2>Celulares Motorola</h2>
  <Carousel  infinite={true} >
     <div>hola</div>
    
  </Carousel>

  <h2>Celulares Iphone</h2>
  <Carousel   >
   <div>hola</div>
    
     </Carousel>
    </div>
  </div>
  )
}

export default SliderCard
