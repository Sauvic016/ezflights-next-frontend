import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-300">About EzFlights</h3>
            <p className="text-indigo-100">
              Redefining luxury air travel with unparalleled service, exclusive destinations, and bespoke experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-indigo-100 hover:text-white transition-colors">
                  Private Jets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-indigo-100 hover:text-white transition-colors">
                  Luxury Destinations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-indigo-100 hover:text-white transition-colors">
                  Concierge Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-indigo-100 hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-indigo-300" /> +91 (888) EZ-AIR
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-indigo-300" /> concierge@ezair.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Newsletter</h3>
            <p className="text-indigo-100 mb-2">Subscribe for exclusive offers and travel insights.</p>
            <form className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none bg-indigo-100 border-indigo-700 text-gray-700 placeholder-indigo-300"
              />
              <Button type="submit" className="rounded-l-none bg-indigo-600 hover:bg-indigo-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-800 text-center text-indigo-300">
          <p>&copy; {new Date().getFullYear()} Ezflights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
