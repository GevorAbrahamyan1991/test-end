import React from "react";
import { useParams } from "react-router-dom";
import { pageData } from "./data/homeData";
import StandartContainer from "./components/StandartContainer";
import Title from "./components/Title";

const About = () => {
  const { id } = useParams();

  const newData = pageData.filter((item) => item.id == id);
  console.log(newData[0]);
  const data = (
    <>
      <Title title={`Single ${id}`} />
      <div>
        <div className="flex justify-between">
          <div>ID</div>
          <div>{newData[0].id}</div>
        </div>
        <div className="flex justify-between">
          <div>Email</div>
          <div>{newData[0].email}</div>
        </div>
        <div>
          <img src={newData[0].image} alt="" />
        </div>
      </div>
    </>
  );

  return <StandartContainer data={data} />;
};

export default About;
