"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronRight, MapPin, Notebook } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [contactMenuOpen, setContactMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

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


    // Prevent body scroll only when menu is open
    useEffect(() => {
        if (mobileMenuOpen || contactMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.removeProperty("overflow");
        }
        return () => {
            document.body.style.removeProperty("overflow");
        };
    }, [mobileMenuOpen, contactMenuOpen]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Products", path: "/products" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contactus" },
    ];

    return (
        <header className="absolute top-0 left-0 w-full z-50 font-heading">

            {/* ================= MAIN NAVBAR ================= */}
            <div className={`bg-transparent transition-shadow ${scrolled ? "shadow-md" : ""}`}>
                <div className="max-w-375 mx-auto px-4 md:px-8  py-2">
                    <div className="flex items-center justify-between h-[100px]">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 ml-2">
                            <Image
                                src="/common/logodark.png"
                                width={177}
                                height={88}
                                alt="Triloqa Logo"
                                priority
                                fetchPriority="high"
                                className="w-auto h-auto object-contain max-h-[100px]"
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    href={link.path}
                                    className="text-[18px]  mx-4"
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            
                        </nav>


                        {/* Mobile Hamburger */}
                        <button
                            className="flex md:hidden items-center text-[#1D8F2C]"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={26} />
                        </button>
                    </div>
                </div>
            </div>

            

            {/* ================= MOBILE MENU OVERLAY ================= */}
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in Panel */}
            <div
                className={`fixed top-0 left-0 h-full w-[85vw] max-w-[320px] z-50 bg-[#0E171A] transition-transform duration-400 ease-in-out md:hidden flex flex-col overflow-hidden ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

                {/* Top bar: logo + close */}
                <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        <Image src="/logo1.webp" width={88} height={42} alt="logo" className="brightness-0 invert" />
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white/60 hover:text-white transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col flex-1 overflow-y-auto">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center justify-between px-5 py-4 border-b border-white/8 transition-colors duration-200 ${isActive
                                    ? "border-l-2 border-l-[#1D8F2C] pl-[18px] text-[#1D8F2C] bg-white/4"
                                    : "text-white/75 hover:text-white hover:bg-white/4"
                                    }`}
                            >
                                <span className="text-[15px] font-semibold">{link.name}</span>
                                <ChevronRight size={14} className={isActive ? "text-[#1D8F2C]" : "text-white/25"} />
                            </Link>
                        );
                    })}

                    {/* CTA */}
                    <div className="px-5 pt-6">
                        <Link
                            href="/files/Triloqa Brochure.pdf"
                            target="_blank"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 bg-[#1D8F2C] text-white text-sm font-semibold px-5 py-3 hover:bg-green-700 transition-colors"
                        >
                            Brochure <span><Notebook size={16} /></span>
                        </Link>
                    </div>
                </nav>

                {/* Bottom contact strip */}
                <div className="border-t border-white/10 px-5 py-5 space-y-3">
                    <a href="tel:+919207856999" className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors">
                        <Phone size={15} className="text-[#1D8F2C] shrink-0" />
                        +91 92078 56999
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=917306377934&text=Hello%20Triloqa%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20your%20solar%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
                    >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] shrink-0">
                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.7C7.02 10.91 7.9 12.07 8.03 12.24C8.15 12.4 9.74 14.86 12.18 15.91C12.76 16.16 13.21 16.31 13.57 16.42C14.16 16.61 14.7 16.58 15.12 16.52C15.6 16.45 16.58 15.92 16.79 15.34C16.99 14.75 16.99 14.25 16.93 14.15C16.86 14.05 16.69 13.99 16.44 13.86C16.19 13.74 14.97 13.14 14.74 13.06C14.52 12.98 14.35 12.94 14.19 13.18C14.02 13.43 13.55 13.99 13.4 14.15C13.26 14.32 13.11 14.34 12.87 14.22C12.62 14.09 11.82 13.83 10.87 12.99C10.13 12.33 9.63 11.52 9.49 11.27C9.34 11.03 9.47 10.89 9.6 10.77C9.71 10.66 9.85 10.48 9.97 10.34C10.1 10.19 10.14 10.09 10.22 9.92C10.3 9.76 10.26 9.61 10.2 9.49C10.14 9.37 9.65 8.17 9.44 7.68C9.25 7.2 9.04 7.27 8.89 7.26C8.74 7.25 8.57 7.25 8.53 7.33Z" />
                        </svg>
                        +91 73063 77934 (WhatsApp)
                    </a>
                    <a href="mailto:triloqasales@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors">
                        <Mail size={15} className="text-[#1D8F2C] shrink-0" />
                        triloqasales@gmail.com
                    </a>


                </div>
            </div>
        </header>
    );
};

export default Navbar;