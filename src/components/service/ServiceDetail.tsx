import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CircleCheck, PhoneCall } from "lucide-react";
import { services, type ServiceItem } from "@/data/services";

type ServiceDetailProps = {
    service: ServiceItem;
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
    const otherServices = services
        .filter((item) => item.slug !== service.slug)
        .slice(0, 3);

    return (
        <>
            {/* Main Detail Section */}
            <section className="bg-white px-5 py-12 sm:px-8 lg:py-16">
                <div className="mx-auto max-w-[1500px]">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-[#384B38] transition-opacity hover:opacity-75"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to All Services
                    </Link>

                    <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_430px] xl:gap-14">
                        {/* Left Column: Image + Overview + Key Benefits */}
                        <div>
                            {/* Hero Image with Signature Icon Tab */}
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#F5FAF6]">
                                <Image
                                    src={service.image}
                                    alt={service.imageAlt}
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 65vw, 100vw"
                                    className="object-cover"
                                />
                                <div className="absolute right-8 top-0 flex h-[88px] w-[72px] items-center justify-center rounded-b-md bg-[#384B38] shadow-md max-md:right-4 max-md:h-[68px] max-md:w-14">
                                    <Image
                                        src={service.icon}
                                        alt=""
                                        aria-hidden="true"
                                        width={48}
                                        height={42}
                                        className="h-11 w-12 object-contain max-md:h-8 max-md:w-9"
                                    />
                                </div>
                            </div>

                            {/* Overview Content */}
                            <div className="mt-8">
                                <p className="text-[18px] font-heading uppercase tracking-wide text-[#384B38] max-md:text-sm">
                                    {service.number} Service Overview
                                </p>
                                <h2 className="mt-2 text-4xl font-heading leading-tight tracking-tight text-black sm:text-5xl lg:text-[50px] max-md:text-[30px] max-md:leading-[1.15]">
                                    {service.detailTitle}
                                </h2>

                                <div className="mt-5 space-y-4 font-sans text-base leading-[26px] text-[#7a7a7a]">
                                    {service.overviewParagraphs.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Key Benefits Card */}
                            <div className="mt-10 rounded-xl bg-[#F5FAF6] p-8 max-md:p-5">
                                <h3 className="text-2xl font-heading leading-tight tracking-tight text-black sm:text-[32px] max-md:text-[24px]">
                                    {service.benefitsTitle}
                                </h3>
                                {service.benefitsIntro && (
                                    <p className="mt-2 font-sans text-base leading-[24px] text-[#7a7a7a]">
                                        {service.benefitsIntro}
                                    </p>
                                )}

                                <ul className="mt-5">
                                    {service.benefits.map((benefit) => (
                                        <li
                                            key={benefit}
                                            className="flex items-center gap-3 border-b border-[#384B38]/10 py-3 font-heading text-lg text-black last:border-b-0 max-md:py-2.5 max-md:text-base"
                                        >
                                            <CircleCheck
                                                className="h-5 w-5 shrink-0 fill-[#384B38] text-white"
                                                strokeWidth={2}
                                            />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Sticky Sidebar */}
                        <aside className="space-y-6 lg:sticky lg:top-28">
                            {/* Service Switcher */}
                            <div className="rounded-xl bg-[#F5FAF6] p-6 sm:p-8">
                                <p className="text-sm font-heading uppercase tracking-wide text-[#384B38]">
                                    What We Do
                                </p>
                                <h3 className="mt-1 text-2xl font-heading tracking-tight text-black">
                                    All Services
                                </h3>

                                <nav className="mt-5 flex flex-col gap-2.5" aria-label="Services list">
                                    {services.map((item) => {
                                        const isCurrent = item.slug === service.slug;
                                        return (
                                            <Link
                                                key={item.slug}
                                                href={item.href}
                                                aria-current={isCurrent ? "page" : undefined}
                                                className={`flex items-center justify-between rounded-md px-4 py-3.5 font-heading text-base transition-colors ${
                                                    isCurrent
                                                        ? "bg-[#384B38] text-white"
                                                        : "bg-white text-black hover:bg-[#384B38]/10"
                                                }`}
                                            >
                                                <span className="flex items-center gap-3">
                                                    <span
                                                        className={`text-sm font-medium ${
                                                            isCurrent
                                                                ? "text-white/80"
                                                                : "text-[#384B38]"
                                                        }`}
                                                    >
                                                        {item.number}
                                                    </span>
                                                    <span>{item.detailTitle}</span>
                                                </span>
                                                <ArrowRight className="h-4 w-4 shrink-0" />
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>

                            {/* Direct Consultation CTA */}
                            <div className="rounded-xl bg-[#384B38] p-6 text-white sm:p-8">
                                <p className="text-sm font-heading uppercase tracking-wide text-white/80">
                                    Get In Touch
                                </p>
                                <h3 className="mt-1 text-2xl font-heading leading-tight tracking-tight sm:text-[28px]">
                                    Need {service.detailTitle} for Your Project?
                                </h3>
                                <p className="mt-3 font-sans text-base leading-[24px] text-white/85">
                                    Speak with our timber specialists for custom sizing, bulk
                                    orders, or a tailored project quote.
                                </p>

                                <a
                                    href="tel:+917736736728"
                                    className="mt-6 flex items-center gap-4 rounded-lg bg-white/10 p-4 transition-colors hover:bg-white/15"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#384B38]">
                                        <PhoneCall className="h-5 w-5" />
                                    </div>
                                    <div className="font-heading">
                                        <span className="block text-sm text-white/80">
                                            Call The Branch
                                        </span>
                                        <span className="text-lg font-medium text-white">
                                            +91 7736736728
                                        </span>
                                    </div>
                                </a>

                                <Link
                                    href="/contactus"
                                    className="mt-5 flex h-[50px] w-full items-center justify-center rounded-sm bg-white font-heading text-sm font-semibold uppercase tracking-wide text-[#384B38] transition-colors hover:bg-neutral-100"
                                >
                                    Request a Quote
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Other Services Section */}
            <section className="bg-[#F5FAF6] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-[1500px] px-4 max-md:px-0">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="text-[18px] font-heading uppercase tracking-wide text-[#384B38] max-md:text-sm">
                                Explore More
                            </p>
                            <h2 className="mt-2 text-3xl font-heading leading-tight tracking-tight text-black sm:text-4xl lg:text-[44px] max-md:text-[28px]">
                                Other Timber Services
                            </h2>
                        </div>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-[#384B38] hover:underline"
                        >
                            View All Services
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {otherServices.map((item) => (
                            <article
                                key={item.slug}
                                className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white px-8 pb-8 pt-8 max-md:px-5 max-md:pb-6 max-md:pt-6"
                            >
                                <div className="absolute right-10 top-0 flex h-[100px] w-20 items-center justify-center rounded-b-md bg-[#384B38] max-md:right-5 max-md:h-[72px] max-md:w-16">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        aria-hidden="true"
                                        width={56}
                                        height={48}
                                        className="h-12 w-14 object-contain max-md:h-10 max-md:w-12"
                                    />
                                </div>

                                <span className="text-[50px] font-heading font-medium leading-none tracking-tight text-[#384B38] max-md:text-[40px]">
                                    {item.number}
                                </span>
                                <h3 className="mt-3 text-[32px] font-heading leading-tight tracking-tighter text-black max-md:text-[26px]">
                                    {item.detailTitle}
                                </h3>
                                <p className="mt-3 text-lg font-heading text-black max-md:text-base">
                                    {item.subtitle}
                                </p>

                                <div className="relative mt-5 aspect-[402/227] w-full overflow-hidden rounded-lg">
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>

                                <p className="mt-4 flex-1 font-sans text-base leading-[22px] text-[#7a7a7a]">
                                    {item.description}
                                </p>

                                <Link
                                    href={item.href}
                                    className="mt-6 flex h-[50px] items-center justify-center rounded-sm bg-[#384B38] font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#2c3c2c] max-md:h-12"
                                >
                                    Discover More
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
