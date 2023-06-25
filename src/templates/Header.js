import React, { useState } from "react";

const Header = () => {
    const [view, setView] = useState(false);
  return (
    <>
      <nav class="flex px-4 items-center relative">
        <div class="text-lg font-bold md:py-0 py-4">
            Logo
        </div>
        <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 text-white">
            <li>
                <a href="#about" class="flex md:inline-flex p-4 items-center hover:bg-gray-600 rounded-2xl">
                    <span>About</span>
                </a>
            </li>
            <li>
                <link href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-600 rounded-2xl">
                    <span>Corporate Wellness</span>
                </link>
            </li>
            <li class="relative parent" onMouseEnter={()=>setView(true)} onMouseLeave={()=>setView(false)}>
                <a href="#plans" class="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-600 rounded-2xl space-x-2">
                    <span>Plans</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                </a>
              {view &&   <ul class="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-gray-500 rounded-2xl md:shadow-lg md:rounded-b ">
                    <li>
                        <link href="#" class="flex px-4 py-3 hover:bg-gray-600 rounded-2xl">
                           Optimal weight loss diet program
                        </link>
                    </li>
                    <li>
                        <link href="#" class="flex px-4 py-3 hover:bg-gray-600 rounded-2xl">
                        Optimal weight loss diet program
                        </link>
                    </li>
                    <li>
                        <link href="#" class="flex px-4 py-3 hover:bg-gray-600 rounded-2xl">
                        Optimal weight loss diet program
                        </link>
                    </li>
                </ul>}
            </li>
            <li>
                <link href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-600 rounded-2xl">
                    <span>Health Read</span>
                </link>
            </li>
            <li>
                <a href="#faq" class="flex md:inline-flex p-4 items-center hover:bg-gray-600 rounded-2xl">
                    <span>FAQ</span>
                </a>
            </li>
            <li>
                <link href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-600 rounded-2xl">
                    <span>Blog</span>
                </link>
            </li>
            <li>
                <link href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-600 rounded-2xl">
                    <span>Contact Us</span>
                </link>
            </li>
        </ul>
        <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div>
    </nav>
    </>
  );
};

export default Header;
