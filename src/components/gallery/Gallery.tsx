// components/Gallery.tsx
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = {
    src: string; // full path inside /public, any extension (.jpg, .webp, .png)
    alt: string;
};

const items: GalleryItem[] = [
    { src: "/gallery/g1.jpg", alt: "2 Side Plainer" },
    { src: "/gallery/g2.jpg", alt: "4 Side Plainer" },
    { src: "/gallery/g3.jpg", alt: "Finger Joint Cutter" },
    { src: "/gallery/g4.jpg", alt: "Finger Jointing Mechine" },
    { src: "/gallery/g5.jpg", alt: "Hot Press" },
    { src: "/gallery/g6.jpg", alt: "Panel Saw" },
    { src: "/gallery/g7.jpg", alt: "Sanding Machine" },
    { src: "/gallery/g8.jpg", alt: "Stock" },
    { src: "/gallery/g9.jpg", alt: "Timber Band Saw" },
];

const Gallery = () => {
    const [lightbox, setLightbox] = useState<number | null>(null);

    const close = useCallback(() => setLightbox(null), []);

    const prev = useCallback(() => {
        setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    }, []);

    const next = useCallback(() => {
        setLightbox((i) => (i === null ? i : (i + 1) % items.length));
    }, []);

    // Keyboard controls + lock page scroll while the lightbox is open
    useEffect(() => {
        if (lightbox === null) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };

        document.addEventListener("keydown", onKey);
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = original;
        };
    }, [lightbox, close, prev, next]);

    const current = lightbox !== null ? items[lightbox] : null;

    return (
        <section className="bg-[#F5FAF6] px-4 py-10 sm:px-6 lg:px-8 mt-10">
            <div className="mx-auto max-w-[1500px] px-4">
                {/* Header */}
                <p className="text-[18px] font-heading uppercase tracking-wide text-[#384B38]">
                    Our Gallery
                </p>
                <h2 className="mt-2 text-4xl font-heading leading-tight tracking-tight text-black sm:text-5xl lg:text-[50px]">
                    A closer look at our work
                </h2>

                {/* Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <button
                            key={item.src}
                            type="button"
                            onClick={() => setLightbox(index)}
                            aria-label={`View ${item.alt}`}
                            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Hover overlay with text */}
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#384B38]/90 via-[#384B38]/30 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-md:opacity-100">
                                <p className="translate-y-2 text-left font-heading text-xl leading-tight tracking-tight text-white transition-transform duration-300 group-hover:translate-y-0 max-md:translate-y-0">
                                    {item.alt}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {current && lightbox !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={current.alt}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
                    onClick={close}
                >
                    <button
                        type="button"
                        onClick={close}
                        aria-label="Close"
                        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#384B38] text-white transition-colors hover:bg-[#2c3c2c] sm:right-8 sm:top-8"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            prev();
                        }}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#384B38] text-white transition-colors hover:bg-[#2c3c2c] sm:left-8"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#384B38] text-white transition-colors hover:bg-[#2c3c2c] sm:right-8"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    <div
                        className="relative h-full max-h-[80vh] w-full max-w-[1100px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={current.src}
                            alt={current.alt}
                            fill
                            sizes="100vw"
                            className="object-contain"
                            priority
                        />
                    </div>

                    <p className="absolute bottom-4 left-0 right-0 text-center font-heading text-sm text-white sm:bottom-8">
                        {lightbox + 1} / {items.length}
                    </p>
                </div>
            )}
        </section>
    );
};

export default Gallery;