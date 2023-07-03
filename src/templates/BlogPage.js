import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";

import img from "../images/fruit1.png";
import img1 from "../images/fruit1.png";
import img2 from "../images/fruit2.png";
import img3 from "../images/fruit3.png";
import Footer from "./Footer";

const content = {
  image: `${img}`,
  writerName: "Kaniskaa",
  instagram: "xyz.com",
  facebook: "xyz.com",
  twitter: "xyz.com",
  linkedIn: "xyz.com",

  heading: "Hello World",
  caption:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat",

  more: [
    {
      subHeading: "I am subheading 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat",
      more: "I am smaller subHeading",
      moreData:
        "xyz Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      subHeading: "I am subheading 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat",
    },
    {
      subHeading: "I am subheading 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortorlibero. Etiam magna urna, volutpat in ornare sit amet, volutpat euelit. Curabitur quis tincidunt ex. Sed ultricies enim et felis feugiat",
      more: "I am smaller subHeading",
      moreData: "xyz",
    },
  ],
};

const data1 = [
  {
    id: 1,
    category: "Fruit",
    time: 5,
    title: "Simple tips to live a healthier life and increase longetivity",
    image: `${img1}`,
    categoryId: 1,
  },
  {
    id: 2,
    category: "Fruit",
    time: 5,
    title: "Simple tips to live a healthier life",
    image: `${img2}`,
    categoryId: 2,
  },
  {
    id: 3,
    category: "Fruit",
    time: 5,
    title: "Simple tips to live a healthier life",
    image: `${img3}`,
    categoryId: 3,
  },
  {
    id: 4,
    category: "Fruit",
    time: 5,
    title: "Simple tips to live a healthier life",
    image: `${img1}`,
    categoryId: 1,
  },
  {
    id: 1,
    category: "Fruit",
    time: 5,
    title: "Simple tips to live a healthier life and increase longetivity",
    image: `${img1}`,
    categoryId: 1,
  },
  {
    id: 2,
    category: "Fruit",
    time: 5,
    title: "Simple tips to live a healthier life",
    image: `${img2}`,
    categoryId: 2,
  },
  {
    id: 3,
    category: "Fruit",
    time: 5,
    title: "Simple tips to live a healthier life",
    image: `${img3}`,
    categoryId: 3,
  },
  {
    id: 4,
    category: "Fruit",
    time: 5,
    title: "Simple tips to live a healthier life",
    image: `${img1}`,
    categoryId: 1,
  },
  {
    id: 1,
    category: "Fruit",
    time: 5,
    title: "Simple tips to live a healthier life and increase longetivity",
    image: `${img1}`,
    categoryId: 1,
  },
  {
    id: 2,
    category: "Fruit",
    time: 5,
    title: "Simple tips to live a healthier life",
    image: `${img2}`,
    categoryId: 2,
  },
  {
    id: 3,
    category: "Fruit",
    time: 5,
    title: "Simple tips to live a healthier life",
    image: `${img3}`,
    categoryId: 3,
  },
  {
    id: 4,
    category: "Fruit",
    time: 5,
    title: "Simple tips to live a healthier life",
    image: `${img1}`,
    categoryId: 1,
  },
];
export default function BlogPage() {
  const defaultProps = {
    options: data1,
    getOptionLabel: (option) => option.title,
  };
  const flatProps = {
    options: data1.map((option) => option.title),
  };
  console.log(flatProps);
  const [value, setValue] = useState();
  return (
    <>
    <Header color="black"/>
    <div className="h-screen flex font-poppins">
      <div className="w-4/5 h-screen overflow-y-auto overflow-x-hidden">
      <motion.div
                    initial={{ opacity: 0.5, y:-100 }}
                    animate={{ opacity: 1, y:0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    >
        <div className="w-full justify-center flex text-[28px] m-3 font-bold font-poppins">
          {content.heading}
        </div>
        <div className="flex justify-between m-2">
          <div className="font-poppins text-[14px]">~{content.writerName}</div>
          <div className="w-1/4 flex justify-around">
            <a href={content.instagram}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href={content.facebook}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href={content.twitter}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href={content.linkedIn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="w-full p-2 h-[300px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${content.image})` }}
        ></div>
        <div className="text-[13px] p-2 leading-[30px]">{content.caption}</div>
        <div>
          {content.more.map((data) => (
            <div>
              <div className="text-[15px] font-semibold leading-[30px] p-2 text-lime-400">
                {data.subHeading}
              </div>
              <div className="text-[13px] leading-[30px] p-3">
                {data.content}
              </div>
              {data.more ? (
                <div>
                  <div className="text-[13px] font-semibold leading-[30px] p-2 mx-5 text-lime-400">
                    {data.more}
                  </div>
                  <div className="text-[13px] leading-[30px] mx-10">
                    {data.moreData}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div> </motion.div>
      </div>
     
      <div className="w-1/5 bg-[#D9F49E] overflow-hidden h-screen">
        <div className="ml-3">
          <div className="text-[18px] font-bold justify-center flex p-2 leading-5">
            Agenda
          </div>
          {content.more.map((data) => (
            <div className="px-2 text-[14px] leading-5 py-2 flex justify-center flex-col">
              {data.subHeading}
              {data.more ? (
                <div className="px-2 text-[12px] leading-5 py-1">
                  {data.more}
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
        <div>
          <div className="flex justify-center font-bold">Search for blogs</div>
          <Autocomplete
            {...defaultProps}
            id="controlled-demo"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="search blogs"
                variant="standard"
                size="small"
              />
            )}
          />
        </div>
        <div className="flex justify-center m-2 font-semibold">
          Trending Blogs
        </div>
        <div>
          {data1.map((data) => (
            <a href="blog">
            <div className="flex w-full h-full my-2">
              <div
                className="w-1/2 h-[80px] bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${data.image})` }}
              ></div>
              <div className="w-1/2 text-[12px] ml-[3px]">{data.title}</div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
