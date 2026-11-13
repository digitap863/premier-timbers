import {
    Phone,
    PhoneCall,
} from "lucide-react";


import Image from "next/image";
import Link from "next/link";

const services = [
    { title: "Wood Seasoning", icon: "/home/icon1.png", description: "Premier Timbers dries wood to remove moisture, giving you strong, durable, high-quality timber." },
    { title: "Wood Treatment", icon: "/home/icon3.png", description: "At Premier Timbers, we use professional methods to protect and preserve timber from damage." },
    { title: "Saw Mill", icon: "/home/icon2.png", description: "Our modern sawmills and skilled workers cut logs to size for maximum yield." },
    { title: "Carpentery/Joinery", icon: "/home/icon4.png", description: "Our bespoke joinery and carpentry services range from simple repairs to fully fitted offices and kitchens." },
];



function Banner() {
    return (
        <section className="relative isolate min-h-screen">
            {/* Background: full-screen on desktop, image block on top for mobile */}
            <div className="absolute inset-0 max-md:relative max-md:inset-auto max-md:h-[340px] max-md:w-full">
                <div className="inset-0 bg-black/40 absolute z-10"></div>
                <Image src={"/home/banner1.jpg"} fill alt="Banner" className="" />
            </div>

            {/* Main content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col px-5 pb-8 pt-24 sm:px-8 sm:pt-60 max-md:min-h-0 max-md:-mt-12 max-md:pb-0 max-md:pt-0">
                {/* Hero copy */}
                <div className="relative z-10">
                    <div className="mb-3 flex items-center gap-1.5 text-white/75">
                        <span className="text-[18px] uppercase tracking-wide font-heading max-md:text-[11px]">
                            WOOD PRUDCTION
                        </span>
                    </div>

                    <h1 className="text-3xl  leading-19 font-heading tracking-tight text-white sm:text-[76px] max-md:text-[28px] ">
                        Undisputed leaders in
                        timber<br /> manufacturing
                        and trading</h1>

                    <p className="mt-3 max-w-[700px] font-sans text-[11px] leading-[1.45] text-white/75 sm:text-base max-md:text-[11px]">
                        We&apos;re an ISO 9001:2015 certified company based in Kerala involved into sales and manufacture of timbers and plywood since six decade
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-5 flex flex-wrap items-center gap-8 max-md:flex-col max-md:items-stretch">
                        <Link
                            href={"#"}
                            className="inline-flex items-center gap-3 rounded-md border border-white bg-[#384b38] px-8 py-4 text-sm font-medium font-heading text-white shadow-lg  max-md:justify-center max-md:text-xs"
                        >
                            DISCOVER MORE
                        </Link>

                        <a
                            href={`tel:#`}
                            className="inline-flex items-center gap-3  text-xl font-heading font-medium text-white transition  max-md:justify-center max-md:text-xs"
                        >
                            <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center"><PhoneCall className="h-6 w-6 text-black/40" /></div>
                            <span>Call The Branch<br />+919847044288</span>
                        </a>
                    </div>
                </div>

                {/* Service cards: absolute on desktop, in-flow (overlapping the next section) on mobile */}
                <div className="absolute inset-x-5 -bottom-38 z-0 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/30 bg-[#384B38] shadow-xl sm:inset-x-8 sm:grid-cols-2 md:inset-x-12 md:grid-cols-4 max-md:relative max-md:inset-x-0 max-md:bottom-0 max-md:z-10 max-md:mt-8 max-md:-mb-20">
                    {services.map((service, index) => {
                        return (
                            <div
                                key={service.title}
                                className={`relative flex flex-col p-5 sm:p-6 max-md:min-h-[140px] max-md:p-4 max-md:pb-10`}
                            >
                                <div className="flex flex-1 flex-col items-center text-center">
                                    {/* Icon */}
                                    <Image
                                        src={service.icon}
                                        alt=""
                                        aria-hidden="true"
                                        width={76}
                                        height={76}
                                        className="h-19 w-19 object-contain max-md:h-14 max-md:w-16"
                                    />

                                    {/* Title */}
                                    <h3 className="mt-4 text-[24px] font-heading font-medium leading-tight tracking-tight text-white max-md:mt-5 max-md:text-xl">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-4 font-sans max-w-[380px] text-[16px] leading-[20px] text-white max-md:mt-2 max-md:text-sm max-md:leading-5">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Banner;