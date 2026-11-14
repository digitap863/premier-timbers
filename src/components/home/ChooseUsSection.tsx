import Image from "next/image";
import Link from "next/link";
import { CircleCheck, PhoneCall } from "lucide-react";

const points = [
    "Skilled Workforce",
    "Top Notch Quality",
    "Modern Technology",
    "Professional Approach",
    "Lowest Price Guaranteed"
]

export default function ChooseUsSection() {
    return (
        <section className="bg-white pt-20 max-md:pt-12">
            <div className="grid lg:grid-cols-[47%_53%]">
                {/* LEFT: image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:min-h-[680px] lg:rounded-tr-3xl">
                    <Image
                        src="/home/why.jpg"
                        alt="Smiling worker in a hard hat and safety vest in a timber warehouse"
                        fill
                        sizes="(min-width: 1024px) 47vw, 100vw"
                        className="object-cover object-right"
                    />
                </div>

                {/* RIGHT: content */}
                <div className="flex flex-col justify-center px-5 py-12 sm:px-8 lg:px-24 lg:py-16 max-md:py-10">
                    <p className="text-lg font-heading uppercase tracking-wide text-[#384B38] max-md:text-sm">
                        Choose Us
                    </p>

                    <h2 className="mt-4 max-w-[640px] text-4xl font-heading leading-[1.05] tracking-tight text-black sm:text-5xl xl:text-[50px] max-sm:text-[30px] max-sm:leading-[1.15]">
                        Quality Timber<br /> at the Lowest<br /> Possible Price
                    </h2>

                    <p className="mt-4 max-w-[670px] text-base leading-[21px] text-[#7a7a7a] font-sans max-md:leading-6">
                        Premier Timbers is a noted importer, exporter, trader and supplier of international quality timbers. We keep bulk stock of local and imported woods for home and industrial use, and direct purchasing lets us assure you the lowest possible price.
                    </p>

                    {/* Checklist */}
                    <ul className="mt-6 max-w-[670px]">
                        {points.map((point) => (
                            <li
                                key={point}
                                className="flex items-center gap-3 font-heading border-b border-neutral-100 py-2.25 text-lg text-black last:border-b-0 max-md:py-2 max-md:text-base"
                            >
                                <CircleCheck
                                    className="h-[18px] w-[18px] shrink-0 fill-[#384B38] text-white"
                                    strokeWidth={2}
                                />
                                {point}
                            </li>
                        ))}
                    </ul>

                    {/* CTA row */}
                    <div className="mt-12 flex flex-wrap items-center gap-8 max-md:mt-8 max-md:gap-3">
                        <Link
                            href={"#"}
                            className="inline-flex items-center gap-3 rounded-md border border-white bg-[#384b38] px-8 py-4 text-sm font-medium font-heading text-white shadow-lg  max-md:justify-center max-md:whitespace-nowrap max-md:px-4 max-md:py-3 max-md:text-xs"
                        >
                            DISCOVER MORE
                        </Link>

                        <div className="flex items-center gap-4 max-md:gap-2">
                            <div className="h-14 w-14 bg-[#384b38] rounded-full flex justify-center items-center max-md:h-10 max-md:w-10 max-md:shrink-0"><PhoneCall className="h-6 w-6 text-white max-md:h-5 max-md:w-5" /></div>
                            <span className="text-lg max-md:text-sm">Call The Branch<br /><span className="text-xl text-[#384B38] max-md:text-[15px]">+917736736728</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}