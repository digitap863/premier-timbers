// components/Products.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Product = {
    name: string;
    image: string; // full path inside /public, any extension (.jpg, .webp, .png)
    description: string;
};

type ProductSelection = {
    product: Product;
};

type Category = {
    title: string;
    subtitle: string;
    products: Product[];
};

const categories: Category[] = [
    {
        title: "Hard Wood",
        subtitle: "Strong, dense and long-lasting timber",
        products: [
            { name: "Teak", image: "/products/teak.webp", description: "A classic hardwood choice for furniture, doors, and fine joinery." },
            { name: "Rose Wood", image: "/products/rose-wood.webp", description: "Known for its rich appearance, rose wood brings character to statement furniture and decorative interiors." },
            { name: "Sal", image: "/products/sal.webp", description: "A sturdy timber option often selected for robust construction and demanding carpentry." },
            { name: "Merbau/Kwila", image: "/products/merbau-kwila.webp", description: "A richly toned hardwood suited to durable flooring, decking, and substantial joinery." },
            { name: "Babool", image: "/products/babool.webp", description: "A traditional hardwood for practical furniture, general carpentry, and everyday woodwork." },
            { name: "Pyinkado", image: "/products/pyinkado.webp", description: "A dense tropical timber valued for strong flooring, furniture, and construction work." },
            { name: "Green Heart", image: "/products/green-heart.webp", description: "A particularly dense hardwood selected for heavy-duty outdoor and marine applications." },
            { name: "Tatabu", image: "/products/tatabu.webp", description: "A durable tropical wood option for robust joinery, flooring, and building projects." },
            { name: "WPL", image: "/products/WPL.webp", description: "A distinctive hardwood selection; ask us about its specifications and recommended applications." },
            { name: "Cedar", image: "/products/Cedar.webp", description: "A lightweight, aromatic wood often chosen for interior lining, storage, and decorative joinery." },
            { name: "Violet", image: "/products/Violet.webp", description: "A distinctive timber choice for adding color and visual interest to custom furniture and interiors." },
            { name: "Padok", image: "/products/Padok.webp", description: "A richly colored hardwood option for decorative furniture, flooring, and detailed joinery." },
            { name: "Anjily", image: "/products/Anjily.webp", description: "A regional hardwood suitable for sturdy carpentry, furniture, and general construction needs." },
            { name: "Mahogany", image: "/products/Mahogany.webp", description: "Its attractive grain makes mahogany a popular choice for furniture, doors, and interior trim." },
            { name: "Acacia", image: "/products/Acacia.webp", description: "A versatile hardwood with expressive grain, used for furniture, flooring, and general joinery." },
        ],
    },
    {
        title: "Decorative/Interior Wood",
        subtitle: "Beautiful finishes for interiors and furniture",
        products: [
            { name: "White Ash", image: "/products/White-Ash.jpg", description: "A light-toned wood with a clear grain, well suited to furniture and bright interior finishes." },
            { name: "Beech", image: "/products/Beech.jpg", description: "A smooth, uniform-looking timber frequently used for furniture, cabinetry, and interior fittings." },
            { name: "Oak", image: "/products/Oak.jpg", description: "A timeless choice for flooring, cabinets, and furniture with a pronounced natural grain." },
            { name: "Pine", image: "/products/Pine.jpg", description: "A versatile softwood for painted furniture, shelving, and relaxed interior detailing." },
            { name: "Walnut", image: "/products/Walnut.jpg", description: "A dark, elegant wood that adds warmth to premium furniture and decorative interiors." },
            { name: "Douglas Fir", image: "/products/Douglas-Fir.jpg", description: "A straight-grained timber suited to interior joinery, beams, and clean-lined design." },
            { name: "Western Hemlock", image: "/products/Western-Hemlock.jpg", description: "A pale, even-textured wood that works well for mouldings, trim, and interior carpentry." },
            { name: "Yellow Cedar", image: "/products/Yellow-Cedar.jpg", description: "A warm-colored cedar option for refined joinery, cabinetry, and decorative woodwork." },
            { name: "Treated Rubber Wood", image: "/products/Treated-Rubber-Wood.jpg", description: "Treated rubber wood offers a practical option for furniture and interior applications." },
            { name: "Red Cedar", image: "/products/Red-Cedar.jpg", description: "Aromatic red cedar brings a warm tone to interior lining, closets, and decorative details." },
            { name: "Spruce", image: "/products/Spruce.jpg", description: "A light-colored, straight-grained softwood for interior panels, trim, and general carpentry." },
        ],
    },
    {
        title: "Soft/Shuttering Wood",
        subtitle: "Light, affordable timber for construction use",
        products: [
            { name: "Thanni", image: "/products/Thanni.jpg", description: "A locally used timber option for shuttering, temporary works, and general site carpentry." },
            { name: "Pine", image: "/products/Pine.jpg", description: "Lightweight and easy to handle, pine is a practical pick for formwork and construction tasks." },
            { name: "Silver Oak", image: "/products/Silver-Oak.jpg", description: "A useful timber for framing, basic carpentry, and a range of everyday building needs." },
            { name: "Country Jack/Plav", image: "/products/Country-Jack-Plav.jpg", description: "A regional timber choice for sturdy carpentry and general construction applications." },
            { name: "Eucalyptus", image: "/products/Eucalyptus.jpg", description: "A readily available construction timber commonly used for site work and general structural needs." },
            { name: "Rain Tree", image: "/products/Rain-Tree.jpg", description: "A locally familiar wood option for practical carpentry and a variety of building projects." },
            { name: "Kattady Poles", image: "/products/Kattady-Poles.jpg", description: "Timber poles supplied for temporary support, scaffolding, and other on-site construction uses." },
            { name: "Rubber Wood", image: "/products/Rubber-Wood.jpg", description: "A versatile, economical wood for utility carpentry, furniture, and interior work." },
        ],
    },
    {
        title: "Other Products",
        subtitle: "Ready-made and engineered wood products",
        products: [
            { name: "Readymade Doors & Windows", image: "/products/Readymade-Doors-Windows.jpg", description: "Finished door and window units provide a convenient option for new builds and renovations." },
            { name: "Skin & Flush Door", image: "/products/Skin-Flush-Door.jpg", description: "A clean-faced door style for a simple, understated look in residential and commercial interiors." },
            { name: "Plywood", image: "/products/Plywood.jpg", description: "A versatile sheet material for cabinetry, partitions, furniture, and interior projects." },
            { name: "Finger Jointed Boards/Panels", image: "/products/Finger-Jointed-Boards-Panels.jpg", description: "Joined timber boards offer a ready-to-use surface for furniture, shelving, and panel work." },
            { name: "Pallet", image: "/products/Pallet.jpg", description: "A practical timber platform for storing, handling, and transporting goods." },
        ],
    },
];


const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState<ProductSelection | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (selectedProduct && dialog && !dialog.open) {
            dialog.showModal();
        } else if (!selectedProduct && dialog?.open) {
            dialog.close();
        }
    }, [selectedProduct]);

    return (
        <section className="bg-[#F5FAF6] px-4 py-10 sm:px-6 lg:px-8 mt-10">
            <div className="mx-auto max-w-[1500px] px-4">
                {/* Header */}
                <p className="text-[18px] font-heading uppercase tracking-wide text-[#384B38]">
                    Our Products
                </p>
                <h2 className="mt-2 text-4xl font-heading leading-tight tracking-tight text-black sm:text-5xl lg:text-[50px]">
                    Quality timber for every project
                </h2>

                {/* Categories */}
                <div className="mt-12 space-y-14">
                    {categories.map((category) => (
                        <div key={category.title}>
                            {/* Category heading */}
                            <div className="flex items-end gap-4">
                                <div className="pb-1">
                                    <h3 className="text-[32px] font-heading leading-tight tracking-tighter text-black">
                                        {category.title}
                                    </h3>
                                    <p className="text-lg font-heading text-[#7a7a7a]">
                                        {category.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Product cards */}
                            <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                                {category.products.map((product) => (
                                    <article
                                        key={`${category.title}-${product.name}`}
                                        className="overflow-hidden rounded-xl bg-white p-4 sm:p-5"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSelectedProduct({
                                                    product,
                                                })
                                            }
                                            className="group flex w-full flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#384B38]"
                                            aria-label={`View details for ${product.name}`}
                                        >
                                            <span className="relative block aspect-[402/260] w-full overflow-hidden rounded-lg bg-neutral-200">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </span>

                                            <span className="mt-4 text-xl font-heading leading-tight tracking-tight text-black sm:text-2xl">
                                                {product.name}
                                            </span>
                                        </button>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <dialog
                ref={dialogRef}
                onClose={() => setSelectedProduct(null)}
                onClick={(event) => {
                    if (event.target === event.currentTarget) {
                        dialogRef.current?.close();
                    }
                }}
                aria-labelledby="product-dialog-title"
                aria-describedby="product-dialog-description"
                className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl border-0 bg-white p-0 text-left shadow-2xl backdrop:bg-black/60"
            >
                {selectedProduct && (
                    <div className="p-5 sm:p-6">
                        <div className="relative aspect-[402/260] w-full overflow-hidden rounded-xl bg-neutral-200">
                            <Image
                                src={selectedProduct.product.image}
                                alt={selectedProduct.product.name}
                                fill
                                sizes="(min-width: 640px) 448px, calc(100vw - 40px)"
                                className="object-cover"
                            />
                        </div>
                        <div className="mt-5 flex items-start justify-between gap-4">
                            <div>
                                <h3 id="product-dialog-title" className="text-2xl font-heading text-black">
                                    {selectedProduct.product.name}
                                </h3>
                                <p id="product-dialog-description" className="mt-2 text-base leading-relaxed text-[#626262]">
                                    {selectedProduct.product.description}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => dialogRef.current?.close()}
                                className="shrink-0 rounded-full px-3 py-1 text-sm font-medium text-[#384B38] hover:bg-[#F5FAF6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#384B38]"
                                aria-label="Close product details"
                                autoFocus
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </dialog>
        </section>
    );
};

export default Products;