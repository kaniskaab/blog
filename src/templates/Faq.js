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

   // return (
    //     <div className="flex items-center justify-center overflow-hidden" id="faq">
    //         <div className="bg-gray-400 w-screen">
    //             <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
    //             <Typography
    //           variant="h1"
    //           color="white"
    //           className="text-3xl md:text-4xl lg:text-5xl text-green-500 text-center mb-10 p-1 border-b border-green-500"
    //         >
    //          Frequently Asked Questions
    //         </Typography>
    //                 <div className="flex flex-col">
    //                     <details className="w-full rounded-lg  ">
    //                         <summary className="px-4 py-6 text-green-500 text-xl font-ubu uppercase hover:bg-yellow-500/20 rounded-2xl">
    //                             What is xyz? 
    //                         </summary>
    //                         <p className="px-3 py-5 bg-green-600/30 rounded-2xl font-ubu tracking-tighter">
    //                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    //                         </p>
    //                     </details>
    //                     <details className="w-full rounded-lg ">
    //                         <summary className="px-4 py-6 text-green-500 text-xl font-ubu uppercase hover:bg-yellow-500/20 rounded-2xl">
    //                             What is xyz? 
    //                         </summary>
    //                         <p className="px-3 py-5 bg-green-600/30 rounded-2xl font-ubu tracking-tighter">
    //                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    //                         </p>
    //                     </details>
    //                     <details className="w-full rounded-lg ">
    //                         <summary className="px-4 py-6 text-green-500 text-xl font-ubu uppercase hover:bg-yellow-500/20 rounded-2xl">
    //                             What is xyz? 
    //                         </summary>
    //                         <p className="px-3 py-5 bg-green-600/30 rounded-2xl font-ubu tracking-tighter">
    //                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    //                         </p>
    //                     </details>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );