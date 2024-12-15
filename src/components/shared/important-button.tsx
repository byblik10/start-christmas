import React from 'react';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
    className?: string;
};

export const ImportantButton: React.FC<Props> = ({ className }) => {
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
                        <p className='m1:text-xl sm2:text-xl text-gray-600 mt-[5px]'>
                            1. STEP
                        </p>
                        <p className='m1:text-base sm2:text-lg text-gray-600'>
                            Bitcoin was created in 2009 by an unknown person using the alias Satoshi Nakamoto.
                        </p>
                        <p className='m1:text-xl sm2:text-xl text-gray-600'>
                            2. STEP
                        </p>
                        <p className='m1:text-base sm2:text-lg text-gray-600'>
                            The first Bitcoin transaction was a pizza purchase worth 10,000 BTC.
                        </p>
                        <p className='m1:text-xl sm2:text-xl text-gray-600'>
                            3. STEP
                        </p>
                        <p className='m1:text-base sm2:text-lg text-gray-600'>
                            Bitcoin was created in 2009 by an unknown person using the alias Satoshi Nakamoto.
                        </p>
                        <p className='m1:text-xl sm2:text-xl text-gray-600'>
                            4. STEP
                        </p>
                        <p className='m1:text-base sm2:text-lg text-gray-600'>
                            The first Bitcoin transaction was a pizza purchase worth 10,000 BTC.
                        </p>
                        <p className='m1:text-xl sm2:text-xl text-gray-600'>
                            5. STEP
                        </p>
                        <p className='m1:text-base sm2:text-lg text-gray-600'>
                            The first Bitcoin transaction was a pizza purchase worth 10,000 BTC.
                        </p>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};