import React from "react";

export const PricingCards = (props) => {
    const deal = props.Deal;
    const money = props.Money;
    return (
        <>
            <div className="rounded-md shadow-md">
                <div className="flex justify-center border-2 py-3 bg-gray-50 rounded-sm">
                    <p className=" text-lg font-bold text-slate-600">{deal}</p>
                </div>
                <div className="flex flex-col items-center py-8">
                    <div className="flex pb-4"><p className="text-4xl text-blue-700 font-bold"><span className="text-lg">$</span>{money}</p><p className="flex items-end text-lg text-gray-400">/month</p></div>
                    <p className="py-1">Aida dere</p>
                    <p className="py-1">Nec feugiat nisl</p>
                    <p className="py-1">Nulla at volutpat dola</p>
                    <p className="py-1">Pharetra massa</p>
                    <p className="py-1">Massa ultricies mi</p>
                </div>
                <div className=" flex justify-center rounded-md py-4 bg-gray-50">
                    <button className="border-2 font-bold py-2 px-6 bg-blue-700 text-white rounded-md hover:bg-blue-600">Buy Now</button>
                </div>
            </div>
        </>
    );
}