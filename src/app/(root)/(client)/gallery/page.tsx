import Banner from "@/components/common/Banner";
import Gallery from "@/components/gallery/Gallery";

const page = () => {
    return (
        <>
            <Banner
                title="Gallery"
                description="A look at our timber, sawmill work and finished projects, crafted with care."
                image="/about/banner.jpg"
                imageAlt="Autumn forest path with stacked logs"
            />
            <Gallery />
        </>
    );
}

export default page;