import Banner from "@/components/common/Banner";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import MapSection from "@/components/contact/MapSection";

const page = () => {
    return (
        <>
            <Banner
                title="Contact Us"
                description="Have a question or need a quote? Get in touch with our team and we’ll be happy to help."
                image="/about/banner.jpg"
                imageAlt="Autumn forest path with stacked logs"
            />
            <ContactInfoSection />
            <ContactForm />
            <MapSection />
        </>
    );
}

export default page;