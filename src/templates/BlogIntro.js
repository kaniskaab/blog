import React, { useState } from "react";
import Header from "./Header";
import SideArrow from "../SVG/SideArrow";
import BlogDisplay from "./BlogDisplay";
import Footer from "./Footer";

const data = [
    { 
        "id":1,
        "title":"Weight loss",
        "articles":12,
        
    },
    { 
        "id":2,
        "title":"Weight loss",
        "articles":12,
        
    },
    {  "id":3,
        "title":"Weight loss",
        "articles":12,
        
    }
]
export const BlogIntro = ()=>

{
    const [id,setId] =useState(0)
    

  

    return (
        <>
        <Header color="black"/>
        <text className="h-auto w-full items-center flex justify-center text-3xl text-bold font-poppins py-10 text-black">Health Reads</text>
        <div className="flex h-full">
         
        <div className=" w-[440px] flex justify-center font-poppins border-r ">
            <div className="h-full w-[300px] flex flex-col">
                <div className=" w-[95px] text-semibold text-[24px] leading-[32px] mb-16">Popular</div>
                <div className="h-[100px] w-[300px] flex flex-col border-b hover:shadow-xl border-[#739921] shadow-[#739921] p-2 rounded-[10px] hover:cursor-pointer bg-white/40" onClick={()=>{setId(0)}}>
                            <div className="flex justify-between w-full items-center">
                            <text className="h-[76px] w-[295px] text-bold text-[20px] leading-[38px]">All</text>
                            <div className="w-full -mr-80"><SideArrow/></div>
                           

                            </div>
                        </div>
                {
                    data.map((e)=>(
                        <div className="h-[100px] w-[300px] flex flex-col border-b hover:shadow-xl border-[#739921] shadow-[#739921] p-2 rounded-[10px] hover:cursor-pointer bg-white/40" onClick={()=>{setId(e.id)}}>
                            <div className="flex justify-between w-full items-center">
                            <text className="h-[76px] w-[295px] text-bold text-[20px] leading-[38px]">{e.title}</text>
                            <div className="w-full -mr-80"><SideArrow/></div>
                           

                            </div>
                            <text className="h-[10px] w-[58px] text-[12px]">{e.articles} articles</text>
                        </div>


                    ))
                }
            </div>
        </div>
        <BlogDisplay {...{id}}/>
        </div>
        <Footer/>
        </>
    )
}