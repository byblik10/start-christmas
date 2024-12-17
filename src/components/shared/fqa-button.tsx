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

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

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
                        Here are some common questions and answers.
                        </DialogDescription>
                        <Accordion type="single" collapsible className='m1:text-xl sm2:text-xl'>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is BITCOIN Christmas?</AccordionTrigger>
                                <AccordionContent>
                                BITCOIN Christmas is a unique crypto project that celebrates Christmas and the New Year by distributing rewards and hosting special giveaways for the community.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>How can I earn rewards for promoting the project?</AccordionTrigger>
                                <AccordionContent>
                                You can earn rewards and special tickets for helping to promote BITCOIN Christmas on social media. However, the number of tickets you earn will not be disclosed.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>When will the rewards be distributed?</AccordionTrigger>
                                <AccordionContent>
                                December 25th — on Christmas Day.
                                <br />
                                The morning of January 1st — on New Year’s Day.
                                Make sure to check your wallet on these dates!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>What do I need to receive a reward?</AccordionTrigger>
                                <AccordionContent>
                                You must have an active crypto wallet where we can credit your reward.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>How will I know if I received a reward?</AccordionTrigger>
                                <AccordionContent>
                                Keep an eye on your wallet! The giveaway will take place on Christmas and New Year’s Day, while rewards for promotion will be issued before December 25th.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};