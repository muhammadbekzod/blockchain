import React from 'react'
import Browse from './browse/browse'
import CreateAndSell from './createAndSell/createAndSell'
import Hero from './Hero/hero'
import NotableDrop from './notableDrop/notableDrop'
import Resource from './resourcePart/resource'
import TopCollection from './topCollection/topCollection'
import TrendingHome from './trending/trendingHome'

const HomeRoot = () => {
  return (
    <div>
      <Hero />
      <NotableDrop />
      <TopCollection />
      <TrendingHome />
      <CreateAndSell />
      <Resource />
      <Browse />
    </div>
  )
}

export default HomeRoot