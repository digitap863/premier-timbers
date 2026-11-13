"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ArrowUp } from "lucide-react";
import { FaPlay } from "react-icons/fa";

type Faq = { question: string; answer: string };

const answer =
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast";

const leftFaqs: Faq[] = [
    {
        question: "What services does Premier Timbers offer?",
        answer:
            "We offer timber seasoning, wood treatment, sawmilling, carpentry and joinery, planing, and finger jointing, all under one roof.",
    },
    {
        question: "Do you supply both local and imported timber?",
        answer:
            "Yes. We keep bulk stock of local and imported woods for both home and industrial use, so you can usually get what you need without a long wait.",
    },
    {
        question: "Can you guarantee the lowest price?",
        answer:
            "Because we import directly, we cut out middlemen and can offer the lowest possible price across a wide variety of woods, without compromising on quality.",
    },
];

const rightFaqs: Faq[] = [
    {
        question: "Why is seasoned timber better?",
        answer:
            "Seasoning removes moisture from the wood, which makes it stronger and more durable and helps prevent twisting and warping after it is used.",
    },
    {
        question: "Do you take custom joinery and carpentry projects?",
        answer:
            "Yes. Our bespoke services range from simple joinery repairs to fully fitted offices and home kitchens.",
    },
    {
        question: "Do you serve homes as well as businesses?",
        answer:
            "Yes. We have been serving homes and businesses across the state, and we also export timber to customers abroad.",
    },
];

function FaqColumn({ items, defaultOpen }: { items: Faq[]; defaultOpen: number }) {
    const [open, setOpen] = useState<number | null>(defaultOpen);

    return (
        <div>
            {items.map((item, i) => {
                const isOpen = open === i;
                return (
                    <div key={item.question} className="border-b border-white/80">
                        <button
                            type="button"
                            onClick={() => setOpen(isOpen ? null : i)}
                            aria-expanded={isOpen}
                            className="flex w-full items-center font-heading justify-between gap-4 px-3 py-[22px] text-left text-xl text-white"
                        >
                            <span>{item.question}</span>
                            {isOpen ? (
                                <ArrowUp className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                            ) : (
                                <ChevronDown className="h-5 w-5 shrink-0" strokeWidth={1.5} />
                            )}
                        </button>

                        <div
                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <p className="px-6 pb-8 pt-1 text-[16px] leading-[19px] font-sans text-white">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function FaqSection() {
    return (
        <section className="relative bg-white mt-20">
            {/* Green background starts partway down the video */}
            <div className="absolute inset-x-0 bottom-0 top-[150px] bg-[#384B38]" />

            <div className="relative mx-auto max-w-[1500px] px-5 py-2 sm:px-10">
                {/* Video banner */}
                <div className="relative aspect-[1200/342] min-h-[200px] w-full overflow-hidden rounded-xl">
                    <Image
                        src="/home/vid.jpg"
                        alt="Autumn forest path with stacked logs"
                        fill
                        sizes="(min-width: 1240px) 1200px, 100vw"
                        className="object-cover"
                        priority
                    />
                    <button
                        type="button"
                        aria-label="Play video"
                        className="absolute left-1/2 top-1/2 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#384B38] text-white transition-transform hover:scale-105"
                    >
                        <FaPlay className="ml-1 h-7 w-7" />
                    </button>
                </div>

                {/* FAQ columns */}
                <div className="mt-20 grid gap-x-10 pb-16 md:grid-cols-2">
                    <FaqColumn items={leftFaqs} defaultOpen={2} />
                    <FaqColumn items={rightFaqs} defaultOpen={0} />
                </div>
            </div>
        </section>
    );
}