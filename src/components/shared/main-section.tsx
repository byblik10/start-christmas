import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

export const MainSectionr: React.FC<Props> = ({ className }) => {
    return (
        <section className={cn("bg-[url(/christmas.png)] bg-cover bg-center bg-no-repeat pb-[96] pt-[108px] mw800:bg-top", className)}>
            <div className='relative mx-auto max-w-[600px] text-center mw800:max-w-full mw800:pb-[250px]'>
                {/* Для картинки */}
                <div className='absolute -bottom-[80px] -left-[500px] max-w-[700px] mw1200:-left-[400px] mw800:left-0 mw800:max-w-[500px] mw600:-left-4 mw600:max-w-[400px]'>

                </div>
                {/* Главное содержание */}
                <div className='relative z-[1] px-4'>
                    {/* Большяа надьпись */}
                    <div className='flex items-center justify-center'>

                    </div>
                    {/* Виджет с CA надьписью */}
                    <div className='mx-auto mb-[17px] flex w-fit max-w-[450px] flex-col gap-2 break-words rounded-[22px] border-[3px] border-[#242337] bg-white px-7 py-6'>
                        {/* Header виджета */}
                        <div className='flex w-full items-center justify-between'>
                            <span className='font-golos text-sm font-semibold text-[#C0C5D8]'>
                                TOKEN ADDRESS
                            </span>
                            <div className='flex items-center gap-1'>
                                <span className='cursor-pointer font-golos text-sm font-semibold text-[#C0C5D8]'>
                                    COPY
                                </span>
                                {/* Кнопка в виде иконки, которая меняет свою иконку при нажатии на нее (надо будет добавить useState или ивент) */}
                                <button className='grid size-10 place-items-center mw800:size-[34px]'>

                                </button>
                            </div>
                        </div>
                        {/* CA надпись */}
                        <div className='grid grid-cols-[1fr_auto] items-center gap-4'>
                            <div className='flex flex-col gap-1 break-all'>
                               <p className='break-words mw800:text-lg'>fdsaflkjfalfjl;jflsda</p> 
                            </div>

                        </div>
                    </div>

                    {/* Кнопки с факом, импортом и другими вещами */}
                    <div className='class="block flex flex-row items-center justify-center gap-2 mw800:mt-8 mw800:flex-col"'>
                        <a className='mx-auto flex h-[57px] w-full max-w-[216px] items-center justify-center rounded-[80px] bg-primary px-5 py-3 text-[20px] uppercase text-white mw800:max-w-[95%]' href="">
                            {/* На этом месте можно прикрутить картинку */}
                            <p>IMPORTANT</p>
                        </a>
                        <a className='mx-auto flex h-[57px] w-full max-w-[216px] items-center justify-center rounded-[80px] bg-primary px-5 py-3 text-[20px] uppercase text-white mw800:max-w-[95%]' href="">
                            {/* На этом месте можно прикрутить картинку */}
                            <p>IMPORTANT</p>
                        </a>
                        <a className='mx-auto flex h-[57px] w-full max-w-[216px] items-center justify-center rounded-[80px] bg-primary px-5 py-3 text-[20px] uppercase text-white mw800:max-w-[95%]' href="">
                            {/* На этом месте можно прикрутить картинку */}
                            <p>IMPORTANT</p>
                        </a>
                    </div>
                    {/* Правая картинка */}
                    <div className='absolute -bottom-[120px] -right-[450px] max-w-[450px] mw1200:-right-[320px] mw1024:-right-[300px] mw800:right-0 mw800:max-w-[300px] mw600:-right-16'>

                    </div>
                </div>
            </div>
        </section>
    )
}