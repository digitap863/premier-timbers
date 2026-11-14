// components/ContactInfoSection.tsx
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaCircleCheck, FaEnvelope } from "react-icons/fa6";
import type { IconType } from "react-icons";

type InfoCard = {
    title: string;
    subtitle: string;
    icon: IconType;
    items: { label: string; href?: string }[];
};

const cards: InfoCard[] = [
    {
        title: "Office Location",
        subtitle: "Visit us at our two locations",
        icon: FaMapMarkerAlt,
        items: [
            {
                label:
                    "Pullepady Road, Near Railway Cross-East, Ernakulam North P.O., Kochi, Ernakulam",
            },
            {
                label:
                    "Near Metro Pillar #208, NH-544, Muttom, Thaikkaukara P.O., Aluva, Ernakulam",
            },
        ],
    },
    {
        title: "Our Number",
        subtitle: "Call us for any enquiries",
        icon: FaPhoneAlt,
        items: [
            { label: "+91 484 2403757", href: "tel:+914842403757" },
            { label: "+91 484 2403253", href: "tel:+914842403253" },
        ],
    },
    {
        title: "Our Mail",
        subtitle: "Write to us anytime",
        icon: FaEnvelope,
        items: [
            {
                label: "premiertimber@yahoo.com",
                href: "mailto:premiertimber@yahoo.com",
            },
        ],
    },
    {
        title: "Working Hours",
        subtitle: "When you can reach us",
        icon: FaClock,
        items: [
            { label: "Monday to Saturday" },
            { label: "9:00 AM to 7:00 PM" },
        ],
    },
];

const ContactInfoSection = () => {
    return (
        <section className="bg-[#F5FAF6] px-4 py-10 sm:px-6 lg:px-8 mt-10">
            <div className="mx-auto max-w-[1500px] px-4">
                {/* Header */}
                <p className="text-[18px] font-heading uppercase tracking-wide text-[#384B38]">
                    Contact Us
                </p>

                {/* Cards */}
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {cards.map(({ title, subtitle, icon: Icon, items }, index) => (
                        <article
                            key={title}
                            className="relative flex flex-col overflow-hidden rounded-xl bg-white px-8 pb-8 pt-8"
                        >
                            {/* Icon tab */}
                            <div className="absolute right-10 top-0 flex h-[100px] w-20 items-center justify-center rounded-b-md bg-[#384B38] text-white">
                                <Icon className="h-7 w-7" />
                            </div>

                            {/* Number + title */}
                            <span className="text-[50px] font-heading font-medium leading-none tracking-tight text-[#384B38]">
                                {String(index + 1).padStart(2, "0")}.
                            </span>
                            <h3 className="mt-3 text-[32px] font-heading leading-tight tracking-tighter text-black">
                                {title}
                            </h3>

                            <p className="mt-3 text-lg font-heading text-black">
                                {subtitle}
                            </p>

                            <hr className="mt-5 border-t border-[#384B38]/25" />

                            <ul className="mt-5 space-y-4">
                                {items.map((item) => (
                                    <li
                                        key={item.label}
                                        className="flex items-start gap-3 font-sans text-base leading-[24px] text-black"
                                    >
                                        <FaCircleCheck className="mt-[3px] h-[18px] w-[18px] shrink-0 text-[#384B38]" />
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="break-words transition-opacity hover:opacity-70"
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <span>{item.label}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfoSection;