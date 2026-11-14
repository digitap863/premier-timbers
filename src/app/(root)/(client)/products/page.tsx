import Banner from "@/components/common/Banner";
import ProductsSection from "@/components/products/ProductsSection";

const page = () => {
    return (
        <>
            <Banner
                title="Products"
                description="Explore our wide range of local and imported timbers, seasoned and ready for homes, businesses and industry."
                image="/about/banner.jpg"
                imageAlt="Autumn forest path with stacked logs"
            />
            <ProductsSection />

        </>
    );
}

export default page;