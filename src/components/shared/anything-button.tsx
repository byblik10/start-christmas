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
import { AtSign } from 'lucide-react';
import Image from "next/image";

interface Props {
    className?: string;
};

export const ContactUsButton: React.FC<Props> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant='outline' className='flex h-[60px] w-[170px] max-w-[216px] items-center justify-center rounded-[80px] bg-primary px-5 py-3 text-[20px] uppercase text-white font-modak'>
                        Contact Us
                    </Button>
                </DialogTrigger>
                <DialogContent className='font-coiny m1:max-w-xs sm1:max-w-sm sm2:max-w-md px-4 py-6 flex flex-col items-center'>
                    <DialogHeader className='flex flex-col items-center gap-4'>
                        <DialogTitle className='m1:text-3xl sm2:text-4xl text-center -mb-[10px]'>Contact Us</DialogTitle>
                        <DialogDescription className='m1:text-xl sm2:text-2xl text-center'>
                        Here you can contact us.
                        </DialogDescription>
                        <div className='flex gap-4 m1:flex-col sm1:flex-row -mt-[1px]'> {/* Адаптивный flex */}
                            <Button variant='default' className='font-coiny flex h-[60px] w-[170px] max-w-[216px] items-center justify-center rounded-[80px] bg-primary px-5 py-3 text-[20px] text-white m1:w-[140px] m1:h-[50px] sm1:w-[170px] sm1:h-[60px]'>
                                <AtSign className="w-1 h-1" /> {/* Иконка с фиксированным размером */}
                            </Button>
                            <Button variant='default' className='font-thin font-coiny flex h-[60px] w-[170px] max-w-[216px] items-center justify-center rounded-[80px] bg-primary px-5 py-3 text-[20px] text-white m1:w-[140px] m1:h-[50px] sm1:w-[170px] sm1:h-[60px]'>
                                <Image src='/x-svg.svg' width={19} height={16} alt="" />
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};