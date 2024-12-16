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

export const FqaButton: React.FC<Props> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant='outline' className='flex h-[60px] w-[170px] max-w-[216px] items-center justify-center rounded-[80px] bg-primary px-5 py-3 text-[20px] uppercase text-white font-modak'>
                        FQA
                    </Button>
                </DialogTrigger>
                <DialogContent className='font-coiny m1:max-w-xs sm1:max-w-sm sm2:max-w-xl'>
                    <DialogHeader>
                        <DialogTitle className='m1:text-3xl sm2:text-4xl'>Frequently Asked Questions</DialogTitle>
                        <DialogDescription className='m1:text-xl sm2:text-2xl mt-[2px]'>
                        The giveaway will take place on Christmas and the first morning of the New Year.
                        (KEEP AN EYE ON YOUR WALLET)
                        </DialogDescription>
                        <p className='m1:text-xl sm2:text-xl text-gray-600 mt-[5px]'>
                        REWARDS FOR PROMOTION WILL BE ISSUED BEFORE DECEMBER 25.
                        </p>
                        <p className='m1:text-base sm2:text-lg text-gray-600'>
                        IMPORTANT!
                        </p>
                        <p className='m1:text-lg sm2:text-xl text-gray-600'>
                        You must have a wallet where we can credit the reward.
                        </p>
                        <p className='m1:text-base sm2:text-lg text-gray-600'>
                        We won’t disclose how many tickets you earn for helping with promotion.
                        </p>
                        <p className='m1:text-lg sm2:text-xl text-gray-600'>
                            3. What is a BTC address?
                        </p>
                        <p className='m1:text-base sm2:text-lg text-gray-600'>
                            A BTC address is a unique identifier for your wallet.
                        </p>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};