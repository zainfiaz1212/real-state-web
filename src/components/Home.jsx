import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Featured from './Featured'
import Listed from './Listed'
import Awards from './Awards'
import Agents from './Agents'
import Price from './Price'
import Questions from './Questions'

function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Featured/>
        <Listed/>
        <Awards/>
        <Agents/>
        <Price/>
        <Questions/>
    </div>
  )
}

export default Home