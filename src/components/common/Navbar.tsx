"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contactus" },
];

const PHONE_LABEL = "+91 484 2403757";
const PHONE_HREF = "tel:+914842403757";
const EMAIL = "premiertimber@yahoo.com";
// Country code + number, no spaces or "+", e.g. "919876543210". Leave "" to hide it.
const WHATSAPP_NUMBER = "";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) =>
        path === "/" ? pathname === "/" : pathname.startsWith(path);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const isScrolled = window.scrollY > 50;
                    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock page scroll and allow Esc to close while the menu is open
    useEffect(() => {
        if (!mobileMenuOpen) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileMenuOpen(false);
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.removeProperty("overflow");
        };
    }, [mobileMenuOpen]);

    // Close the mobile menu if the screen is resized up to desktop
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const onChange = (e: MediaQueryListEvent) => {
            if (e.matches) setMobileMenuOpen(false);
        };
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    return (
        <header className="absolute top-0 left-0 w-full z-50 font-heading">
            {/* ================= MAIN NAVBAR ================= */}
            <div className={`bg-transparent transition-shadow ${scrolled ? "shadow-md" : ""}`}>
                <div className="max-w-375 mx-auto px-4 md:px-8 py-2">
                    <div className="flex items-center justify-between h-20 md:h-[100px]">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 ml-2" aria-label="Premier Timbers home">
                            <Image
                                src="/common/logodark.png"
                                width={177}
                                height={88}
                                alt="Premier Timbers"
                                priority
                                fetchPriority="high"
                                className="h-[52px] w-auto object-contain sm:h-[60px] md:h-auto md:max-h-[100px]"
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center" aria-label="Main">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    href={link.path}
                                    className="text-base mx-0 lg:text-[18px] lg:mx-4"
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Mobile Hamburger */}
                        <button
                            type="button"
                            className="flex md:hidden items-center justify-center p-2 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= MOBILE MENU (below md only) ================= */}
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
                    mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Slide-in panel */}
            <div
                id="mobile-menu"
                aria-hidden={!mobileMenuOpen}
                className={`fixed left-0 top-0 z-50 flex h-dvh w-[85vw] max-w-[320px] flex-col overflow-hidden bg-[#384B38] transition-[transform,visibility] duration-300 ease-in-out md:hidden ${
                    mobileMenuOpen ? "visible translate-x-0" : "invisible -translate-x-full"
                }`}
            >
                {/* Top bar: logo + close */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 pb-4 pt-5">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} aria-label="Premier Timbers home">
                        <Image
                            src="/common/logodark.png"
                            width={120}
                            height={60}
                            alt="Premier Timbers"
                            className="h-auto w-[100px] object-contain"
                        />
                    </Link>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-md p-1 text-white/70 transition-colors hover:text-white"
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-1 flex-col overflow-y-auto" aria-label="Mobile">
                    {navLinks.map((link) => {
                        const active = isActive(link.path);
                        return (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                aria-current={active ? "page" : undefined}
                                className={`flex items-center justify-between border-b border-white/10 px-5 py-4 transition-colors duration-200 ${
                                    active
                                        ? "border-l-2 border-l-white bg-white/10 pl-[18px] text-white"
                                        : "text-white/75 hover:bg-white/5 hover:text-white"
                                }`}
                            >
                                <span className="text-[16px] font-semibold">{link.name}</span>
                                <ChevronRight
                                    size={16}
                                    className={active ? "text-white" : "text-white/30"}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom contact strip */}
                <div className="space-y-3 border-t border-white/10 px-5 py-5">
                    <a
                        href={PHONE_HREF}
                        className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
                    >
                        <Phone size={16} className="shrink-0 text-white" />
                        {PHONE_LABEL}
                    </a>

                    {WHATSAPP_NUMBER && (
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                                "Hello Premier Timbers, I would like to enquire about your timber products."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
                        >
                            <FaWhatsapp size={16} className="shrink-0 text-[#25D366]" />
                            WhatsApp us
                        </a>
                    )}

                    <a
                        href={`mailto:${EMAIL}`}
                        className="flex items-center gap-3 break-all text-sm text-white/75 transition-colors hover:text-white"
                    >
                        <Mail size={16} className="shrink-0 text-white" />
                        {EMAIL}
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;