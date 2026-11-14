import Image from "next/image";
import Link from "next/link";

const services = [
    {
        number: "01.",
        title: "Wood Seasoning",
        subtitle: "Controlled drying for durable timber",
        icon: "/home/icon1.png",
        image: "/services/s1.jpg",
        imageAlt: "Stacked timber being loaded into a drying chamber",
        description:
            "We dry timber to remove moisture, giving you strong, durable and high-quality wood.",
        href: "/services/wood-seasoning",
    },
    {
        number: "02.",
        title: "Wood Treatment",
        subtitle: "Protection against damage and decay",
        icon: "/home/icon2.png",
        image: "/services/s2.jpg",
        imageAlt: "Timber loaded into a pressure treatment cylinder",
        description:
            "We use professional methods to preserve and protect timber from damage and keep it lasting longer.",
        href: "/services/wood-treatment",
    },
    {
        number: "03.",
        title: "Saw Mill",
        subtitle: "Precision cutting for maximum yield",
        icon: "/home/icon3.png",
        image: "/services/s3.jpg",
        imageAlt: "Workers cutting logs at a sawmill",
        description:
            "Our modern sawmills and skilled workers cut logs to the required sizes for maximum yield.",
        href: "/services/saw-mill",
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-[#F5FAF6] px-4 py-10 sm:px-6 lg:px-8 mt-10">
            <div className="mx-auto max-w-[1500px] px-4 max-md:px-0">
                {/* Header */}
                <p className="text-[18px] font-heading uppercase tracking-wide text-[#384B38] max-md:text-sm">
                    What We Do
                </p>
                <h2 className="mt-2 text-4xl font-heading leading-tight tracking-tight text-black sm:text-5xl lg:text-[50px] max-md:text-[30px] max-md:leading-[1.15]">
                    Responsible forestry &amp; quality timber
                </h2>
                <p className="mt-3 max-w-[690px] text-base leading-[22px] text-[#7a7a7a] font-sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod scelerisque facilisis. Nullam et porttitor
                    urna. Quisque placerat nulla vitae orci vehicula laoreet.
                </p>

                {/* Cards */}
                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {services.map((service) => (
                        <article
                            key={service.title}
                            className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white px-8 pb-8 pt-8 max-md:px-5 max-md:pb-6 max-md:pt-6"
                        >
                            {/* Icon tab */}
                            <div className="absolute right-10 top-0 flex h-[100px] w-20 items-center justify-center rounded-b-md bg-[#384B38] max-md:right-5 max-md:h-[72px] max-md:w-16">
                                <Image
                                    src={service.icon}
                                    alt=""
                                    aria-hidden="true"
                                    width={56}
                                    height={48}
                                    className="h-12 w-14 object-contain max-md:h-10 max-md:w-12"
                                />
                            </div>

                            {/* Number + title */}
                            <span className="text-[50px] font-heading font-medium leading-none tracking-tight text-[#384B38] max-md:text-[40px]">
                                {service.number}
                            </span>
                            <h3 className="mt-3 text-[32px] font-heading leading-tight tracking-tighter text-black max-md:text-[26px]">
                                {service.title}
                            </h3>

                            <p className="mt-3 text-lg font-heading text-black max-md:text-base">
                                {service.subtitle}
                            </p>

                            {/* Image */}
                            <div className="relative mt-5 aspect-[402/227] w-full overflow-hidden rounded-lg">
                                <Image
                                    src={service.image}
                                    alt={service.imageAlt}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-cover"
                                />
                            </div>

                            <p className="mt-4 flex-1 text-base font-sans leading-[22px] text-[#7a7a7a]">
                                {service.description}
                            </p>

                            <Link
                                href={service.href}
                                className="mt-6 flex h-[50px] font-heading items-center justify-center rounded-sm bg-[#384B38] text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#2c3c2c] max-md:h-12"
                            >
                                Discover More
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Footer link */}
                <p className="mt-8 text-center text-base text-[#7a7a7a] font-sans">
                    See More About Our Services.{" "}
                    <Link
                        href="/services"
                        className="font-medium text-[#384B38] hover:underline"
                    >
                        More Services
                    </Link>
                </p>
            </div>
        </section>
    );
}