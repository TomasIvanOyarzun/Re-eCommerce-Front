import React from 'react'
import Cards from '../../components/cards-products/Cards'
import Paginado from '../../components/Paginado/Paginado'
import SliderCard from '../../components/sliderCard/SliderCard'

const CardPagination = () => {
  return (
    <div>
          <Paginado />
      <Cards />
      <Paginado />
    <SliderCard/>

    </div>
  )
}

export default CardPagination
