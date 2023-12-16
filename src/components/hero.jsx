import React, { useState } from 'react';

function Hero()  {
    const [startValue, setStartValue] = useState(0);

    const Increment = () => {
        setStartValue(startValue + 1);
    };

    const Decrement = () => {
        if (startValue > 0) {
            setStartValue(startValue - 1);
        }
    };

    const Reset = () => {
        setStartValue(0);
    };


    return (
        <div>
            <div id="value" style={{ color: startValue == 10 ? "red" : "" }} class="text-9xl text-center mt-40">
                {startValue}
            </div>
            <button id="increment" onClick={Increment} class="hover:bg-orange-500 border-2 border-orange-500 text-orange-500 text-[30px] p-4 hover:text-white font-bold mr-2 rounded-[8px] mt-5 ml-[760px] ">
                +
            </button>
            <button id="decrement" onClick={Decrement} class="hover:bg-orange-500 border-2 border-orange-500 text-orange-500 text-[30px] p-4 hover:text-white font-bold mr-2 rounded-[8px] mt-5 ">
                -
            </button>
            <button id="reset" onClick={Reset} class="hover:bg-orange-500 border-2 border-orange-500 text-orange-500 text-[30px] p-4 hover:text-white font-bold mr-2 rounded-[8px] mt-5 ">
                x
            </button>

        </div>
    );
};

export default Hero;
