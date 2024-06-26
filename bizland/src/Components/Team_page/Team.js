import React from "react";
import team_1 from '../../Assets/team/team_1.jpg';
import team_2 from '../../Assets/team/team_2.jpg';
import team_3 from '../../Assets/team/team_3.jpg';
import team_4 from '../../Assets/team/Team_4.jpg';
import { TeamImg } from "./TeamImg";

export const Team = () => {
    const teamMember = [
        {
            img: team_1,
            member: 'Walter White',
            profession: 'Chief Executive Officer'
        },
        {
            img: team_2,
            member: 'Sarah Jhonson',
            profession: 'Product Manager'
        },
        {
            img: team_3,
            member: 'William Anderson',
            profession: 'CTO'
        },
        {
            img: team_4,
            member: 'Amanda Jepson',
            profession: 'Accountant'
        }
    ];
    return (
        <>
            <div className="p-16 bg-slate-50 mt-20">
                <div className="flex flex-col items-center">
                    <p className="py-1 px-4 border-2 text-sm font-bold text-blue-700 rounded-full bg-gray-200">TEAM</p>
                    <p className="text-3xl font-bold my-4">Our Hardworking <span className="text-blue-700">Team</span></p>
                    <p className="text-center font-semibold text-lg text-slate-700 mb-8">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est<br></br> adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <div className="grid lg:gap-x-6 lg:grid-cols-4 md:gap-6 md:grid-cols-2 grid-cols-1 gap-6">
                    {
                        teamMember.map(
                            data => (
                                <TeamImg
                                    Img={data.img}
                                    Name={data.member}
                                    Workas={data.profession}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
}