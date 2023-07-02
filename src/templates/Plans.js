import React from "react";
import img from '../images/2.png'
import { Typography, Button } from "@material-tailwind/react";
export default function Plans() {
  const data = [
    {
      "name":"Optimal Weight Loss",
      "url":"https://img.freepik.com/free-photo/food-vegetable-colorful-background-tasty-fresh-vegetables-wooden-table-top-view-with-copy-space_1220-1490.jpg?w=900&t=st=1687802535~exp=1687803135~hmac=c8a6ebea48225b32d0131786a2575814ffb53b73d8bec25304c035354e898dd0",
      "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat"
    },
    {
      "name":"Optimal Weight Loss",
      "url":"https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop",
      "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat"
    },
    {
      "name":"Optimal Weight Loss",
      "url":"https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop",
      "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat"
    },
    {
      "name":"Optimal Weight Loss",
      "url":"https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop",
      "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat"
    },
    {
      "name":"Optimal Weight Loss",
      "url":"https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop",
      "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat"
    }
  ]
  return (
    <div
      className=" border-b overflow-hidden bg-contain bg-no-repeat"
      id="about"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div
        className="container my-24 mx-auto md:px-6 h-auto" >
        <div className=" w-4/5 ml-auto text-center text-green-900 text-3xl font-ubu">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 to-red-700 border-b border-green-900"
          >
           Plans Offered
          </Typography>
          <div className=" w-4/5 ml-auto text-center text-green-900 text-3xl font-ubu">
          Choose the best plans to match your Requirements
        </div>
        </div>
        <div className="grid grid-cols-2 ml-10">
        {data.map((one)=>
        <div className="mb-10">
        <div className="ml-[45%] w-[70%] h-40 font-mono mt-2 flex flex-col justify-center items-center rounded-2xl skew-y-0 shadow-xl overflow-hidden">
        {/* <div className="flex justify-center items-center h-full w-full ml-auto text-center text-green-900 text-3xl font-ubu bg-white/50 rounded-2xl"> */}
            <div className="h-full w-full hover:scale-150 bg-cover bg-no-repeat" style={{backgroundImage:`url(${one.url})`}}>
            </div>
            <h1 className="bg-white/50 rounded-2xl font-ubu text-2xl" style={{position:"fixed"}}>{one.name}</h1>
        {/* </div> */}
        </div>
        <div className="ml-[45%] w-[70%] h-40 p-2 font-mono mt-2 flex flex-col justify-center items-center rounded-2xl skew-y-0 shadow-xl bg-white">
          <h1>{one.desc}</h1>
          <Button className="bg-green-600 p-2">Learn More</Button>
        </div>
        </div>
        )}
        </div>
      </div>
    </div>
  );
}

