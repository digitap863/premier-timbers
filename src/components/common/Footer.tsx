import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import type { IconType } from "react-icons";

const socials: { label: string; href: string; icon: IconType }[] = [
    { label: "Facebook", href: "#", icon: FaFacebookF },
    { label: "WhatsApp", href: "#", icon: FaWhatsapp },
];

const company = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
];

const quickLinks = [
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Condition", href: "/terms" },
    { label: "Gallery", href: "/gallery" },
];

const addresses = [
    ["Pullepady Road, Near Railway Cross-East,", "Ernakulam North P.O., Kochi, Ernakulam"],
    ["Near Metro Pillar #208, NH-544, Muttom,", "Thaikkaukara P.O., Aluva, Ernakulam"],
];

export default function Footer() {
    return (
        <footer>
            <div className="bg-[#384B38] px-5 py-14 text-white sm:px-8 lg:px-12 font-heading">
                <div className="mx-auto grid max-w-[1800px] items-start gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1.6fr_1.4fr] lg:gap-10">
                    {/* Brand */}
                    <div className="flex flex-col">
                        <Link href="/" aria-label="Premier Timbers home">
                            <Image
                                src="/common/logodark.png"
                                alt="Premier Timbers"
                                width={245}
                                height={100}
                                className="h-auto w-[175px]"
                            />
                        </Link>

                        <p className="mt-8 max-w-[440px] text-base leading-7 text-white/90">
                            With over 64 years of timber manufacture experience, Premier
                            Timbers offers the widest range of timber products, backed by
                            expertise and service you can rely on.
                        </p>
                    </div>

                    {/* Company + Quick Link + Follow Us */}
                    <div>
                        <div className="grid grid-cols-2 gap-10">
                            {/* Company */}
                            <div>
                                <h3 className="text-[24px] font-medium leading-tight tracking-tight">
                                    Company
                                </h3>
                                <ul className="mt-6 space-y-3">
                                    {company.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className="text-base transition-opacity hover:opacity-70"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Quick Link */}
                            <div>
                                <h3 className="text-[24px] font-medium leading-tight tracking-tight">
                                    Quick Link
                                </h3>
                                <ul className="mt-6 space-y-3">
                                    {quickLinks.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className="text-base transition-opacity hover:opacity-70"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Follow Us */}
                        <div className="mt-10 flex items-center gap-4">
                            <span className="text-lg font-medium">Follow Us:</span>
                            {socials.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex h-11 w-11 items-center justify-center border border-white text-white transition-colors hover:bg-white hover:text-[#384B38]"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[24px] font-medium leading-tight tracking-tight">
                            Contact Us
                        </h3>
                        <ul className="mt-6 space-y-4 text-base">
                            {addresses.map((lines, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <MapPin
                                        className="mt-1 h-4 w-4 shrink-0"
                                        fill="currentColor"
                                        strokeWidth={0}
                                    />
                                    <span className="leading-6">
                                        {lines[0]}
                                        <br />
                                        {lines[1]}
                                    </span>
                                </li>
                            ))}
                            <li className="flex items-center gap-3">
                                <Phone
                                    className="h-4 w-4 shrink-0"
                                    fill="currentColor"
                                    strokeWidth={0}
                                />
                                <span>+91 484 2403757, 2403253</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 shrink-0" />
                                <a
                                    href="mailto:premiertimber@yahoo.com"
                                    className="hover:opacity-70"
                                >
                                    premiertimber@yahoo.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="mt-1 h-4 w-4 shrink-0" />
                                <span className="leading-6">
                                    Monday to Saturday, 9:00 AM to 7:00 PM
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-white px-5 py-4 text-center text-base text-[#7a7a7a]">
                © 2026 | Premier Timbers | All Rights Reserved
            </div>
        </footer>
    );
}