import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../images/fruit1.png'
import img2 from '../images/fruit2.png'

import img3 from '../images/fruit3.png'


const data1 = [
    {
        "id":1,
        "category":"Fruit",
        "time":5,
        "title":"Simple tips to live a healthier life and increase longetivity",
        "image":`${img1}`,
        "categoryId":1,
       
    },
    {
        "id":2,
        "category":"Fruit",
        "time":5,
        "title":"Simple tips to live a healthier life",
        "image":`${img2}`,
        "categoryId":2,
       

    },
    {
        "id":3,
        "category":"Fruit",
        "time":5,
        "title":"Simple tips to live a healthier life",
        "image":`${img3}`,
        "categoryId":3,
      


    },
    {
        "id":4,
        "category":"Fruit",
        "time":5,
        "title":"Simple tips to live a healthier life",
        "image":`${img1}`,
        "categoryId":1,
        


    },
    {
        "id":1,
        "category":"Fruit",
        "time":5,
        "title":"Simple tips to live a healthier life and increase longetivity",
        "image":`${img1}`,
        "categoryId":1,
       
    },
    {
        "id":2,
        "category":"Fruit",
        "time":5,
        "title":"Simple tips to live a healthier life",
        "image":`${img2}`,
        "categoryId":2,
       

    },
    {
        "id":3,
        "category":"Fruit",
        "time":5,
        "title":"Simple tips to live a healthier life",
        "image":`${img3}`,
        "categoryId":3,
      


    },
    {
        "id":4,
        "category":"Fruit",
        "time":5,
        "title":"Simple tips to live a healthier life",
        "image":`${img1}`,
        "categoryId":1,
        


    },
    {
        "id":1,
        "category":"Fruit",
        "time":5,
        "title":"Simple tips to live a healthier life and increase longetivity",
        "image":`${img1}`,
        "categoryId":1,
       
    },
    {
        "id":2,
        "category":"Fruit",
        "time":5,
        "title":"Simple tips to live a healthier life",
        "image":`${img2}`,
        "categoryId":2,
       

    },
    {
        "id":3,
        "category":"Fruit",
        "time":5,
        "title":"Simple tips to live a healthier life",
        "image":`${img3}`,
        "categoryId":3,
      


    },
    {
        "id":4,
        "category":"Fruit",
        "time":5,
        "title":"Simple tips to live a healthier life",
        "image":`${img1}`,
        "categoryId":1,
        


    }
]
export default function BlogDisplay({id}) {
    console.log(id)
    const divsContainerRef = useRef(null);
  const [showDivs, setShowDivs] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowDivs(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.1 } // Adjust the threshold as needed
    );

    if (divsContainerRef.current) {
      observer.observe(divsContainerRef.current);
    }

    return () => {
      if (divsContainerRef.current) {
        observer.unobserve(divsContainerRef.current);
      }
    };
  }, []);
    const staggerDelay = 0.4
  return (
    <div className='w-[800px] h-auto flex font-poppins items-center justify-center' ref={divsContainerRef}>
        <div className='h-auto w-[750px] flex flex-col '>
            <text className='text-[#0f1935] text-[24px] font-poppins font-bold leading-[32px]'>Latest</text>
            <div className=" flex flex-wrap justify-center ">
            <AnimatePresence>
                
            {
                showDivs &&
                data1.map((data)=>(
                  <span>
                    {data.categoryId===id &&
                    <motion.div className='h-[352px] w-[350px] flex justify-around items-center'
                    initial={{ opacity: 0, z: -100, y:-100 }}
                    animate={{ opacity: 1, z: 0, y:0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    >
                      <a href='blog'>
                        <div className='h-[280] w-[350] flex flex-col justify-around items-center p-1 hover:bg-white/50 rounded-[5px] hover:scale-105 transition-all ease-in-out duration-300'>
                        <div className='h-[240px] w-[300px]' style={{backgroundImage: `url(${data.image})`}}></div>
                        <div className='h-[12px] w-[153px] flex justify-between text-green-500'>
                        <text className='text-[13px] uppercase text-[#f5556e]'>{data.category}</text>
                        <text className='text-[13px]' >{data.time} mins read</text>
                        </div>
                        <div className='h-[60px] w-[320px] text-[20px] leading-[30px]'>{data.title}</div>
                        </div>
                        </a>
                    </motion.div>
                    }
                     {id===0 &&
                    <motion.div className='h-[352px] w-[350px] flex justify-around items-center'
                    initial={{ opacity: 0, z: -100, y:-100 }}
                    animate={{ opacity: 1, z: 0, y:0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: staggerDelay }}
                    >
                      <a href='blog'>
                        <div className='h-[280] w-[350] flex flex-col justify-around items-center p-1 hover:bg-white/50 rounded-[5px] hover:scale-105 transition-all ease-in-out duration-300'>
                        <div className='h-[240px] w-[300px]' style={{backgroundImage: `url(${data.image})`}}></div>
                        <div className='h-[12px] w-[153px] flex justify-between text-green-500'>
                        <text className='text-[13px] uppercase text-[#f5556e]'>{data.category}</text>
                        <text className='text-[13px]' >{data.time} mins read</text>
                        </div>
                        <div className='h-[60px] w-[320px] text-[15px] leading-[30px]'>{data.title}</div>
                        </div>
                        </a>
                    </motion.div>
                    }
                  </span>
                   
                    
                
                ))
            }
            </AnimatePresence>
            </div>

        </div>
      
    </div>
  )
}
