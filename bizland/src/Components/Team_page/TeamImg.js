import React from "react";
import './TeamImg.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const TeamImg = (props) => {
    let img = props.Img;
    let member = props.Name;
    let profession = props.Workas;
const icon_style = 'p-2 bg-blue-700 text-white text-lg rounded w-4 cursor-pointer hover:bg-blue-600';
    return (
        <>
            <div className="t_parent flex flex-col w-full shadow-lg rounded-lg relative z-0">
                <div><img className="rounded-sm" src={img} alt="Team members"></img></div>
                <div className="py-6 px-4">
                    <p className="text-lg font-bold">{member}</p>
                    <p className="text-sm text-gray-500 font-semibold">{profession}</p>
                </div>
                <div className="Child_icon w-full px-2 flex justify-evenly ">
                    <FontAwesomeIcon className={icon_style} icon={faInstagram} />
                    <FontAwesomeIcon className={icon_style} icon={faFacebookF} />
                    <FontAwesomeIcon className={icon_style} icon={faTwitter} />
                    <FontAwesomeIcon className={icon_style} icon={faLinkedinIn} />
                </div>
            </div>
        </>
    );
}