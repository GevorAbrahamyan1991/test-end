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
      <div className="py-5">
        <div className="flex justify-evenly text-center">
          <div>
            <p className="font-bold">ID:</p> 
            <p>{newData[0].id}</p>
          </div>
          <div>
            <p className="font-bold">Name:</p> 
            <p>{newData[0].first_name}</p>
          </div>
          <div>
            <p className="font-bold">Last Name:</p>
            <p>{newData[0].last_name}</p>
          </div>
          <div>
            <p className="font-bold">Email:</p> 
            <p>{newData[0].email}</p>
          </div>
          <div>
            <p className="font-bold">Gender:</p> 
            <p>{newData[0].gender}</p>
          </div>
          <div>
            <p className="font-bold">
              Image:
            </p>
          <img src={newData[0].image} alt="" />
          </div>
        </div>
      </div>
    </>
  );

  return <StandartContainer data={data} />;
};

export default About;
