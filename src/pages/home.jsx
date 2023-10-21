import React from 'react'
import StandartContainer from "./components/StandartContainer"
import Title from "./components/Title"
export default function Home ()  {
  
  const data = (
    <>
      <Title title="Home" />
    </>
  )

  return  <StandartContainer data={data} />
  
}
