import { motion } from "framer-motion";
import { Star, Phone, Globe } from "lucide-react";

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Why Choose EzFlights?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="text-center bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-indigo-100 rounded-full p-4 inline-block mb-4">
              <Star className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Luxury Experience</h3>
            <p className="text-indigo-500">Indulge in premium services and amenities throughout your journey.</p>
          </motion.div>
          <motion.div
            className="text-center bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-indigo-100 rounded-full p-4 inline-block mb-4">
              <Globe className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Exclusive Destinations</h3>
            <p className="text-indigo-500">Access to unique and luxurious locations around the world.</p>
          </motion.div>
          <motion.div
            className="text-center bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-indigo-100 rounded-full p-4 inline-block mb-4">
              <Phone className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">24/7 Concierge</h3>
            <p className="text-indigo-500">Personal assistance available anytime, anywhere for our esteemed clients.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
