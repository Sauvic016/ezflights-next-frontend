"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Services from "@/components/Services";
import FlightSearchComponent from "@/components/FlightSearch";

export default function PremiumFlightBookingLanding() {
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  const [flightType, setFlightType] = useState<"oneWay" | "roundTrip">("oneWay");

  const featuredDestinations = [
    { name: "Paris", image: "/images/paris.jpg", price: "€1,299" },
    { name: "Tokyo", image: "/images/tokyo.jpg", price: "€1,799" },
    { name: "New York", image: "/images/newyork.jpg", price: "€1,499" },
  ];

  useEffect(() => {
    if (returnDate) {
      setFlightType("roundTrip");
    }
  }, [returnDate]);

  const handleFlightTypeChange = (value: "oneWay" | "roundTrip") => {
    setFlightType(value);
    if (value === "oneWay") {
      setReturnDate(undefined);
    }
  };

  return (
    <main>
      <section className="container mx-auto px-4 py-16 md:pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-indigo-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Elevate Your Travel Experience
            </motion.h1>
            <motion.p
              className="text-xl text-indigo-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              EzFlights is your trusted partner in air travel, offering a unique combination of luxury and convenience,
              ensuring every flight is a memorable part of your journey.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href={"#flights"}>
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Start Your Journey <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/plane.jpg"
              alt="Luxury travel destination"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/60 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      <FlightSearchComponent
        flightType={flightType}
        setFlightType={setFlightType}
        handleFlightTypeChange={handleFlightTypeChange}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Exclusive Destinations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                className="bg-white/80 backdrop-blur-md rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={300}
                  height={200}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  // fill
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700">{destination.name}</h3>
                  <p className="text-indigo-500 mb-4">Experience the luxury of {destination.name}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-indigo-700">{destination.price}</span>
                    <Link href={`/book/${destination.name.toLowerCase()}`} passHref legacyBehavior>
                      <Button
                        variant="outline"
                        className="border-indigo-600 text-indigo-500 hover:bg-indigo-600 hover:text-white"
                      >
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Services />
    </main>
  );
}
