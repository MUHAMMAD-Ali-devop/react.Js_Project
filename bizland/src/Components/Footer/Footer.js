import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSellcast, faLinkedinIn, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Footer_links } from "./Footer_links";
export const Footer = () => {
    const brand_classes = 'border-2 p-2 text-white bg-blue-700 w-4 text-md rounded-md cursor-pointer hover:bg-blue-600'
    const facebook = <FontAwesomeIcon className={brand_classes} icon={faFacebookF} />;
    const insta = <FontAwesomeIcon className={brand_classes} icon={faInstagram} />;
    const twitter = <FontAwesomeIcon className={brand_classes} icon={faTwitter} />;
    const linkedin = <FontAwesomeIcon className={brand_classes} icon={faLinkedinIn} />;
    const swiggy = <FontAwesomeIcon className={brand_classes} icon={faSellcast} />;
    const link_1 = ['Home', 'About Us', 'Services', 'Terms of Services', 'Privacy Policy'];
    const link_2 = ['Web Design', 'Web Development', 'Product Management', 'Marketing', 'Graphic Design'];
    return (
        <>
            <div className="w-full py-16 px-20">
                <div className="lg:flex lg:justify-between grid md:grid-cols-2 grid-cols-1 gap-4  md:place-items-center">
                    <div className="flex flex-col lg:w-1/5 md:w-3/4 w-full items-start pb-4 ">
                        <p className="pb-2 text-2xl font-bold text-gray-700">BizLand<span className="text-blue-700">.</span></p>
                        <p className="py-3 text-sm text-gray-700">A108 Adam Street<br></br>
                            New York, NY 535022<br></br>
                            United States</p>
                        <p className="pt-2 text-sm text-gray-700"><span className="font-bold">Phone:</span> +1 5589 55488 55</p>
                        <p className="text-sm text-gray-700"><span className="font-bold">Email:</span> info@example.com</p>
                    </div>
                    <div className="lg:w-1/6 flex flex-col md:w-3/4 items-center ">
                        <p className="text-md font-bold">Usefull Links</p>
                        <div className="grid gap-y-3 gap-cols-5  w-10/12 ">

                            {
                                link_1.map(data => (
                                    <Footer_links
                                        lnk={data}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="lg:w-1/6 md:w-3/4 flex flex-col items-center ">
                        <p className="text-md font-bold">Our Services</p>
                        <div className="grid gap-y-3 gap-cols-5  w-full ">
                            {
                                link_2.map(data => (

                                    <Footer_links
                                        lnk={data}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-1/4 md:w-3/4 ">
                        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                        <div>
                            <a>{twitter}</a>
                            <a>{facebook}</a>
                            <a>{insta}</a>
                            <a>{swiggy}</a>
                            <a>{linkedin}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
