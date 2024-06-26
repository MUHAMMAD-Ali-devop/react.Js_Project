import React from "react";
import { Card } from "./Card";
import './Landing_page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faBaseball, faFileLines, faMeteor, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
export const Landing_page = () => {
    const cardContent = [
        {
            // img: <FontAwesomeIcon className="py-2 text-4xl text-blue-600" icon={faBaseball} />,
            img:{...faBaseball},
            heading: 'Lorem Ipsum',
            para: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
        },
        {
            img: {...faFileLines},
            heading: 'Sed ut perspiciatis',
            para: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
        },
        {
            img: {...faMeteor},
            heading: 'Magni Dolores',
            para: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
        },
        {
            img: {...faEarthAmericas},
            heading: 'Nemo Enim',
            para: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
        }
    ]
    return (
        <>
            <div className="relative z-0 bg-background1 bg-cover bg-no-repeat bg-fixed opacity-100 mt-20">
                <div className=" w-full h-full py-16 flex items-center relative z-10 top-0 left-0 bg-slate-50/50">
                    <div className="flex flex-col h-full w-full px-16 pb-14 pt-20 parentHome">
                        <p className="text-5xl font-bold py-2">Welcome to <span className="text-blue-600">BizLand</span></p>
                        <p className="text-2xl text-slate-600 py-1">We are team of talented designers making websites with Bootstrap</p>
                        <div className="flex py-7">
                            <button className='mr-4 text-sm font-semibold text-white bg-blue-600 py-2 px-6 rounded-lg hover:bg-blue-500'>GET STARTED</button>
                            <button className=" text-base flex items-center px-2 font-semibold gap-2 gap-cols-2 hover:text-blue-600"><FontAwesomeIcon className="text-4xl text-blue-600" icon={faCirclePlay} />Watch Video</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative xl:px-16 py-14 lg:flex lg:justify-evenly w-full lg:px-4 md:grid md:grid-rows-2 md:grid-flow-col md:gap-x-2 md:gap-y-2 md:justify-evenly sm:grid sm:grid-rows-4 sm:gap-8 sm:place-items-center px-16 place-items-center">
                {
                    cardContent.map(
                        content => (
                            <Card
                                Image={content.img}
                                Heading={content.heading}
                                Paragraph={content.para}
                            />

                        )
                    )
                }
            </div>
        </>
    );
}
