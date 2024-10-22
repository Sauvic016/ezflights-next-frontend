"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Plane, ArrowUpDown, ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import Link from "next/link";

// Mock data for flights
const flights = [
  {
    id: 1,
    airline: "Indigo",
    departure: "New York",
    arrival: "Paris",
    departureTime: "09:00 AM",
    arrivalTime: "10:30 PM",
    price: 1299,
    duration: "8h 30m",
  },
  {
    id: 2,
    airline: "Indigo",
    departure: "London",
    arrival: "Tokyo",
    departureTime: "11:00 AM",
    arrivalTime: "07:00 AM",
    price: 1799,
    duration: "11h 00m",
  },
  {
    id: 3,
    airline: "Indigo",
    departure: "Los Angeles",
    arrival: "Sydney",
    departureTime: "08:00 PM",
    arrivalTime: "06:00 AM",
    price: 1599,
    duration: "15h 00m",
  },
  {
    id: 4,
    airline: "Indigo",
    departure: "Dubai",
    arrival: "New York",
    departureTime: "02:00 PM",
    arrivalTime: "08:00 PM",
    price: 1399,
    duration: "14h 00m",
  },
  {
    id: 5,
    airline: "AirIndia",
    departure: "Singapore",
    arrival: "London",
    departureTime: "10:00 PM",
    arrivalTime: "05:00 AM",
    price: 1699,
    duration: "13h 00m",
  },
  {
    id: 6,
    airline: "AirIndia",
    departure: "Paris",
    arrival: "New York",
    departureTime: "01:00 PM",
    arrivalTime: "03:30 PM",
    price: 1249,
    duration: "8h 30m",
  },
  {
    id: 7,
    airline: "AirIndia",
    departure: "Tokyo",
    arrival: "Los Angeles",
    departureTime: "09:00 AM",
    arrivalTime: "03:00 PM",
    price: 1649,
    duration: "11h 00m",
  },
  {
    id: 8,
    airline: "AirIndia",
    departure: "Sydney",
    arrival: "Singapore",
    departureTime: "11:00 PM",
    arrivalTime: "05:00 AM",
    price: 1199,
    duration: "8h 00m",
  },
];

export default function FlightList() {
  const [sortBy, setSortBy] = useState<keyof (typeof flights)[0]>("price");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filterAirline, setFilterAirline] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sortedAndFilteredFlights = useMemo(() => {
    return flights
      .filter((flight) => filterAirline === "" || flight.airline.toLowerCase().includes(filterAirline.toLowerCase()))
      .sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
  }, [filterAirline, sortBy, sortOrder]);

  const recommendedFlight = useMemo(() => {
    return sortedAndFilteredFlights.reduce(
      (min, flight) => (flight.price < min.price ? flight : min),
      sortedAndFilteredFlights[0]
    );
  }, [sortedAndFilteredFlights]);

  const totalPages = Math.ceil((sortedAndFilteredFlights.length - 1) / itemsPerPage);
  const paginatedFlights = sortedAndFilteredFlights
    .filter((flight) => flight.id !== recommendedFlight.id)
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // const handleSort = (column: keyof (typeof flights)[0]) => {
  //   if (sortBy === column) {
  //     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  //   } else {
  //     setSortBy(column);
  //     setSortOrder("asc");
  //   }
  // };

  return (
    <main className="container mx-auto px-4 py-8 md:py-36">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-indigo-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Available Flights
      </motion.h1>

      <div className="mb-6 flex flex-wrap gap-4 items-end">
        <div>
          <Label htmlFor="filterAirline" className="text-indigo-700">
            Filter by Airline
          </Label>
          <Input
            id="filterAirline"
            value={filterAirline}
            onChange={(e) => setFilterAirline(e.target.value)}
            placeholder="Enter airline name"
            className="bg-white/50 border-indigo-200"
          />
        </div>
        <div>
          <Label htmlFor="sortBy" className="text-indigo-700">
            Sort by
          </Label>
          {/* <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-white/50 border-indigo-200">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="departureTime">Departure Time</SelectItem>
                <SelectItem value="arrivalTime">Arrival Time</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select> */}
          <Select value={sortBy} onValueChange={(value) => setSortBy(value as keyof (typeof flights)[0])}>
            <SelectTrigger className="bg-white/50 border-indigo-200">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="departureTime">Departure Time</SelectItem>
              <SelectItem value="arrivalTime">Arrival Time</SelectItem>
              <SelectItem value="duration">Duration</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="outline"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
        >
          {sortOrder === "asc" ? "Ascending" : "Descending"}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-6">
        <Card className="bg-gradient-to-r from-[#4f79dbeb] to-[#8459cac3] text-white">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recommended Flight</span>
              <Badge variant="secondary" className="bg-white text-indigo-600">
                Best Deal
              </Badge>
            </CardTitle>
            <CardDescription className="text-indigo-100">Lowest price available</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Plane className="h-8 w-8" />
                <div>
                  <p className="font-semibold">{recommendedFlight.airline}</p>
                  <p className="text-sm">
                    {recommendedFlight.departure} to {recommendedFlight.arrival}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">${recommendedFlight.price}</p>
                <p className="text-sm">{recommendedFlight.duration}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <div>
              <p className="text-sm">
                <Clock className="inline mr-1 h-4 w-4" /> {recommendedFlight.departureTime} -{" "}
                {recommendedFlight.arrivalTime}
              </p>
            </div>
            <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-indigo-100">
              Book Now
            </Button>
          </CardFooter>
        </Card>

        {paginatedFlights.map((flight) => (
          <Card key={flight.id} className="bg-white/80 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{flight.airline}</span>
                <Badge variant="outline" className="text-indigo-600 border-indigo-600">
                  {flight.duration}
                </Badge>
              </CardTitle>
              <CardDescription>
                {flight.departure} to {flight.arrival}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-indigo-600" /> {flight.departureTime} - {flight.arrivalTime}
                  </p>
                  <p className="flex items-center mt-2">
                    <MapPin className="mr-2 h-4 w-4 text-indigo-600" /> {flight.departure} - {flight.arrival}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-indigo-600">${flight.price}</p>
                  <p className="text-sm text-gray-500">per person</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <span className="text-indigo-800">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}
