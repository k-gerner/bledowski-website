import Header from './components/Header'
import LocationBanner from './components/LocationBanner'
import ImageCarousel from './components/ImageCarousel'
import PropertyDescription from './components/PropertyDescription'
import PropertyDetails from './components/PropertyDetails'
import LayoutInfo from './components/LayoutInfo'
import Rates from './components/Rates'
import AvailabilityCalendar from './components/AvailabilityCalendar'
import Testimonials from './components/Testimonials'
import Amenities from './components/Amenities'
import ContactForm from './components/ContactForm'
import AboutOwners from './components/AboutOwners'

function App() {
  // Placeholder images - replace with your actual images
  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <LocationBanner />

      {/* Main Content - Flex Column with Gap */}
      <main className="flex flex-col gap-12 mb-16">
        {/* Image Gallery & Description Section */}
        <section className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-top">
          <ImageCarousel images={images} />
          <PropertyDescription />
        </section>

        {/* Property Details and Layout - 2 Column Grid Below */}
        <section className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <PropertyDetails />
          <LayoutInfo />
        </section>

        {/* Amenities Section */}
        <Amenities />

        <section className="container mx-auto px-4">
          <Rates />
        </section>

        <section className="container mx-auto px-4">
          <AvailabilityCalendar />
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* About Owners & Contact Form Section - Side by Side */}
        <section className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <AboutOwners />
          <ContactForm />
        </section>
      </main>
    </div>
  )
}

export default App