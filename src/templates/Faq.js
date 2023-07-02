import React from "react";
import { Typography } from "@material-tailwind/react";
import img from '../images/1.png'
export default function FaqComponent() {
    const data = [
        {
            "q":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat",
            "solution":" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiatconsectetur. Integer elementum, augue quis accumsan luctus, orcilectus vulputate odio, nec vehicula diam ligula ac sem. Integer uterat sed nunc condimentum convallis. Mauris efficitur leo at eratscelerisque, quis tempor magna convallis. Aliquam at ornare nisl."
        },
        {
            "q":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat",
            "solution":" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiatconsectetur. Integer elementum, augue quis accumsan luctus, orcilectus vulputate odio, nec vehicula diam ligula ac sem. Integer uterat sed nunc condimentum convallis. Mauris efficitur leo at eratscelerisque, quis tempor magna convallis. Aliquam at ornare nisl."
        }
        ,  {
            "q":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat",
            "solution":" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiatconsectetur. Integer elementum, augue quis accumsan luctus, orcilectus vulputate odio, nec vehicula diam ligula ac sem. Integer uterat sed nunc condimentum convallis. Mauris efficitur leo at eratscelerisque, quis tempor magna convallis. Aliquam at ornare nisl."
        }
    ]
    return (
        <div
        className=" border-b overflow-hidden bg-contain bg-no-repeat bg-[#D9F49E]"
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
              Frequently Asked Questions
            </Typography>
           
          </div>
           {data.map((one)=>
            <div className="my-20">
                 <div className=" w-[78%] ml-auto text-center text-green-900 text-xl font-ubu">
                    {one.q}
                 </div>
                 <div className="ml-auto w-[75%] font-mono mt-2">
                  {one.solution}
                 </div>
            </div>
            )}
         
        </div>
      </div>
    )
}