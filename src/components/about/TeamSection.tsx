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
        <section className="bg-[#F4F8F4] px-5 py-20 sm:px-8 lg:px-[30px]">
            <div className="mx-auto max-w-[1400px]">
                {/* Header */}
                <p className="text-lg font-heading uppercase tracking-wide text-[#384B38]">
                    Our Team
                </p>
                <h2 className="mt-3 text-4xl font-heading leading-tight tracking-tight text-black sm:text-5xl lg:text-[50px]">
                    Our leaders are the foundation of our organization.
                </h2>

                {/* Cards */}
                <div className="mt-12 grid gap-5 lg:grid-cols-2">
                    {team.map((member) => (
                        <article
                            key={member.name}
                            className="grid overflow-hidden bg-white sm:grid-cols-[50%_50%]"
                        >
                            {/* Photo + green bar */}
                            <div className="relative flex min-h-[320px] items-end">
                                <div className="relative h-[258px] w-full self-start">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-contain object-bottom"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 h-16 w-[calc(100%-2rem)] rounded-tr-xl bg-[#384B38] sm:w-[91%]" />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col justify-center px-6 py-8 sm:px-0 sm:pr-8">
                                <h3 className="text-2xl font-heading tracking-tight text-black">
                                    {member.name}
                                </h3>
                                <p className="mt-5 text-sm font-heading text-[#384B38]">
                                    {member.role}
                                </p>
                                <p className="mt-5 max-w-[260px] text-base font-sans leading-[21px] text-neutral-500">
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