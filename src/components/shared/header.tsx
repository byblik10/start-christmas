import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
            <div className={cn("fixed top-6 z-10 w-full mw425:top-[30px]", className)}>
                <div className='mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-4 mw425:justify-center'>
                    <div className='flex items-center gap-3 rounded-[64px] border-[3px] border-[#242337] bg-white py-[6px] pl-[10px] pr-4'>
                        <span className='text-lg uppercase'>CHRISTMAX BTC</span>
                    </div>
                    <div className='flex items-center gap-3 mw425:hidden'>
                        <a className='grid size-10 place-items-center rounded-full bg-primary' href="">

                        </a>
                        <a className='grid size-10 place-items-center rounded-full bg-primary' href="">

                        </a>

                    </div>
                </div>
            </div>

    )
}