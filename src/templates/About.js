import React from "react";
import { Typography } from "@material-tailwind/react";
import img from "../images/1.png";
import Header from "./Header";
import Footer from "./Footer";
export default function About() {
  return (
    <>
    <div
      className=" border-b overflow-hidden bg-contain"
      id="about"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Header color="black"/>
      <div
        className="container my-24 mx-auto md:px-6 h-screen" >
        <div className=" w-4/5 ml-auto text-center text-green-900 text-3xl font-ubu">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 to-red-700 border-b border-green-900"
          >
            About
          </Typography>
        </div>
        <div className=" w-4/5 ml-auto text-center text-green-900 text-3xl font-ubu">
          Welcome to my page!
        </div>
        <div className="ml-auto w-[75%] font-mono mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortor
          libero. Etiam magna urna, volutpat in ornare sit amet, volutpat eu
          elit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat
          consectetur. Integer elementum, augue quis accumsan luctus, orci
          lectus vulputate odio, nec vehicula diam ligula ac sem. Integer ut
          erat sed nunc condimentum convallis. Mauris efficitur leo at erat
          scelerisque, quis tempor magna convallis. Aliquam at ornare nisl.
          Aenean vel suscipit lorem. Sed cursus nulla enim, sit amet commodo
          augue vehicula ut. Etiam lacinia mauris odio, eu scelerisque eros
          consectetur quis. Fusce quis est efficitur sem viverra pellentesque.
          Aliquam magna dui, imperdiet vitae turpis vel, imperdiet rhoncus
          turpis. Donec nec quam sit amet massa varius aliquam sit amet vel
          velit. Vestibulum luctus, arcu et molestie ullamcorper, mauris urna
          mattis massa, sit amet pharetra nibh massa nec orci. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Vivamus blandit, leo id
          vulputate pellentesque, nunc nunc dapibus lectus, vel porta sem eros
          at massa. Nam tristique leo et magna finibus mollis. Fusce imperdiet,
          nisl et convallis consequat, elit diam consequat lectus, in auctor
          massa ipsum a lacus. Morbi vitae odio quis nunc cursus mollis. Nulla
          convallis purus at orci blandit, id iaculis augue viverra.
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

  // <section class="mb-32">
  //   <div class="flex flex-wrap">
  //     <div className="mb-12 w-52 h-screen bg-yellow-300 shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12 bg-[url('https://image.shutterstock.com/image-photo/image-young-beautiful-joyful-woman-260nw-1786572482.jpg')] bg-no-repeat bg-cover">
  //     </div>

  //     <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
  //       <div
  //         class="flex h-full items-center rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] p-6 text-center text-white lg:pl-12 lg:text-left">
  //         <div class="lg:pl-12">
  //           <h2 class="mb-8 text-3xl font-bold">Hello!</h2>
  //           <p class="mb-8 pb-2 lg:pb-0">
  //             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  //             Maxime, sint, repellat vel quo quisquam accusamus in qui at
  //             ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum
  //             distinctio eum neque!
  //           </p>

  //           <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
  //             <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
  //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
  //                 stroke="currentColor" class="mr-2 h-5 w-5">
  //                 <path stroke-linecap="round" stroke-linejoin="round"
  //                   d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  //               </svg>
  //           Qualified
  //             </p>

  //             <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
  //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
  //                 stroke="currentColor" class="mr-2 h-5 w-5">
  //                 <path stroke-linecap="round" stroke-linejoin="round"
  //                   d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  //               </svg>
  //           Certified Detician
  //             </p>

  //             <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
  //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
  //                 stroke="currentColor" class="mr-2 h-5 w-5">
  //                 <path stroke-linecap="round" stroke-linejoin="round"
  //                   d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  //               </svg>
  //           Best Guidance
  //             </p>
  //           </div>

  //           <p>
  //             Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
  //             porta dui, sit amet rutrum enim massa in ante. Curabitur in
  //             justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
  //             eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
  //             ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
  //             faucibus sapien eget tortor finibus, a eleifend lectus dictum.
  //             Cras tempor convallis magna id rhoncus. Suspendisse potenti.
  //             Nam mattis faucibus imperdiet. Proin tempor lorem at neque
  //             tempus aliquet. Phasellus at ex volutpat, varius arcu id,
  //             aliquam lectus. Vestibulum mattis felis quis ex pharetra
  //             luctus. Etiam luctus sagittis massa, sed iaculis est vehicula
  //             ut.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section> 
