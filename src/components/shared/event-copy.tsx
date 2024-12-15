'use client'; // Используем клиентский компонент

import React, { useState } from 'react';
import { Copy, CheckCheck } from 'lucide-react';

interface EventCopyProps {
    textToCopy: string; // Текст, который нужно скопировать
    className?: string;
}

const EventCopy: React.FC<EventCopyProps> = ({ textToCopy, className }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        // Копируем текст в буфер обмена
        navigator.clipboard.writeText(textToCopy).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000); // Сбрасываем состояние через 2 секунды
        });
    };

    return (
        <div className={`flex items-center gap-1 custom-motion-preset-pulse ${className}`}>
            <span
                className='cursor-pointer font-coiny text-sm font-semibold text-[#C0C5D8]'
                onClick={handleCopyClick}
            >
                COPY
            </span>
            <button
                className='grid size-10 place-items-center text-[#C0C5D8]'
                onClick={handleCopyClick}
            >
                {isCopied ? <CheckCheck className='size-5' /> : <Copy className='size-5' />}
            </button>
        </div>
    );
};

export default EventCopy;