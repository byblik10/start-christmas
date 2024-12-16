'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ChristmasHatProps {
    initialWidth?: number;
    originalWidth: number;
    originalHeight: number;
    className?: string;
}

const ChristmasHat: React.FC<ChristmasHatProps> = ({
    initialWidth = 200,
    originalWidth,
    originalHeight,
    className,
}) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [imageWidth, setImageWidth] = useState(initialWidth);

    // Вычисление высоты на основе пропорций
    const imageHeight = (imageWidth / originalWidth) * originalHeight;

    return (
        <div className={`relative motion-translate-x-in-[1%] ${className}`}>
            <Image
                src='/christmas-hat.png'
                alt='Christmas Hat'
                width={imageWidth}
                height={imageHeight}
                className='object-contain motion-scale-in-[0.1] motion-translate-x-in-[-200%] motion-translate-y-in-[-400%] 
                motion-opacity-in-[0%] motion-rotate-in-[100deg] motion-duration-[1.50s] motion-duration-[0.89s]/opacity motion-ease-spring-smooth'
            />
        </div>
    );
};

export default ChristmasHat;