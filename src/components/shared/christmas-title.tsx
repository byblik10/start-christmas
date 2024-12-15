import React from 'react';
import ChristmasHat from './christmas-hat';

interface ChristmasTitleProps {
    className?: string;
}

const ChristmasTitle: React.FC<ChristmasTitleProps> = ({ className }) => {
    return (
        <div className={`flex flex-col items-center justify-center text-[150px] leading-[0.90] font-modak text-center text-white text-shadow-outline h-[200px] min-h-[200px] ${className}`}>
            <div className='animate-none'>CHRISTMAS</div>
            <span className='animate-none'>BTC</span>
            {/* Картинка шапки Деда Мороза */}
            <ChristmasHat
                initialWidth={115} // Начальная ширина
                originalWidth={273} // Исходная ширина
                originalHeight={397} // Исходная высота
                className='absolute top-[-175px] -left-[114px]'
            />
        </div>
    );
};

export default ChristmasTitle;