import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

const stats = [
    { value: "60+", label: "Years of Experience" },
    { value: "1.5M", label: "Cubic Metres of Log" },
    { value: "1.2M", label: "Made of wood" },
];

type AboutProp = {
    isPadding: boolean;
}
export default function AboutSection({ isPadding }: AboutProp) {
    return (
        <section className={`bg-white px-5 pb-12  sm:px-8 md:px-12 lg:pb-16 ${isPadding ? "pt-20 lg:pt-60" : " pt-12"}`}>
            <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-2 lg:gap-16">
                {/* LEFT */}
                <div className="flex flex-col justify-between gap-10">
                    <div className="relative aspect-[753/424] w-full overflow-hidden rounded-2xl">
                        <Image
                            src="/home/about1.jpg"
                            alt="Two workers in hard hats and safety vests in a timber warehouse"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col">
                                <span className="text-5xl font-medium font-heading leading-none tracking-tighter text-[#384B38] sm:text-6xl xl:text-[88px]">
                                    {stat.value}
                                </span>
                                <span className="mt-3 font-sans text-sm text-black sm:text-base">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col">
                    <p className="text-lg uppercase font-heading tracking-wide text-[#384B38]">
                        About Us
                    </p>

                    <h2 className="mt-3 text-4xl font-heading  leading-[1.05] tracking-tight text-black sm:text-5xl xl:text-[50px]">
                        Where Quality Timber Meets Six Decades of Craftsmanship
                    </h2>

                    <p className="mt-4 max-w-[740px] font-sans text-base leading-[25px] text-[#7a7a7a]">
                        For 64 years, Premier Timbers has been a trusted name in the manufacture and export of timber, delivering the highest quality raw wood and services. From timber seasoning and treatment to sawing, planing, carpentry and joinery, we handle every stage with skill and care. Our reputation has spread far, and we have proudly served homes and businesses across the state.
                    </p>

                    <div className="relative mt-4 aspect-[754/225] w-full overflow-hidden rounded-2xl">
                        <Image
                            src="/home/about2.jpg"
                            alt="Timber crane loading logs onto a truck in a forest"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-8 lg:mt-auto lg:pt-16">
                        <Link
                            href={"#"}
                            className="inline-flex items-center gap-3 rounded-md border border-white bg-[#384b38] px-8 py-4 text-sm font-medium font-heading text-white shadow-lg  max-md:justify-center max-md:text-xs"
                        >
                            DISCOVER MORE
                        </Link>

                        <div className="flex items-center gap-4">
                            <div className="h-14 w-14 bg-[#384b38] rounded-full flex justify-center items-center"><PhoneCall className="h-6 w-6 text-white" /></div>
                            <span className="text-lg">Call The Branch<br /><span className="text-xl text-[#384b38]">+917736736728</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}