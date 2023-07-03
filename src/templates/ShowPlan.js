import React from "react";
import { motion } from "framer-motion";
import Design from "../SVG/Design";
import Header from "./Header";
import Footer from "./Footer";
const data = {
  planId: 1,
  planName: "Optimized Weight loss",
  targetAudience: " loose weight",
  planDetails:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat",
  perks: [
    {
      points: "point1 Lorem ipsum dolor sit amet",
    },
    {
      points: "point2 Lorem ipsum dolor sit amet",
    },
    {
      points: "point3 Lorem ipsum dolor sit amet",
    },
    {
      points: "point4 Lorem ipsum dolor sit amet",
    },
  ],
  consultations: [
    {
      topic: "Diet Plans",
      duration: "1 hour",
    },
    {
      topic: "Workout Schedule",
      duration: "1 hour",
    },
    {
      topic: "Tracking Details",
      duration: "1 hour",
    },
  ],
};
export default function ShowPlan() {
  return (
    <>
    <Header color="black"/>
    <div className="flex font-poppins">
      <div
        className="w-4/5 h-screen justify-center items-center flex p-2 bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/flat-lay-apple-with-measuring-tape-weights_23-2148523218.jpg?w=900&t=st=1687802613~exp=1687803213~hmac=b618e5ff24f706216e80331330419e0cbb4136abd2a111539608210a0a62c9eb')`,
        }}
      >
        <motion.div className="bg-black/40 rounded-[5px] text-white"
        initial={{ opacity: 0.1, x:-100 }}
        animate={{ opacity: 1, x:0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <div className="w-full text-[40px] font-bold flex justify-center">
            {data.planName}
          </div>
          <div className="w-full text-[15px] font-mono flex justify-center">
            ~Plan for people looking to {data.targetAudience}
          </div>
          <div className="w-full flex justify-center text-[18px] my-2">
            Details
          </div>
          <div className="w-full px-2 text-[14px]">{data.planDetails}</div>
          <motion.div
          initial={{ opacity: 0, y:-300 }}
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ ease: "easeOut", duration: 1 }}
           className="w-full flex">
            <div className="w-1/2">
              <div className="w-full flex justify-center text-[18px] my-2">
                Consultations
              </div>

              <ul className="flex flex-col justify-center items-center leading-[30px]">
                {data.consultations.map((e) => (
                  <li>
                    ~ {e.topic} for {e.duration}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2">
              <div className="w-full flex justify-center text-[18px] my-2">
                Perks
              </div>

              <ul className="flex flex-col justify-center items-center leading-[30px]">
                {data.perks.map((e) => (
                  <li>~ {e.points}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-1/5 bg-[#fdd097] h-screen flex justify-center p-2 items-center text-white" >
     <div className="w-[290px] h-[488px] flex flex-col items-center bg-black/30 p-2 rounded-[5px] m-2 mt-3">
        <div className="w-full flex justify-center leading-4 text-[30px] mb-2 pt-3">Buy Now</div>
        <div>{data.targetAudience}</div>
        <div className="w-full text-[14px]">
              <div className="w-full flex items-center text-[18px] my-2">
                General Perks
              </div>

              <ul className="flex flex-col justify-center items-center leading-[30px]">
                {data.perks.map((e) => (
                  <li>~ {e.points}</li>
                ))}
              </ul>
            </div>
            <div>Price: <span className="text-[16px] font-bold leading-3">100INR</span></div>
            <button className="w-3/5 h-[40px] text-[20px] rounded-[10px] bg-[#fdd097]">Buy Now</button>

     </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
