import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.css';

export const Card = (props) => {
    const img = props.Image;
    const heading = props.Heading;
    const paragraph = props.Paragraph;

    return (<>
        <div className="parent_phi group lg:w-64  rounded shadow-xl shadow-slate-200 md:w-80 sm:w-3/4 relative z-0">
            <div className="p-8 relative z-20">
                <FontAwesomeIcon className="py-2 text-4xl text-blue-600 group-hover:text-white" icon={img} />
                <p className="text-xl font-semibold py-2 group-hover:text-white">{heading}</p>
                <p className="text-gray-600 group-hover:text-white">
                    {paragraph}
                </p>
            </div>
            <div className="phi absolute z-10 left-0 right-0 bottom-0 rounded bg-transparent"></div>
        </div>

    </>
    );

}
