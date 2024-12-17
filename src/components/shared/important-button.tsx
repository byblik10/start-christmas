"use client"

import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface Props {
    className?: string;
};

export const ImportantButton: React.FC<Props> = ({ className }) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    // Функция для копирования email в буфер обмена
    const copyEmailToClipboard = () => {
        const email = "confirmation@btchristmas.com";
        navigator.clipboard.writeText(email).then(() => {
            console.log("Email copied to clipboard:", email);
        }).catch((error) => {
            console.error("Failed to copy email to clipboard:", error);
        });
    };

    // Функция для закрытия Popover через 2 секунды
    const handlePopoverTrigger = () => {
        setIsPopoverOpen(true);
        copyEmailToClipboard(); // Копируем email при открытии Popover
        setTimeout(() => {
            setIsPopoverOpen(false);
        }, 2000);
    };

    return (
        <div className={`${className}`}>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant='outline' className='flex h-[70px] w-[190px] max-w-[216px] items-center justify-center rounded-[80px] bg-[#FF0000] px-5 py-3 text-[25px] uppercase text-white font-modak custom-motion-preset-pulse'>
                        Important
                    </Button>
                </DialogTrigger>
                <DialogContent className='font-coiny m1:max-w-xs sm1:max-w-sm sm2:max-w-xl'>
                    <DialogHeader>
                        <DialogTitle className='m1:text-3xl sm2:text-4xl'>Important Information</DialogTitle>
                        <DialogDescription className='m1:text-xl sm2:text-2xl mt-[2px]'>
                            Follow all the points!
                        </DialogDescription>
                        <p className='m1:text-xl sm2:text-xl mt-[5px]'>
                            1. STEP
                        </p>
                        <p className='m1:text-base sm2:text-lg'>
                            BE SURE YOU <span className='text-red-500'>SAND BTC</span>
                        </p>
                        <p className='m1:text-xl sm2:text-xl'>
                            2. STEP
                        </p>
                        <p className='m1:text-base sm2:text-lg'>
                            <span className='text-red-500'>MAKE SCREENSHOT</span> OF YOUR TRANSACTION
                        </p>
                        <p className='m1:text-xl sm2:text-xl'>
                            3. STEP
                        </p>
                        <p className='m1:text-base sm2:text-lg'>
                            OPEN YOUR <span className='text-red-500'>EMAIL</span>
                        </p>
                        <p className='m1:text-xl sm2:text-xl'>
                            4. STEP
                        </p>
                        <p className='m1:text-base sm2:text-lg'>
                            <span className='text-red-500'>SEND</span> SCREENSHOT OF YOUR TRANSACTION AND
                            YOUR BTC ADRESS <span className='text-red-500'>TO OUR</span>
                            <span> </span>
                            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                                <PopoverTrigger onClick={handlePopoverTrigger}>
                                    <span className='underline decoration-solid decoration-black text-red-500 cursor-pointer' style={{ textDecorationThickness: '2px' }}>
                                        EMAIL
                                    </span>
                                </PopoverTrigger>
                                <PopoverContent>Copied</PopoverContent>
                            </Popover>
                        </p>
                        <p className='m1:text-xl sm2:text-xl'>
                            5. STEP
                        </p>
                        <p className='m1:text-base sm2:text-lg'>
                            <span className='text-red-500'>WAIT</span> TILL 25 OF DECEMBER <span className='text-red-500'>FOR CHRISTMAS MIRACLE</span>
                        </p>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};