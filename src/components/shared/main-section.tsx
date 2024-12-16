import React from 'react';
import { cn } from '@/lib/utils';
import CountdownTimer from './Counter';
import ChristmasHat from './christmas-hat';
import EventCopy from './event-copy';
import { ImportantButton } from './important-button';
import { FqaButton } from './fqa-button';
import { ContactUsButton } from './anything-button';

interface Props {
    className?: string;
}

export const MainSection: React.FC<Props> = ({ className }) => {
    const btcAddress = 'bc1qf9s08jxv68xrvhz5g4yxth6jkgxfnjy5vn26fg';

    return (
        <section className={cn("bg-[url(/christmas.png)] bg-cover bg-center bg-no-repeat pb-[96] pt-[108px] w-full h-screen", className)}>
                <div className='relative m1:mt-[30px] md:mt-20'>
                    <div className='flex flex-col items-center justify-center s:text-[80px] m1:text-[60px] sm:text-[70px] sm1:text-[80px] sm1/5:text-[90px] sm2:text-[100px] md:text-[110px] md2:text-[120px] md3:text-[150px] leading-[0.90] font-modak text-center text-white text-shadow-outline m1:h-[50px] m1:min-h-[50px] sm1:h-[80px] sm1:min-h-[80px] sm1/5:h-[200px] sm1/5:min-h-[200px]'>
                        <div className='motion-blur-in-[50px] motion-duration-[2s] motion-scale-in-[0] motion-delay-[0.2s]'>
                        <div>CHRISTMAS</div>
                        <span>BTC</span>
                        </div>
                        <ChristmasHat
                            initialWidth={130}
                            originalWidth={273}
                            originalHeight={397}
                            className='absolute md3:top-[-180px] md3:-left-[114px] custom-motion-preset-stretch motion-delay-[2s]
                            md3:w-[130px] md2:w-[100px] md2:top-[-140px] md2:-left-[90px]
                            md:w-[95px] md:top-[-130px] md:-left-[83px]
                            sm2:w-[85px] sm2:top-[-120px] sm2:-left-[76px]
                            sm1/5:w-[75px] sm1/5:top-[-107px] sm1/5:-left-[68px]
                            sm1:w-[65px] sm1:top-[-95px] sm1:-left-[60px]
                            sm:w-[55px] sm:top-[-80px] sm:-left-[52px]
                            m1:w-[48px] m1:top-[-70px] m1:-left-[45px]'
                        />
                    </div>

                    {/* Таймер обратного отсчёта */}
                    <CountdownTimer />

                    {/* Виджет с CA надписью */}
                    <div className='mx-auto mt-6 flex m1:w-[350px] sm:w-[400px] sm2:w-[480px] md:w-[520px] md2:w-[540px] md3:w-[640px] flex-col break-words rounded-[22px] border-[3px] border-[#242337] bg-white px-7 -pt-[1px] pb-2 motion-blur-in-[50px] motion-duration-[2s] motion-scale-in-[0] motion-delay-[0.2s] '>
                        {/* Header виджета */}
                        <div className='flex w-full items-center justify-between -mb-2'>
                            <span className='font-coiny text-sm font-semibold text-[#C0C5D8]'>
                                BTC ADDRESS
                            </span>
                            <EventCopy textToCopy={btcAddress} />
                        </div>
                        <div className='grid grid-cols-[1fr_auto] items-center'>
                            <div className='flex flex-col break-all'>
                                <p className='break-words m1:text-lg md3:text-[23px] font-coiny font-bold'>{btcAddress}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex m1:flex-col sm1/8:flex-row items-center justify-center gap-4 mt-6 motion-blur-in-[50px] motion-duration-[2s] motion-scale-in-[0] motion-delay-[0.2s]'>
                        <FqaButton className='sm1/8:order-1 m1:order-3' />
                        <ImportantButton className='sm1/8:order-2 m1:order-1'/>
                        <ContactUsButton className='sm1/8:order-3 m1:order-2'/>
                    </div>
                </div>
        </section>
    )
}