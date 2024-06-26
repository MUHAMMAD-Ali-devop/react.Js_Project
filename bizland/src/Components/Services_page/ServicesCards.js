import React from "react";
import './ServicesCards.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ServicesCards = (props) => {
    let Icon = props.Img;
    let heading = props.Heading;
    let detail = props.Detail;
    return (
        <div className="w-full parent md:w-11/12  border-2 border-slate-50 flex flex-col items-center text-center py-20 px-8 hover:shadow-md lg:my-custom-width lg:h-96 ">
            <FontAwesomeIcon className='p-5 text-2xl child1 border-2 text-blue-600 bg-gray-100 rounded-md' icon={Icon} />
            <p className="text-2xl child2 font-bold my-4">{heading}</p>
            <p>{detail}</p>
        </div>
    );
}