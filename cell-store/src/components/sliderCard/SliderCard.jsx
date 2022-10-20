import React from 'react'
import CardMui from '../cardMui/CardMui'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
import style from './SliderCard.module.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const SliderCard = () => {
 
    const product = useSelector(state => state.product.products)
    //const samsungProduct = product.filter(f => f.name.toLowerCase().includes('samsung'))
   // const motorolaProduct = product.filter(f => f.name.toLowerCase().includes('motorola'))
   // const iphoneProduct = product.filter(f => f.name.toLowerCase().includes('iphone'))
    
   
  

  return (
    <div className={style.container}>
     <div className={style.sub_container}>
    <h2>Celulares Samsung</h2>
    <Carousel responsive={responsive} infinite={true} >
  <div>hola</div>
    
  </Carousel>
  <h2>Celulares Motorola</h2>
  <Carousel responsive={responsive} infinite={true} >
     <div>hola</div>
    
  </Carousel>

  <h2>Celulares Iphone</h2>
  <Carousel responsive={responsive}  >
   <div>hola</div>
    
     </Carousel>
    </div>
  </div>
  )
}

export default SliderCard
