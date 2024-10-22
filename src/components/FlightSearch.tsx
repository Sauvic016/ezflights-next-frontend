import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type trip = "oneWay" | "roundTrip";

interface FlightProps {
  flightType: string;
  setFlightType: Dispatch<SetStateAction<trip>>;
  handleFlightTypeChange: (val: trip) => void;
  departureDate: Date | undefined;
  setDepartureDate: Dispatch<SetStateAction<Date | undefined>>;
  returnDate: Date | undefined;
  setReturnDate: Dispatch<SetStateAction<Date | undefined>>;
}

const FlightSearchComponent = (props: FlightProps) => (
  <section id="flights" className="py-16 ">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800 mt-12">Find Your Perfect Flight</h2>
      <motion.div
        className="bg-white/80 backdrop-blur-md rounded-lg p-8 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form className="space-y-6">
          <RadioGroup
            defaultValue="oneWay"
            className="flex space-x-4 mb-6"
            value={props.flightType}
            onValueChange={(value: "oneWay" | "roundTrip") => props.handleFlightTypeChange(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="oneWay"
                id="oneWay"
                className="text-indigo-600 border-indigo-600 focus:ring-indigo-600"
              />
              <Label htmlFor="oneWay">One Way</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="roundTrip"
                id="roundTrip"
                className="text-indigo-600 border-indigo-600 focus:ring-indigo-600"
              />
              <Label htmlFor="roundTrip">Round Trip</Label>
            </div>
          </RadioGroup>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div>
              <Label htmlFor="from" className="text-indigo-700">
                From
              </Label>
              <div className="relative">
                <MapPin className="absolute left-5 top-[46%] transform -translate-y-1/2 w-4 h-3 text-indigo-500" />
                <Input
                  id="from"
                  placeholder="Departure City"
                  className="pl-10 bg-white/50 border-indigo-200 placeholder:flex items-center"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="to" className="text-indigo-700">
                To
              </Label>
              <div className="relative">
                <MapPin className="absolute left-5 top-[46%] transform -translate-y-1/2 w-4 h-3 text-indigo-500" />
                <Input id="to" placeholder="Arrival City" className="pl-10 bg-white/50 border-indigo-200" />
              </div>
            </div>
            <div>
              <Label htmlFor="departure" className="text-indigo-700">
                Departure
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full  text-left font-normal bg-white/50 border-indigo-200 ${
                      !props.departureDate && "text-indigo-400"
                    }`}
                  >
                    <CalendarIcon />
                    {props.departureDate ? (
                      format(props.departureDate, "PPP")
                    ) : (
                      <span className="pt-1">Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={props.departureDate}
                    onSelect={props.setDepartureDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="return" className="text-indigo-700">
                Return
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full text-left font-normal bg-white/50 border-indigo-200 ${
                      !props.returnDate && "text-indigo-400"
                    }`}
                  >
                    <CalendarIcon />
                    {props.returnDate ? format(props.returnDate, "PPP") : <span className="pt-1">Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={props.returnDate}
                    onSelect={(date) => {
                      props.setReturnDate(date);
                      if (date) {
                        props.setFlightType("roundTrip");
                      }
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <Label>&nbsp;</Label>
              <Link href={"/flights"}>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Search className="mr-2 h-4 w-4" /> Search Flights
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  </section>
);

// const FlightSearch = ({flightType,handleFlightTypeChange,ref}:{}) => {
//   return (
// <section ref={findFlightRef} id="flights" className="py-16 ">
//   <div className="container mx-auto px-4">
//     <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800 mt-12">Find Your Perfect Flight</h2>
//     <motion.div
//       className="bg-white/80 backdrop-blur-md rounded-lg p-8 shadow-xl"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <form className="space-y-6">
//         <RadioGroup
//           defaultValue="oneWay"
//           className="flex space-x-4 mb-6"
//           value={flightType}
//           onValueChange={(value: "oneWay" | "roundTrip") => handleFlightTypeChange(value)}
//         >
//           <div className="flex items-center space-x-2">
//             <RadioGroupItem
//               value="oneWay"
//               id="oneWay"
//               className="text-indigo-600 border-indigo-600 focus:ring-indigo-600"
//             />
//             <Label htmlFor="oneWay">One Way</Label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <RadioGroupItem
//               value="roundTrip"
//               id="roundTrip"
//               className="text-indigo-600 border-indigo-600 focus:ring-indigo-600"
//             />
//             <Label htmlFor="roundTrip">Round Trip</Label>
//           </div>
//         </RadioGroup>
//         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
//           <div>
//             <Label htmlFor="from" className="text-indigo-700">
//               From
//             </Label>
//             <div className="relative">
//               <MapPin className="absolute left-5 top-[46%] transform -translate-y-1/2 w-4 h-3 text-indigo-500" />
//               <Input
//                 id="from"
//                 placeholder="Departure City"
//                 className="pl-10 bg-white/50 border-indigo-200 placeholder:flex items-center"
//               />
//             </div>
//           </div>
//           <div>
//             <Label htmlFor="to" className="text-indigo-700">
//               To
//             </Label>
//             <div className="relative">
//               <MapPin className="absolute left-5 top-[46%] transform -translate-y-1/2 w-4 h-3 text-indigo-500" />
//               <Input id="to" placeholder="Arrival City" className="pl-10 bg-white/50 border-indigo-200" />
//             </div>
//           </div>
//           <div>
//             <Label htmlFor="departure" className="text-indigo-700">
//               Departure
//             </Label>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button
//                   variant={"outline"}
//                   className={`w-full  text-left font-normal bg-white/50 border-indigo-200 ${
//                     !departureDate && "text-indigo-400"
//                   }`}
//                 >
//                   <CalendarIcon />
//                   {departureDate ? format(departureDate, "PPP") : <span className="pt-1">Pick a date</span>}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0" align="start">
//                 <CalendarComponent
//                   mode="single"
//                   selected={departureDate}
//                   onSelect={setDepartureDate}
//                   initialFocus
//                 />
//               </PopoverContent>
//             </Popover>
//           </div>
//           <div>
//             <Label htmlFor="return" className="text-indigo-700">
//               Return
//             </Label>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button
//                   variant={"outline"}
//                   className={`w-full text-left font-normal bg-white/50 border-indigo-200 ${
//                     !returnDate && "text-indigo-400"
//                   }`}
//                 >
//                   <CalendarIcon />
//                   {returnDate ? format(returnDate, "PPP") : <span className="pt-1">Pick a date</span>}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0" align="start">
//                 <CalendarComponent
//                   mode="single"
//                   selected={returnDate}
//                   onSelect={(date) => {
//                     setReturnDate(date);
//                     if (date) {
//                       setFlightType("roundTrip");
//                     }
//                   }}
//                   initialFocus
//                 />
//               </PopoverContent>
//             </Popover>
//           </div>
//           <div className="md:col-span-2 lg:col-span-1">
//             <Label>&nbsp;</Label>
//             <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
//               <Search className="mr-2 h-4 w-4" /> Search Flights
//             </Button>
//           </div>
//         </div>
//       </form>
//     </motion.div>
//   </div>
// </section>
//   );
// };

export default FlightSearchComponent;
