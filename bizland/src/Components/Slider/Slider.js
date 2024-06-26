import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import test_1 from '../../Assets/testimonials/testimonials-1.jpg';
import test_2 from '../../Assets/testimonials/testimonials-2.jpg';
import test_3 from '../../Assets/testimonials/testimonials-3.jpg';
import test_4 from '../../Assets/testimonials/testimonials-4.jpg';
import test_5 from '../../Assets/testimonials/testimonials-5.jpg';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
// import 'swiper/css';
export const Slider = () => {
    return (
        <>
            <Swiper
                modules={[ Pagination,Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ // Autoplay configuration
                    delay: 3000, // Delay between transitions (in milliseconds)
                    disableOnInteraction: true, // Whether to stop autoplay on user interaction (default: true)
                  }}
                pagination={{ clickable: true }}
  style={{ '--swiper-pagination-bullet-width': '14px', '--swiper-pagination-bullet-height': '14px', }} // Inline styles
            >
                <SwiperSlide>
                    {/* <img src={test}></img> */}
                    <div style={{ height: '450px' }} className={`relative z-0 bg-background2 bg-cover bg-no-repeat bg-fixed opacity-100`}>
                        <div className='w-full h-full relative z-10 top-0 left-0 right-0 bg-slate-800/50 '>
                            <div className='relative z-20 top-0 left-0 opacity-100 flex flex-col justify-center items-center h-full'>
                                <img className='w-20 h-20 rounded-full outline outline-4 outline-slate-500' src={test_1}></img>
                                <p className='text-xl text-white flex flex-col my-3 font-bold text-center'>
                                    Saul GoodMan
                                    <span className='text-md my-2 text-lg text-center'>Ceo&Founder</span>
                                </p>
                                <p className='text-center text-white text-lg'><span className='text-4xl font-bold'>"</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br> labore et dolore magna aliqua. Ut enim ad minim veniam,<span className='text-4xl font-bold'>"</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src={test}></img> */}
                    <div style={{ height: '450px' }} className={`relative z-0 bg-background2 bg-cover bg-no-repeat bg-fixed opacity-100`}>
                        <div className='w-full h-full relative z-10 top-0 left-0 right-0 bg-slate-800/50  '>
                            <div className=' relative z-50 opacity-100 flex flex-col justify-center items-center h-full'>
                                <img className='w-20 h-20 rounded-full outline outline-4 outline-slate-500' src={test_2}></img>
                                <p className='text-xl text-white flex flex-col my-3 font-bold text-center'>
                                    Sara Wilson
                                    <span className='text-md my-2 text-lg text-center'>Designer</span>
                                </p>
                                <p className='text-center text-white text-lg'><span className='text-4xl font-bold'>"</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br> labore et dolore magna aliqua. Ut enim ad minim veniam,<span className='text-4xl font-bold'>"</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src={test}></img> */}
                    <div style={{ height: '450px' }} className={`relative z-0 bg-background2 bg-cover bg-no-repeat bg-fixed opacity-100`}>
                        <div className='w-full h-full relative z-10 top-0 left-0 right-0 bg-slate-800/50  '>
                            <div className=' relative z-50 opacity-100 flex flex-col justify-center items-center h-full'>
                                <img className='w-20 h-20 rounded-full outline outline-4 outline-slate-500' src={test_3}></img>
                                <p className='text-xl text-white flex flex-col my-3 font-bold text-center'>
                                    Jena Karlis
                                    <span className='text-md my-2 text-lg text-center'>Store Owner</span>
                                </p>
                                <p className='text-center text-white text-lg'><span className='text-4xl font-bold'>"</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br> labore et dolore magna aliqua. Ut enim ad minim veniam,<span className='text-4xl font-bold'>"</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src={test}></img> */}
                    <div style={{ height: '450px' }} className={`relative z-0 bg-background2 bg-cover bg-no-repeat bg-fixed opacity-100`}>
                        <div className='w-full h-full relative z-10 top-0 left-0 right-0 bg-slate-800/50 '>
                            <div className=' relative z-50 opacity-100 flex flex-col justify-center items-center h-full'>
                                <img className='w-20 h-20 rounded-full outline outline-4 outline-slate-500' src={test_4}></img>
                                <p className='text-xl text-white flex flex-col my-3 font-bold text-center'>
                                    Matt Brandon
                                    <span className='text-md my-2 text-lg text-center'>Freelancer</span>
                                </p>
                                <p className='text-center text-white text-lg'><span className='text-4xl font-bold'>"</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br> labore et dolore magna aliqua. Ut enim ad minim veniam,<span className='text-4xl font-bold'>"</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{ height: '450px' }} className={`relative z-0 bg-background2 bg-cover bg-no-repeat bg-fixed opacity-100`}>
                        <div className='w-full h-full relative z-0 top-0 left-0 right-0 bg-slate-800/50 '>
                            <div className='relative z-20 top-0 left-0 opacity-100 flex flex-col justify-center items-center h-full'>
                                <img className='w-20 h-20 rounded-full outline outline-4 outline-slate-500' src={test_5}></img>
                                <p className='text-xl text-white flex flex-col my-3 font-bold text-center'>
                                Jhon Larson
                                    <span className='text-md my-2 text-lg text-center'>Entrepreneur</span>
                                </p>
                                <p className='text-center text-white text-lg'><span className='text-4xl font-bold'>"</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br> labore et dolore magna aliqua. Ut enim ad minim veniam,<span className='text-4xl font-bold'>"</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};