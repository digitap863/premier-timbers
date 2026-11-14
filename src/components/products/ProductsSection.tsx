// components/Products.tsx
import Image from "next/image";
import Link from "next/link";

type Product = {
    name: string;
    image: string; // full path inside /public, any extension (.jpg, .webp, .png)
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
            { name: "Teak", image: "/products/teak.webp" },
            { name: "Rose Wood", image: "/products/rose-wood.webp" },
            { name: "Sal", image: "/products/sal.webp" },
            { name: "Merbau/Kwila", image: "/products/merbau-kwila.webp" },
            { name: "Babool", image: "/products/babool.webp" },
            { name: "Pyinkado", image: "/products/pyinkado.webp" },
            { name: "Green Heart", image: "/products/green-heart.webp" },
            { name: "Tatabu", image: "/products/tatabu.webp" },
            { name: "WPL", image: "/products/WPL.webp" },
            { name: "Cedar", image: "/products/Cedar.webp" },
            { name: "Violet", image: "/products/Violet.webp" },
            { name: "Padok", image: "/products/Padok.webp" },
            { name: "Anjily", image: "/products/Anjily.webp" },
            { name: "Mahogany", image: "/products/Mahogany.webp" },
            { name: "Acacia", image: "/products/Acacia.webp" },
        ],
    },
    {
        title: "Decorative/Interior Wood",
        subtitle: "Beautiful finishes for interiors and furniture",
        products: [
            { name: "White Ash", image: "/products/White-Ash.jpg" },
            { name: "Beech", image: "/products/Beech.jpg" },
            { name: "Oak", image: "/products/Oak.jpg" },
            { name: "Pine", image: "/products/Pine.jpg" },
            { name: "Walnut", image: "/products/Walnut.jpg" },
            { name: "Douglas Fir", image: "/products/Douglas-Fir.jpg" },
            { name: "Western Hemlock", image: "/products/Western-Hemlock.jpg" },
            { name: "Yellow Cedar", image: "/products/Yellow-Cedar.jpg" },
            { name: "Treated Rubber Wood", image: "/products/Treated-Rubber-Wood.jpg" },
            { name: "Red Cedar", image: "/products/Red-Cedar.jpg" },
            { name: "Spruce", image: "/products/Spruce.jpg" },
        ],
    },
    {
        title: "Soft/Shuttering Wood",
        subtitle: "Light, affordable timber for construction use",
        products: [
            { name: "Thanni", image: "/products/Thanni.jpg" },
            { name: "Pine", image: "/products/Pine.jpg" },
            { name: "Silver Oak", image: "/products/Silver-Oak.jpg" },
            { name: "Country Jack/Plav", image: "/products/Country-Jack-Plav.jpg" },
            { name: "Eucalyptus", image: "/products/Eucalyptus.jpg" },
            { name: "Rain Tree", image: "/products/Rain-Tree.jpg" },
            { name: "Kattady Poles", image: "/products/Kattady-Poles.jpg" },
            { name: "Rubber Wood", image: "/products/Rubber-Wood.jpg" },
        ],
    },
    {
        title: "Other Products",
        subtitle: "Ready-made and engineered wood products",
        products: [
            { name: "Readymade Doors & Windows", image: "/products/Readymade-Doors-Windows.jpg" },
            { name: "Skin & Flush Door", image: "/products/Skin-Flush-Door.jpg" },
            { name: "Plywood", image: "/products/Plywood.jpg" },
            { name: "Finger Jointed Boards/Panels", image: "/products/Finger-Jointed-Boards-Panels.jpg" },
            { name: "Pallet", image: "/products/Pallet.jpg" },
        ],
    },
];


const Products = () => {
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
                    {categories.map((category, index) => (
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
                                        className="flex flex-col overflow-hidden rounded-xl bg-white p-4 sm:p-5"
                                    >
                                        <div className="relative aspect-[402/260] w-full overflow-hidden rounded-lg bg-neutral-200">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                                className="object-cover"
                                            />
                                        </div>

                                        <h4 className="mt-4 text-xl font-heading leading-tight tracking-tight text-black sm:text-2xl">
                                            {product.name}
                                        </h4>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;