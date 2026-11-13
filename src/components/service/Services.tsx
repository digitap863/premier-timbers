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
    {
        number: "04.",
        title: "Carpentry/Joinery",
        subtitle: "Bespoke work, from repairs to full fit-outs",
        icon: "/home/icon4.png",
        image: "/services/s4.jpg",
        imageAlt: "Carpenter working on a wooden board",
        description:
            "Our bespoke joinery and carpentry services range from simple repairs to fully fitted offices and kitchens.",
        href: "/services/carpentry-joinery",
    },
    {
        number: "05.",
        title: "Planing",
        subtitle: "Smooth lumber at your desired thickness",
        icon: "/home/icon1.png",
        image: "/services/s5.jpg",
        imageAlt: "Hand plane smoothing a timber board",
        description:
            "Every piece of lumber is planed to your desired thickness, with the best output in production and quality.",
        href: "/services/planing",
    },
    {
        number: "06.",
        title: "Finger Jointing",
        subtitle: "Stronger lumber with less twisting",
        icon: "/home/icon2.png",
        image: "/services/s6.jpg",
        imageAlt: "Close-up of finger-jointed timber",
        description:
            "Our finger jointing technology gives you higher quality, stronger lumber with minimal twisting and warping.",
        href: "/services/finger-jointing",
    },
];

const Services = () => {
    return (
        <section className="bg-[#F5FAF6] px-4 py-10 sm:px-6 lg:px-8 mt-10">
            <div className="mx-auto max-w-[1500px] px-4">
                {/* Header */}
                <p className="text-[18px] font-heading uppercase tracking-wide text-[#384B38]">
                    What We Do
                </p>
                <h2 className="mt-2 text-4xl font-heading leading-tight tracking-tight text-black sm:text-5xl lg:text-[50px]">
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
                            key={service.number}
                            className="relative flex flex-col overflow-hidden rounded-xl bg-white px-8 pb-8 pt-8"
                        >
                            {/* Icon tab */}
                            <div className="absolute right-10 top-0 flex h-[100px] w-20 items-center justify-center rounded-b-md bg-[#384B38]">
                                <Image
                                    src={service.icon}
                                    alt=""
                                    aria-hidden="true"
                                    width={56}
                                    height={48}
                                    className="h-12 w-14 object-contain"
                                />
                            </div>

                            {/* Number + title */}
                            <span className="text-[50px] font-heading font-medium leading-none tracking-tight text-[#384B38]">
                                {service.number}
                            </span>
                            <h3 className="mt-3 text-[32px] font-heading leading-tight tracking-tighter text-black">
                                {service.title}
                            </h3>

                            <p className="mt-3 text-lg font-heading text-black">
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

                            <p className="mt-4 text-base font-sans leading-[22px] text-[#7a7a7a]">
                                {service.description}
                            </p>

                            <Link
                                href={service.href}
                                className="mt-6 flex h-[50px] font-heading items-center justify-center rounded-sm bg-[#384B38] text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#2c3c2c]"
                            >
                                Discover More
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;