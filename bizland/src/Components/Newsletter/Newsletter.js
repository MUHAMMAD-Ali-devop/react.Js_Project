import React from "react";

export const Newsletter = () => {
   
    return (
        <>
            <div className="bg-slate-200 py-14">
                <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold text-gray-700 my-2">Join Our Newsletter</p>
                    <p className="text-lg text-gray-700 my-4 text-center">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <div className="flex md:w-2/4 h-12 w-full justify-center">
                        <input type="email" className="md:w-3/4 sm:w-2/4 w-full h-full rounded-md pl-4 focus:outline-none"/>
                        <input type="submit" value='Subscribe' className=" px-5 font-semibold text-white bg-blue-700 rounded-md hover:cursor-pointer hover:bg-blue-800 h-full"></input>
                    </div>
                </div>
            </div>
        </>
    );
}
