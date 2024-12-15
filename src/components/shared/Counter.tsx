'use client'
import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
    const targetDate = new Date('2024-12-25T00:00:00').getTime(); // Целевая дата
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    }

    return (
            <div className='flex justify-center items-center gap-4 font-coiny motion-blur-in-[50px] motion-duration-[2s]/scale motion-scale-in-[0] motion-duration-[2s]/blur m1:mt-6 sm:mt-8 sm1:mt-5 sm1/5:-mt-9 sm1/8:-mt-9 sm2:-mt-9 md:-mt-9 md2:-mt-5 md3:mt-0'>
                <div className='bg-white rounded-lg m1:px-4 m1:py-2 sm:px-4 sm:py-2 sm1/5:px-4 sm1/5:py-2 sm2:px-4 sm2:py-2 md:px-5 md:py-3 md3:px-7 md3:py-4 text-center custom-motion-preset-pulse'>
                    <span className='m1:text-3xl sm:text-4xl sm1/5:text-5xl font-bold'>{timeLeft.days}</span>
                    <span className='block m1:text-sm sm:text-base font-coiny text-[#C0C5D8]'>Days</span>
                </div>
                <div className='bg-white rounded-lg m1:px-4 m1:py-2 sm:px-4 sm:py-2 sm1/5:px-4 sm1/5:py-2 sm2:px-4 sm2:py-2 md:px-5 md:py-3 md3:px-7 md3:py-4 text-center custom-motion-preset-pulse'>
                    <span className='m1:text-3xl sm:text-4xl  sm1/5:text-5xl font-bold'>{timeLeft.hours}</span>
                    <span className='block m1:text-sm sm:text-base font-coiny text-[#C0C5D8]'>Hours</span>
                </div>
                <div className='bg-white rounded-lg m1:px-2  m1:py-2 sm:px-2 sm:py-2 sm1/5:px-3 sm1/5:py-2 sm2:px-2 sm2:py-2 md:px-3 md:py-3 md3:px-5 md3:py-4 text-center custom-motion-preset-pulse'>
                    <span className='m1:text-3xl sm:text-4xl sm1/5:text-5xl font-bold'>{timeLeft.minutes}</span>
                    <span className='block m1:text-sm sm:text-base font-coiny text-[#C0C5D8]'>Minutes</span>
                </div>
                <div className='bg-white rounded-lg m1:px-2 m1:py-2 sm:px-2 sm:py-2 sm1/5:px-3 sm1/5:py-2 sm2:px-2 sm2:py-2 md:px-3 md:py-3 md3:px-5 md3:py-4 text-center custom-motion-preset-pulse'>
                    <span className='m1:text-3xl sm:text-4xl sm1/5:text-5xl font-bold'>{timeLeft.seconds}</span>
                    <span className='block m1:text-sm sm:text-base font-coiny text-[#C0C5D8]'>Seconds</span>
                </div>
            </div>
    );
};

export default CountdownTimer;