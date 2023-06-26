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









// return (
  //   <div className="w-screen overflow-hidden" id="plans">
  //     <div className="flex flex-col cursor-pointer">
  //       <Typography
  //         variant="h1"
  //         color="white"
  //         className="text-3xl md:text-4xl lg:text-5xl text-green-500 text-center border-b border-green-500 h-30 p-5 bg-gray-200 font-ubu"
  //       >
  //         Plans
  //       </Typography>
  //       <div className="flex h-auto">
  //         <div className="w-1/2 h-40 shrink-0 overflow-hidden">
  //           <div className="h-full bg-[url('https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop')] bg-cover bg-no-repeat  hover:scale-150 transition delay-300 duration-2000 ease-linear">
  //             <div className="flex h-full w-full bg-white/50 tracking-tighter text-3xl font-dance items-center justify-center text-green-900">
  //               Optimal Weight Loss
  //             </div>
  //           </div>
  //         </div>
  //         <div className="w-1/2 h-40 shrink-0 overflow-hidden">
  //           <div className="h-full bg-[url('https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop')] bg-cover bg-no-repeat  hover:scale-150 transition delay-300 duration-2000 ease-linear">
  //             <div className="flex h-full w-full bg-white/50 tracking-tighter text-3xl font-dance items-center justify-center text-green-900">
  //               Optimal Weight Loss
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="flex h-auto w-screen">
  //         <div className="w-1/2 h-40 shrink-0 overflow-hidden">
  //           <div className="h-full bg-[url('https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop')] bg-cover bg-no-repeat  hover:scale-150 transition delay-300 duration-2000 ease-linear">
  //             <div className="flex h-full w-full bg-white/50 tracking-tighter text-3xl font-dance items-center justify-center text-green-900">
  //               Optimal Weight Loss
  //             </div>
  //           </div>
  //         </div>
  //         <div className="w-1/2 h-40 shrink-0 overflow-hidden">
  //           <div className="h-full bg-[url('https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop')] bg-cover bg-no-repeat  hover:scale-150 transition delay-300 duration-2000 ease-linear">
  //             <div className="flex h-full w-full bg-white/50 tracking-tighter text-3xl font-dance items-center justify-center text-green-900">
             
  //               Optimal Weight Loss
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="flex h-auto w-screen">
  //         <div className="w-1/2 h-40 shrink-0 overflow-hidden">
  //           <div className="h-full bg-[url('https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop')] bg-cover bg-no-repeat  hover:scale-150 transition delay-300 duration-2000 ease-linear">
  //             <div className="flex h-full w-full bg-white/50 tracking-tighter text-3xl font-dance items-center justify-center text-green-900">
               
  //               Optimal Weight Loss
  //             </div>
  //           </div>
  //         </div>
  //         <div className="w-1/2 h-40 shrink-0 overflow-hidden">
  //           <div className="h-full bg-[url('https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop')] bg-cover bg-no-repeat  hover:scale-150 transition delay-300 duration-2000 ease-linear">
  //             <div className="flex h-full w-full bg-white/50 tracking-tighter text-3xl font-dance items-center justify-center text-green-900">
               
  //               Optimal Weight Loss
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

//       <div class="py-16 bg-purple-200">
//     <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
//         <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
//             <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
//                 <div class="mb-12 space-y-4">
//                     <h3 class="text-2xl font-semibold text-purple-900">Graphic Design</h3>
//                     <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
//                     <a href="#" class="block font-medium text-purple-600">Know more</a>
//                 </div>
//                 <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
//             </div>
//             <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
//                 <div class="mb-12 space-y-4">
//                     <h3 class="text-2xl font-semibold text-purple-900">UI Design</h3>
//                     <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
//                     <a href="#" class="block font-medium text-purple-600">Know more</a>
//                 </div>
//                 <img src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg" class="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
//             </div>
//             <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
//                 <div class="mb-12 space-y-4">
//                     <h3 class="text-2xl font-semibold text-purple-900">UX Design</h3>
//                     <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
//                     <a href="#" class="block font-medium text-purple-600">Know more</a>
//                 </div>
//                 <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
//             </div>
//         </div>
//     </div>
// </div>