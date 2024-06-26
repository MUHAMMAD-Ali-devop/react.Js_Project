import React from "react";
import { PricingCards } from "./PricingCards";
export const Pricing = ()=>{
    const cardContent = [
        {
            deal:'Free',
            money:'0'
        },
        {
            deal:'Bussiness',
            money:'19'
        },
        {
            deal:'Developer',
            money:'29'
        },
        {
            deal:'Ultimate',
            money:'49'
        }
    ]
    return(
        <>
        <div className="p-16">
            <div className="flex flex-col items-center mt-20">
                <p className="py-1 px-4 border-2 text-sm font-bold text-blue-700 rounded-full bg-gray-200">PRICING</p>
                <p className="text-3xl font-bold my-4">Check our <span className="text-blue-700">Pricing</span></p>
                <p className="text-center font-semibold text-lg text-slate-700 mb-8">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est<br></br> adipisci expedita at voluptas atque vitae autem.</p>
            </div>
            <div className="py-10 grid lg:gap-x-8 lg:grid-cols-4 md:gap-4 md:grid-cols-2 gap-4">
                {
                    cardContent.map(content=>(
                        <PricingCards
                        Deal = {content.deal}
                        Money = {content.money}
                        />
                    ))
                }
            </div>
        </div>
        </>
    );
}