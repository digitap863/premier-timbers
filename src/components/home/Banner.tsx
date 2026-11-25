import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
    { title: "Wood Seasoning", icon: "/home/i1.png", description: "Premier Timbers dries wood to remove moisture, giving you strong, durable, high-quality timber." },
    { title: "Wood Treatment", icon: "/home/i2.png", description: "At Premier Timbers, we use professional methods to protect and preserve timber from damage." },
    { title: "Saw Mill", icon: "/home/i3.png", description: "Our modern sawmills and skilled workers cut logs to size for maximum yield." },
    { title: "Carpentery/Joinery", icon: "/home/i4.png", description: "Our bespoke joinery and carpentry services range from simple repairs to fully fitted offices and kitchens." },
];

function Banner() {
    return (
        <section className="relative isolate min-h-screen max-md:min-h-0">
            {/* Desktop background (full-screen) - hidden on mobile */}
            <div className="absolute inset-0 max-md:hidden">
                <div className="inset-0 bg-black/55 absolute z-10"></div>
                <Image src={"/home/banner1.jpg"} fill alt="Banner" className="" />
            </div>

            {/* Main content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col px-5 pb-8 pt-24 sm:px-8 sm:pt-60 max-md:min-h-0 max-md:pb-0 max-md:pt-28">
                {/* Hero copy */}
                <div className="relative z-10 max-md:flex max-md:min-h-[70vh] max-md:flex-col max-md:justify-center max-md:py-12 max-md:text-center">
                    {/* Mobile background: covers only the hero copy, so the cards sit below it */}
                    <div className="absolute -inset-x-5 -top-28 bottom-0 -z-10 sm:-inset-x-8 md:hidden">
                        <div className="absolute inset-0 z-10 bg-black/55"></div>
                        <Image
                            src={"/home/banner1.jpg"}
                            fill
                            alt=""
                            aria-hidden="true"
                            className="object-cover"
                        />
                    </div>

                    <div className="mb-3 flex items-center gap-1.5 text-white/75 max-md:justify-center">
                        <span className="text-[18px] italic tracking-wide font-heading max-md:text-xs">
                            Wood Manufacturers and Distributors
                        </span>
                    </div>

                    <h1 className="text-3xl  leading-19 font-heading tracking-tight text-white sm:text-[76px] max-md:text-[28px] max-md:leading-[1.15]">
                        Premier Timbers
                    </h1>
                    <h2 className="mt-3 text-[28px] font-heading leading-[1.15] tracking-tight text-white sm:text-[30px] max-md:mt-2 max-md:text-[22px]">
                         Premium Lumber | Precision Milled | The Sustainable Choice
                    </h2>

                    <p className="mt-3 max-w-[700px] font-sans text-[11px] leading-[1.45] text-white/75 sm:text-base max-md:text-sm max-md:leading-6 max-md:text-white/85">
                        An ISO 9001:2015 certified enterprise based in Kerala, manufacturing and directly importing premium timber and plywood since 1956
                    </p>

                    {/* CTA buttons */}
                    {/* CTA buttons */}
                    <div className="mt-5 flex flex-wrap items-center gap-8 max-md:mt-6 max-md:flex-nowrap max-md:justify-center max-md:gap-3">
                        <Link
                            href={"#"}
                            className="inline-flex items-center gap-3 rounded-md border border-white bg-[#384b38] px-8 py-4 text-sm font-medium font-heading text-white shadow-lg max-md:shrink-0 max-md:justify-center max-md:whitespace-nowrap max-md:px-4 max-md:py-3 max-md:text-xs"
                        >
                            DISCOVER MORE
                        </Link>

                        <a
                            href="tel:+917736736728"
                            className="inline-flex items-center gap-3  text-xl font-heading font-medium text-white transition  max-md:gap-2 max-md:text-xs"
                        >
                            <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center max-md:h-9 max-md:w-9 max-md:shrink-0"><PhoneCall className="h-6 w-6 text-black/40 max-md:h-4 max-md:w-4" /></div>
                            <span className="max-md:text-left">Call The Branch<br />+91 7736736728</span>
                        </a>
                    </div>
                </div>

                {/* Service cards: absolute on desktop, below the banner on mobile */}
                <div className="absolute inset-x-5 -bottom-38 z-0 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/30 bg-[#384B38] shadow-xl sm:inset-x-8 sm:grid-cols-2 md:inset-x-12 md:grid-cols-4 max-md:relative max-md:inset-x-0 max-md:bottom-0 max-md:z-10 max-md:mt-6 max-md:mb-8">
                    {services.map((service) => {
                        return (
                            <div
                                key={service.title}
                                className={`relative flex flex-col p-5 sm:p-6 max-md:min-h-[140px] max-md:p-4 max-md:pb-6`}
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
                                    <h3 className="mt-4 text-[24px] font-heading font-medium leading-tight tracking-tight text-white max-md:mt-3 max-md:break-words max-md:text-base">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-4 font-sans max-w-[380px] text-[16px] leading-[20px] text-white max-md:mt-2 max-md:text-xs max-md:leading-[18px]">
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