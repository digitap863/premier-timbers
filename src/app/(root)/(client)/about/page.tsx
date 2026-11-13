import TeamSection from "@/components/about/TeamSection";
import Banner from "@/components/common/Banner";
import AboutSection from "@/components/home/AboutSection";
import ChooseUsSection from "@/components/home/ChooseUsSection";
import FaqSection from "@/components/home/FaqSection";

const page = () => {
    return (
        <>
            <Banner
                title="About Us"
                description="Premier Timbers is your trusted source for quality timber, expert craftsmanship and dependable service."
                image="/about/banner.jpg"
                imageAlt="Autumn forest path with stacked logs"
            />
            <AboutSection isPadding={false} />
            <ChooseUsSection />
            <TeamSection />
            <FaqSection />
        </>
    );
}

export default page;