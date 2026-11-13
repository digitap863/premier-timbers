"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ href, children, className = "", onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        group
        relative
        tracking-wide
        transition-colors duration-300 text-white px-3 ${className}`}
    >
      {children}
      <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
    </Link>
  );
};

export default NavLink;