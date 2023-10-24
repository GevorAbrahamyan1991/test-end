import React from "react";
import StandartContainer from "./components/StandartContainer";
import Title from "./components/Title";
import Table from "./components/Table";
import { pageData } from "./data/homeData";
export default function Home() {
  const columns = [
    { key: "id", label: "ID", link: true, href: "about" },
    { key: "first_name", label: "Name" },
    { key: "last_name", label: "LastName" },
    { key: "info", label: "Info" },
  ];

  // const modalColumns = [
  //   {
      
  //   }
  // ]

  const data = (
    <>
      <Title title="Home" />
      <Table tableColumns={columns} contents={pageData} />
    </>
  );

  return <StandartContainer data={data} />;
}
