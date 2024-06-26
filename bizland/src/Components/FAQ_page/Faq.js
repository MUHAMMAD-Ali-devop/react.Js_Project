import { Collapse } from 'antd';
const { Panel } = Collapse;

function AppFAQ() {
    return (
        <div className=' faqPage py-16 border-2 bg-slate-100 flex flex-col place-items-center'>
            <div className='flex flex-col items-center '>
                <p className='py-1 px-4 border-2 text-sm font-bold text-blue-700 rounded-full '>F.A.Q</p>
                <p className='text-3xl font-bold my-4'>Frequently Asked <span className='text-blue-700'>Questions</span></p>
                <p className='text-center font-semibold text-lg text-slate-700 mb-8'>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est<br></br> adipisci expedita at voluptas atque vitae autem.</p>
            </div>
            <div className='container lg:px-16'>
                <Collapse accordion defaultActiveKey={['']}>
                    <Panel  header="Non consectetur a erat nam at lectus urna duis?" key="1">
                        <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                    </Panel>
                    <Panel  header="Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?" key="2">
                        <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </Panel>
                    <Panel  header="Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?" key="3">
                        <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                    </Panel>
                    <Panel  header="Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?" key="4">
                        <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </Panel>
                    <Panel  header="Tempus quam pellentesque nec nam aliquam sem et tortor consequat?" key="5">
                        <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                    </Panel>
                    <Panel  header="Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?" key="6">
                        <p>Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
}
export default AppFAQ;






// import React from "react";
// import { FaqDropdown } from "./FaqDropdown";
// export const Faq = () => {
// const askQuestions = [
//     {
//         id:1,
//         qst: 'Non consectetur a erat nam at lectus urna duis?',
//         ans: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
//     },
//     {
//         id:2,
//         qst: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
//         ans: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
//     },
//     {
//         id:3,
//         qst: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?',
//         ans: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis'
//     },
//     {
//         id:4,
//         qst: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
//         ans: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
//     },
//     {
//         id:5,
//         qst: 'Tempus quam pellentesque nec nam aliquam sem et tortor consequat?',
//         ans: 'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in'
//     },
//     {
//         id:6,
//         qst: 'Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?',
//         ans: 'Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.'
//     },
// ]
// return (

// import App from "../../App";

//     <>
{/* <div className="py-16 border-2 bg-slate-100">
                <div className='flex flex-col items-center '>
                    <p className='py-1 px-4 border-2 text-sm font-bold text-blue-700 rounded-full '>F.A.Q</p>
                    <p className='text-3xl font-bold my-4'>Frequently Asked <span className='text-blue-700'>Questions</span></p>
                    <p className='text-center font-semibold text-lg text-slate-700 mb-8'>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est<br></br> adipisci expedita at voluptas atque vitae autem.</p>
                </div> */}
{/* {
                    askQuestions.map(data => (
                        <FaqDropdown
                            QS={data.qst}
                            ANS={data.ans}
                            index={data.id}
                        />
                    )
                    )
                } */}
//             </div>
//         </>
//     );
// }

// export default App;







