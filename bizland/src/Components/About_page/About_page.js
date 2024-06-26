import React from "react";
import about from '../../Assets/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
export const About_page = () => {
    return (
        <>
            <div className="bg-gray-100 p-14 mt-20">
                <div className="flex flex-col items-center">
                    <p className="py-1 px-4 text-sm font-bold text-blue-700 rounded-full bg-gray-200">ABOUT</p>
                    <p className="text-3xl font-bold my-4">Find Out More <span className="text-blue-600">About Us</span></p>
                    <p className="text-center font-semibold text-lg text-slate-700 mb-8">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est<br></br> adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <div className="w-full my-4 flex flex-col lg:flex lg:flex-row h-full">
                    <div className=" w-full lg:w-1/2 h-full"><img className="w-full h-full" src={about} alt="about-img"></img></div>
                    <div className=" py-6 flex flex-col px-5 w-full lg:w-1/2">
                        <p className="text-2xl font-bold text-slate-700">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</p>
                        <p className="text-base text-slate-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="flex items-center w-full my-6">
                            <div className="p-5 rounded-full shadow-sm shadow-gray-300 mx-4 bg-white"><FontAwesomeIcon className="text-lg text-blue-600" icon={faShop} /></div>
                            <div>
                                <p className="text-lg font-semibold text-slate-800 py-1">Ullamco laboris nisi ut aliquip consequat</p>
                                <p className="text-slate-700">Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                            </div>
                        </div>
                        <div className="flex items-center w-full my-8">
                            <div className="p-5 rounded-full shadow-sm shadow-gray-300 mx-4 bg-white"><FontAwesomeIcon className="text-lg text-blue-600" icon={faPhotoFilm} /></div>
                            <div>
                                <p className="text-lg font-semibold text-slate-800 py-1">Magnam soluta odio exercitationem reprehenderi</p>
                                <p className="text-slate-700">Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                            </div>
                        </div>
                        <p className="text-slate-700">
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}