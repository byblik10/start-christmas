import { cn } from '@/lib/utils';
import React from 'react';
import Image from "next/image";
interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
            <div className={cn("fixed top-6 z-10 w-full motion-blur-in-[50px] motion-duration-[2s] motion-scale-in-[0] motion-delay-[0.2s]" , className)}>
                <div className='mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-4'>
                    <div className='flex items-center gap-3 rounded-[64px] border-[3px] border-[#242337] bg-white py-[6px] pl-[10px] pr-4'>
                        <span className='text-lg uppercase'>CHRISTMAX BTC</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <a className='grid size-10 place-items-center rounded-full bg-primary' href="">
                            <Image src='/x-svg.svg' width={19} height={16} alt="" />
                        </a>
                        <a className='grid size-10 place-items-center rounded-full bg-primary' href="">
                        <Image src='/telegram-svg.svg' width={19} height={16} alt="" />
                        </a>

                    </div>
                </div>
            </div>

    )
}