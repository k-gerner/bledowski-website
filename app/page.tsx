import Header from '../components/Header'
import LocationBanner from '../components/LocationBanner'
import ImageCarousel from '../components/ImageCarousel'
import PropertyDescription from '../components/PropertyDescription'
import PropertyDetails from '../components/PropertyDetails'
import LayoutInfo from '../components/LayoutInfo'
import Rates from '../components/Rates'
import AvailabilityCalendar from '../components/AvailabilityCalendar'
import Testimonials from '../components/Testimonials'
import Amenities from '../components/Amenities'
import ContactForm from '../components/ContactForm'
import AboutOwners from '../components/AboutOwners'
import ClassificationCertification from '../components/ClassificationCertification'
import LocationMap from '../components/LocationMap'
import Footer from '../components/Footer'

export default function Page() {
  // Placeholder images - replace with your actual images
  const images = [
    "/carousel/interiorHouse1.jpg",
    "/carousel/interiorHouse2.jpg",
    "/carousel/PAR_6800And8more.jpg",
    "/carousel/PAR_6827And8more.jpg",
    "/carousel/PAR_6845And8more.jpg",
    "/carousel/PAR_6854And8more.jpg",
    "/carousel/PAR_6863And8more.jpg",
    "/carousel/PAR_6872And8more.jpg",
    "/carousel/PAR_6881And8more.jpg",
    "/carousel/PAR_6890And8more.jpg",
    "/carousel/PAR_6899And8more.jpg",
    "/carousel/PAR_6908And8more.jpg",
    "/carousel/PAR_6926And8more.jpg",
    "/carousel/PAR_6944And8more.jpg",
    "/carousel/PAR_6953And8more.jpg",
    "/carousel/PAR_6962And8more.jpg",
    "/carousel/PAR_6971And8more.jpg",
    "/carousel/PAR_6989And8more.jpg",
    "/carousel/PAR_6998And8more.jpg",
    "/carousel/PAR_7007And8more.jpg",
    "/carousel/PAR_7016And8more.jpg",
    "/carousel/PAR_7043And8more.jpg",
    "/carousel/PAR_7052And8more.jpg",
    "/carousel/PAR_7061And8more.jpg",
    "/carousel/PAR_7070And8more.jpg",
    "/carousel/PAR_7088And8more.jpg",
    "/carousel/PB270019.JPG",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <LocationBanner />

      {/* Main Content - Flex Column with Gap */}
      <main className="flex flex-col mb-16 gap-12">
        {/* Image Gallery & Description Section */}
        <section className="container mx-auto grid px-4 gap-8 items-top md:grid-cols-2">
          <ImageCarousel images={images} />
          <PropertyDescription />
        </section>

        {/* Property Details and Layout - 2 Column Grid Below */}
        <section className="container mx-auto grid px-4 gap-8 md:grid-cols-2">
          <PropertyDetails />
          <LayoutInfo />
        </section>

        {/* Amenities Section */}
        <Amenities />

        {/* Classification & Certification Section */}
        <ClassificationCertification />

        <section className="container mx-auto px-4">
          <Rates />
        </section>

        <section className="container mx-auto px-4">
          <AvailabilityCalendar />
        </section>

        {/* Testimonials Section */}
        <Testimonials />
        {/* Location Map Section */}
        <section className="container mx-auto px-4">
          <LocationMap />
        </section>

        {/* About Owners & Contact Form Section - Side by Side */}
        <section className="container mx-auto grid px-4 gap-8 items-start md:grid-cols-2">
          <AboutOwners />
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  )
}