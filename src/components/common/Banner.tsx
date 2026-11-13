// components/Banner.tsx
import Image from "next/image";

type BannerProps = {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
};

export default function Banner({
    title,
    description,
    image,
    imageAlt = "",
}: BannerProps) {
    return (
        <section className="relative flex min-h-[360px] items-center justify-center overflow-hidden md:min-h-[440px] lg:min-h-[497px]">
            {/* Background image */}
            <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-5 pt-16 text-center text-white sm:px-8 lg:pt-20">
                <h1 className="text-5xl font-heading leading-none tracking-tighter sm:text-6xl lg:text-[76px]">
                    {title}
                </h1>
                <p className="mt-7 max-w-[870px] text-base leading-7 sm:text-lg font-sans">
                    {description}
                </p>
            </div>
        </section>
    );
}