import Image from "next/image";

const team = [
    {
        name: "Indah Ningsih",
        role: "Founder & CEO",
        image: "/about/team1.jpg",
    },
    {
        name: "Frank Ansems",
        role: "Timber Management",
        image: "/about/team1.jpg",
    },
    {
        name: "Lawrence Petrie",
        role: "Operations Manager",
        image: "/about/team1.jpg",
    },
    {
        name: "Ruth Aquilani",
        role: "Our Team",
        image: "/about/team1.jpg",
    },
];

const bio =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.";

export default function TeamSection() {
    return (
        <section className="bg-[#F4F8F4] px-4 py-16 sm:px-6 lg:px-[30px] lg:py-20 max-md:py-12">
            <div className="mx-auto max-w-[1400px]">
                {/* Header */}
                <p className="text-base font-heading uppercase tracking-[0.12em] text-[#384B38] sm:text-lg max-md:text-sm">
                    Our Team
                </p>
                <h2 className="mt-3 max-w-[740px] text-3xl font-heading leading-tight tracking-tight text-black sm:text-4xl lg:text-[50px] max-md:text-[28px] max-md:leading-[1.15]">
                    Our leaders are the foundation of our organization.
                </h2>

                {/* Cards */}
                <div className="mt-10 grid gap-5 md:grid-cols-2 max-md:mt-8">
                    {team.map((member) => (
                        <article
                            key={member.name}
                            className="grid overflow-hidden bg-white shadow-[0_0_0_1px_rgba(56,75,56,0.04)] sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:max-lg:grid-cols-1"
                        >
                            {/* Photo + green bar */}
                            <div className="relative flex min-h-[260px] items-end sm:min-h-[300px] max-sm:min-h-[240px]">
                                <div className="relative h-[220px] w-full sm:h-[260px] lg:h-[290px] max-sm:h-[200px]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-contain object-bottom"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 h-14 w-[calc(100%-1.5rem)] rounded-tr-xl bg-[#384B38] sm:h-16 sm:w-[92%]" />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col justify-center px-5 py-6 sm:px-6 sm:py-8 lg:px-8 max-md:py-5">
                                <h3 className="text-2xl font-heading tracking-tight text-black max-md:text-[22px]">
                                    {member.name}
                                </h3>
                                <p className="mt-4 text-sm font-heading text-[#384B38] max-md:mt-2">
                                    {member.role}
                                </p>
                                <p className="mt-4 max-w-[260px] text-base font-sans leading-[21px] text-neutral-500 sm:max-w-none max-md:mt-3 max-md:max-w-none max-md:text-[15px] max-md:leading-6">
                                    {bio}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}