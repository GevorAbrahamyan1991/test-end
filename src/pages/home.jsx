import React from 'react'
import StandartContainer from "./components/StandartContainer"
import Title from "./components/Title"
import Table from "./components/Table"
import { pageData } from "./data/homeData"
export default function Home ()  {
  
  const columns = [
    {key:"id", label: "ID", link:true , href:"about"},
    {key:"name", label: "Name"},
    {key:"last_name", label: "LastName"},
  ]
  // const pageData = [
  //   {
  //     id:1,
  //     name:'Poxos',
  //     last_name:"Poxosyan"
  //   },
  //   {
  //     id:2,
  //     name:'Petros',
  //     last_name:"Petrosyan"
  //   },
  //   {
  //     id:3,
  //     name:'Martiros',
  //     last_name:"Martirosyan"
  //   }
  // ]

  const data = (
    <>
      <Title title="Home" />
      <Table tableColumns={columns} contents={pageData}/>
    </>
  )

  return  <StandartContainer data={data} />
  
}
