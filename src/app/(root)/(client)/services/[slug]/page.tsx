import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Banner from "@/components/common/Banner";
import ServiceDetail from "@/components/service/ServiceDetail";
import { getServiceBySlug, services } from "@/data/services";

type ServicePageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return services.flatMap((service) => [
        { slug: service.slug },
        ...(service.aliases ?? []).map((alias) => ({ slug: alias })),
    ]);
}

export async function generateMetadata({
    params,
}: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Service Not Found | Premier Timbers",
        };
    }

    return {
        title: `${service.detailTitle} | Premier Timbers`,
        description: service.overviewParagraphs[0],
    };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <Banner
                title={service.detailTitle}
                description={service.subtitle}
                image="/about/banner.jpg"
                imageAlt="Autumn forest path with stacked logs"
            />
            <ServiceDetail service={service} />
        </>
    );
}
