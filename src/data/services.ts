export interface ServiceItem {
    slug: string;
    aliases?: string[];
    number: string;
    title: string;
    detailTitle: string;
    subtitle: string;
    icon: string;
    image: string;
    imageAlt: string;
    description: string;
    href: string;
    overviewParagraphs: string[];
    benefitsTitle: string;
    benefitsIntro?: string;
    benefits: string[];
}

export const services: ServiceItem[] = [
    {
        slug: "wood-seasoning",
        number: "01.",
        title: "Wood Seasoning",
        detailTitle: "Wood Seasoning",
        subtitle: "Controlled drying for durable timber",
        icon: "/home/i1.png",
        image: "/services/s11.jpg",
        imageAlt: "Stacked timber being loaded into a drying chamber",
        description:
            "We dry timber to remove moisture, giving you strong, durable and high-quality wood.",
        href: "/services/wood-seasoning",
        overviewParagraphs: [
            "Fresh timbers retain high quantity of moisture and hence don't make useful for manufacturing and constructing furniture. Wood seasoning is the process of drying these timbers to remove moisture and thereby strengthening and making them productive for constructional activities.",
            "The process of seasoning in Premier Timbers guarantee high quality functioning and benefits one with intact, durable and finest timber. While there are many ways to achieve wood seasoning, all our methods aim to remove moisture at uniform rate. Wood seasoning reduces chance of wood from getting decay, improves load bearing properties and help exhibit more favorable properties such as electrical and thermal insulation, glue adhesive capacity and many others.",
        ],
        benefitsTitle: "Key Benefits of Wood Seasoning",
        benefitsIntro:
            "Timber seasoning is important and beneficial for use on constructional projects for a number of reasons:",
        benefits: [
            "Reduces chances of decaying",
            "Improves quality of finishing",
            "Strengthens glued joints",
            "Reduces weight",
            "Increases durability",
        ],
    },
    {
        slug: "wood-treatment",
        number: "02.",
        title: "Wood Treatment",
        detailTitle: "Wood Treatment",
        subtitle: "Protection against damage and decay",
        icon: "/home/i2.png",
        image: "/services/s22.jpg",
        imageAlt: "Timber loaded into a pressure treatment cylinder",
        description:
            "We use professional methods to preserve and protect timber from damage and keep it lasting longer.",
        href: "/services/wood-treatment",
        overviewParagraphs: [
            "All measures taken to protect wood from damage caused by insects, moisture and decay fungi fall under wood treating/preservation. Pressure treatment is a process that forces wood preservatives or fire-retardants into the wood. This process is considered the best and most effective method to extend and preserve timber life.",
            "Pressure-treated wood is the ideal choice for exterior building projects or projects requiring fire-retardant treated wood. It provides deep penetration and retention of preservatives for uniform protection of wood products, ensuring the treatment formulation meets the appropriate wood standards and building code requirements. With Premier Timbers advanced formulations, the treating process is very effective and damage controlled.",
        ],
        benefitsTitle: "Key Benefits of Wood Treatment",
        benefits: [
            "Deep and uniform wood penetration",
            "Better control over retention of wood",
            "Faster and more reliable process",
        ],
    },
    {
        slug: "saw-mill",
        aliases: ["wood-sawing"],
        number: "03.",
        title: "Saw Mill",
        detailTitle: "Wood Sawing",
        subtitle: "Precision cutting for maximum yield",
        icon: "/home/i3.png",
        image: "/services/s33.jpg",
        imageAlt: "Workers cutting logs at a sawmill",
        description:
            "Our modern sawmills and skilled workers cut logs to the required sizes for maximum yield.",
        href: "/services/saw-mill",
        overviewParagraphs: [
            "Wood sawing is the process of cutting wood typically using a thin blade of metal. Our vertical panel saws are customized to cut timber to the size you need in regard to delivering you to the exact time you require.",
            "Irrespective to high quality lumber we provide a friendly, professional service to trade and household customers. At Premier Timbers, we do not believe that excellent furniture needs to have high price tag. We believe high-quality furniture should be accessible to everyone who wants to.",
        ],
        benefitsTitle: "Key Benefits of Wood Sawing",
        benefitsIntro: "Some advantages of wood sawing are:",
        benefits: [
            "Reduces shrinks and swells",
            "Makes timber less susceptible to collapse while drying",
            "Lessens weight",
        ],
    },
    {
        slug: "carpentry-joinery",
        number: "04.",
        title: "Carpentry/Joinery",
        detailTitle: "Carpentry/Joinery",
        subtitle: "Bespoke work, from repairs to full fit-outs",
        icon: "/home/i4.png",
        image: "/services/s44.jpg",
        imageAlt: "Carpenter working on a wooden board",
        description:
            "Our bespoke joinery and carpentry services range from simple repairs to fully fitted offices and kitchens.",
        href: "/services/carpentry-joinery",
        overviewParagraphs: [
            "We have a talented team who are capable of creating high quality, bespoke joinery and carpentry works for your home and office. Whatever your requirement may be, we take care of the entire process from design to creation and meeting your expectations.",
            "Our range of bespoke joinery and carpentry services includes traditional wall paneling, wardrobe fitting, bookshelves, furniture, lock replacement, bathroom and kitchen innovation, storage units, picture rails, door frames and general joinery repairs. Joinery/Carpentry helps in giving you the best output for your requirement, focusing on bespoke details and unique finishing.",
        ],
        benefitsTitle: "Key Benefits of Carpentry/Joinery",
        benefitsIntro:
            "There are several advantages of Joinery/Carpentry in logging industry which are:",
        benefits: [
            "Unique finishing and craftsmanship",
            "Keen focus for details",
            "Long term quality",
        ],
    },
    {
        slug: "planing",
        number: "05.",
        title: "Planing",
        detailTitle: "Planing",
        subtitle: "Smooth lumber at your desired thickness",
        icon: "/home/i5.png",
        image: "/services/s55.jpg",
        imageAlt: "Hand plane smoothing a timber board",
        description:
            "Every piece of lumber is planed to your desired thickness, with the best output in production and quality.",
        href: "/services/planing",
        overviewParagraphs: [
            "Planing is an important step that gives a consistent thickness to timber, achieving a smooth-flat surface on both faces. Each lumber at Premier Timber is measured to your desired thickness before processing and finally hand-held to panel.",
            "We plane the wood by surfacing both sides to prepare it for a finishing planer and you'll have a factory finished piece of wood ready for staining, painting, varnishing, or any other desired finish.",
        ],
        benefitsTitle: "Key Benefits of Plaining",
        benefitsIntro: "The benefits of Planing in wood industry are:",
        benefits: [
            "Smoothen rough wood surface",
            "Gives consistent thickness",
            "High quality finishing",
        ],
    },
    {
        slug: "finger-jointing",
        number: "06.",
        title: "Finger Jointing",
        detailTitle: "Finger Jointing",
        subtitle: "Stronger lumber with less twisting",
        icon: "/home/i6.png",
        image: "/services/s66.jpg",
        imageAlt: "Close-up of finger-jointed timber",
        description:
            "Our finger jointing technology gives you higher quality, stronger lumber with minimal twisting and warping.",
        href: "/services/finger-jointing",
        overviewParagraphs: [
            "Jointing involves joining together pieces of wood or lumber, to produce more complex items. Generally, the more difficult the joint, the stronger it is.",
            "Finger jointing is recognized as the most stable method to joint short pieces of wood into one. In this process, wood is cut into interlocking patterns and then glued resembling similar to the interlocking of fingers. Using Premier Timbers finger jointing technology, you can achieve ideal timber-strength in terms of production and quality assurance.",
        ],
        benefitsTitle: "Key Benefits of Finger Jointing",
        benefitsIntro: "Some great reasons to use Finger jointed Lumber are:",
        benefits: [
            "Results in much higher quality and stronger lumber",
            "Allows the removal of strength reducing defects",
            "Makes timber environmental friendly",
            "Minimized wrapping and twisting",
        ],
    },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
    return services.find(
        (service) => service.slug === slug || service.aliases?.includes(slug)
    );
}
