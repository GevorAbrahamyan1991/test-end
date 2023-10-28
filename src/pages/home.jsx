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
  ];
  const columnsModal = [
    { key: "id", label: "ID", link: true, href: "about" },
    { key: "first_name", label: "Name" },
    { key: "last_name", label: "LastName" },
    { key: "email", label: "Email" },
  ];

  const data = (
    <>
      <Title title="Home" />
      <Table tableColumns={columns} contents={pageData} data={columnsModal} />
    </>
  );

  return <StandartContainer data={data} />;
}
