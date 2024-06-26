import React from 'react';
import { ServicesCards } from './ServicesCards';
import { faBaseball, faFileLines, faMeteor, faEarthAmericas, faTv, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
    const cardContent = [
        {

            icon: { ...faBaseball },
            heading: 'Lorem Ipsum',
            detail: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
        },
        {

            icon: { ...faFileLines },
            heading: 'Sed ut perspiciatis',
            detail: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
        },
        {

            icon: { ...faMeteor },
            heading: 'Magni Dolores',
            detail: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
        },
        {

            icon: { ...faEarthAmericas },
            heading: 'Nemo Enim',
            detail: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
        },
        {

            icon: { ...faTv },
            heading: 'Dele cardo',
            detail: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur'
        },
        {

            icon: { ...faDoorOpen },
            heading: 'Divera don',
            detail: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur'
        }
    ];
    return (
        <div className='p-16 mt-20'>
            <div className='flex flex-col items-center'>
                <p className='py-1 px-4 border-2 text-sm font-bold text-blue-700 rounded-full bg-gray-200'>SERVICES</p>
                <p className='text-3xl font-bold my-4'>Check our <span className='text-blue-700'>Services</span></p>
                <p className='text-center font-semibold text-lg text-slate-700 mb-8'>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est<br></br> adipisci expedita at voluptas atque vitae autem.</p>
            </div>
            <div className='py-10 grid gap-y-4 sm:grid-rows-6 sm:gap-y-6 place-items-center md:grid-rows-3 md:grid-flow-col md:gap-3 lg:grid-rows-2 lg:grid-flow-col lg:gap-3'>
                {
                    cardContent.map(
                        content => (
                            <ServicesCards
                                Img={content.icon}
                                Heading={content.heading}
                                Detail={content.detail}
                            />
                        )
                    )
                }
            </div>
        </div>
    );
}
