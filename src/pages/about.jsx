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
      <div className="">
        <div className="flex flex-col items-center">
          <div>
            <span className="font-bold">ID:</span> {newData[0].id}
          </div>
          <div>
            <span className="font-bold">Name:</span> {newData[0].first_name}
          </div>
          <div>
            <span className="font-bold">Last:</span> Name {newData[0].last_name}
          </div>
          <div>
            <span className="font-bold">Email:</span> {newData[0].email}
          </div>
          <div>
            <span className="font-bold">Gender:</span> {newData[0].gender}
          </div>
          <img src={newData[0].image} alt="" />
        </div>
      </div>
    </>
  );

  return <StandartContainer data={data} />;
};

export default About;
