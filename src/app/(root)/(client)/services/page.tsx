import Banner from "@/components/common/Banner";
import Services from "@/components/service/Services";

const page = () => {
    return (
        <>
            <Banner
                title="Services"
                description="From seasoning and sawing to joinery and finger jointing, we offer complete timber solutions under one roof."
                image="/about/banner.jpg"
                imageAlt="Autumn forest path with stacked logs"
            />
            <Services />
        </>
    );
}

export default page;