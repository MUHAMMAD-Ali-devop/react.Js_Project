import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan} from "@fortawesome/free-solid-svg-icons";

export const Footer_links = (props)=>{
    const link = props.lnk;
    const arrow = <FontAwesomeIcon className="text-blue-700 text-xs px-3" icon={faGreaterThan} />;
    return(
        <>
        <li className="list-none text-sm text-gray-700 hover:text-blue-700 hover:cursor-pointer" href="#"><span>{arrow}</span>{link}</li>
        </>
    );
}
