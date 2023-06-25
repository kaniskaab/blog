import React from "react";
import { Typography } from "@material-tailwind/react";
export default function FaqComponent() {
    return (
        <div className="flex items-center justify-center overflow-hidden" id="faq">
            <div className="bg-gray-400 w-screen">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <Typography
              variant="h1"
              color="white"
              className="text-3xl md:text-4xl lg:text-5xl text-green-500 text-center mb-10 p-1 border-b border-green-500"
            >
             Frequently Asked Questions
            </Typography>
                    <div className="flex flex-col">
                        <details className="w-full rounded-lg  ">
                            <summary className="px-4 py-6 text-green-500 text-xl font-ubu uppercase hover:bg-yellow-500/20 rounded-2xl">
                                What is xyz? 
                            </summary>
                            <p className="px-3 py-5 bg-green-600/30 rounded-2xl font-ubu tracking-tighter">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </details>
                        <details className="w-full rounded-lg ">
                            <summary className="px-4 py-6 text-green-500 text-xl font-ubu uppercase hover:bg-yellow-500/20 rounded-2xl">
                                What is xyz? 
                            </summary>
                            <p className="px-3 py-5 bg-green-600/30 rounded-2xl font-ubu tracking-tighter">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </details>
                        <details className="w-full rounded-lg ">
                            <summary className="px-4 py-6 text-green-500 text-xl font-ubu uppercase hover:bg-yellow-500/20 rounded-2xl">
                                What is xyz? 
                            </summary>
                            <p className="px-3 py-5 bg-green-600/30 rounded-2xl font-ubu tracking-tighter">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}