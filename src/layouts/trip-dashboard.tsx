import {
  BagIcon,
  CuttleryIcon,
  MovieIcon,
  UsbIcon,
  banner,
  back,
  calendar,
  arrow_right,
  ellipses,
  user_add,
  cog,
  profile_img,
  PoolIcon,
  CupIcon,
} from "../assets/svgs";
import { ActivityCard } from "../components";
import FlightFrame from "../components/fragments/flight-frame";
import HotelsFrame from "../components/fragments/hotels-frame";
import HotelsFrameTwo from "../components/fragments/hotels-frame-two";

export default function TripDashboard() {
  const ACTIVITY_LIST = [
    {
      id: 1,
      title: "Activities",
      description:
        "Build, personalize, and optimize your itineraries with our trip planner.",
      btnText: "Add Activities",
      bgColor: "#000031",
      btnColor: "",
      btnBgColor: "",
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      title: "Hotels",
      description:
        "Build, personalize, and optimize your itineraries with our trip planner.",
      btnText: "Add Hotels",
      bgColor: "#E7F0FF",
      btnColor: "",
      btnBgColor: "",
      textColor: "#1D2433",
      titleColor: "#000000",
    },
    {
      id: 3,
      title: "Flights",
      description:
        "Build, personalize, and optimize your itineraries with our trip planner.",
      btnText: "Add Flights",
      bgColor: "#0D6EFD",
      btnColor: "#0D6EFD",
      btnBgColor: "#ffffff",
      textColor: "",
    },
  ];

  const FACILITY_LIST = [
    {
      icon: <BagIcon />,
      text: "Baggage: 20kg, Cabin Baggage: 8kg",
    },
    {
      icon: <MovieIcon />,
      text: "In flight entertainment",
    },
    {
      icon: <CuttleryIcon />,
      text: "In flight meal",
    },
    {
      icon: <UsbIcon />,
      text: "USB Port",
    },
  ];

  const OTHER_FACILITIES_DETAILS = [
    {
      icon: <PoolIcon />,
      text: "Pool",
    },
    {
      icon: <CupIcon />,
      text: "Bar",
    },
  ];

  const FLIGHT_ITINERARIES_DETAILS = [
    {
      header: "American Airlines",
      flight_code: "AA-829",
      flight_type: "First Class",
      duration: "1h 45m",
      start_location: "LOS",
      end_location: "SIN",
      amount: "123,450.00",
      facilities: FACILITY_LIST,
      departure_time: "08:35",
      departure_date: "Sun, 20 Aug",
      arrival_time: "09:55",
      arrival_date: "Sun, 20 Aug",
    },

    {
      header: "American Airlines",
      flight_code: "AA-829",
      flight_type: "First Class",
      duration: "1h 45m",
      start_location: "LOS",
      end_location: "SIN",
      amount: "123,450.00",
      facilities: FACILITY_LIST,
      departure_time: "08:35",
      departure_date: "Sun, 20 Aug",
      arrival_time: "09:55",
      arrival_date: "Sun, 20 Aug",
    },
  ];

  const HOTEL_ITINERARIES_DETAILS = [
    {
      images: [
        "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      ],
      title: "Riviera Resort, Lekki",
      address:
        "18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1",
      rate: "8.5 (436)",
      room_size: "King size room",
      amount: "123,450.00",
      total_amount: "560,000",
      price_description: "1 room x 10 nights incl. taxes",
      facilities: OTHER_FACILITIES_DETAILS,
      check_in: "20-04-2024",
      check_out: "20-04-2024",
    },
    {
      images: [
        "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      ],
      title: "Riviera Resort, Lekki",
      address:
        "18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1",
      rate: "8.5 (436)",
      room_size: "King size room",
      amount: "123,450.00",
      total_amount: "560,000",
      price_description: "1 room x 10 nights incl. taxes",
      facilities: OTHER_FACILITIES_DETAILS,
      check_in: "20-04-2024",
      check_out: "20-04-2024",
    },
  ];

  const HOTEL_ITINERARIES_DETAILS_TWO = [
    {
      images: [
        "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      ],
      title: "The Museum of Modern Art",
      description:
        "Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant",
      rate: "4.5 (436)",
      time: "1 hour",
      amount: "123,450.00",
      price_description: "10:30 AM on Mar 19",
    },
    {
      images: [
        "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      ],
      title: "The Museum of Modern Art",
      description:
        "Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant",
      rate: "4.5 (436)",
      time: "1 hour",
      amount: "123,450.00",
      price_description: "10:30 AM on Mar 19",
    },
    {
      images: [
        "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      ],
      title: "The Museum of Modern Art",
      description:
        "Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant",
      rate: "4.5 (436)",
      time: "1 hour",
      amount: "123,450.00",
      price_description: "10:30 AM on Mar 19",
    },
  ];

  const topSection = (
    <>
      <div className="relative">
        <img src={banner} alt="Dashboard Banner" />
        <div className="group absolute left-8 top-8 p-4 bg-white bg-opacity-20 cursor-pointer ">
          <img src={back} className="group-hover:-translate-x-1 transition-all" />
        </div>
      </div>

      <div className="flex justify-between items-center py-4">
        {/* left wrap */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-[#7A4504] bg-[#FEF4E6] text-xs flex items-center p-1 gap-1 font-medium w-fit">
            <img src={calendar} alt="Calendar" /> <span> 21 March 2024</span>{" "}
            <img src={arrow_right} alt="arrow_right" />
            <span> 21 April 2024</span>
          </p>
          <h3 className="font-bold text-lg">Bahamas Family Trip</h3>
          <p className="text-[#676E7E] text-xs">
            New York, United States of America | Solo Trip
          </p>
        </div>
        {/* right */}
        <div className="py-4 flex flex-col items-center ">
          <div className="flex items-center justify-center gap-3">
            <div className="bg-[#E7F0FF] w-36 h-8 grid place-content-center rounded-[4px]">
              <img
                src={user_add}
                alt="Add Trip"
                className="cursor-pointer w-[1rem]"
              />
            </div>
            <img src={ellipses} alt="see more" className="cursor-pointer" />
          </div>

          <div className="mt-7 flex justify-center items-center gap-6 mr-">
            <img
              src={profile_img}
              alt="Dummy Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="w-10 h-10 relative rounded-full border grid place-content-center before:absolute before:w-2/3 before:h-[.15rem] before:right-[100%] before:top-1/2 before:bg-gray-200">
              <img src={cog} alt="Settings Arrow" />
            </span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <main
      id="main"
      className=" lg:w-[calc(100%-350px)] w-full overflow-auto bg-[#F0F2F5]  right-0 absolute "
    >
      <section className="m-5 bg-white p-5 min-h-screen">
        {topSection}
        <div className="lg:flex md:flex  row space-y-3 lg:space-y-0 gap-2">
          {ACTIVITY_LIST.map((item) => (
            <ActivityCard key={item.id} {...item} />
          ))}
        </div>

        <section className="my-20">
          <div className="mb-8 flex flex-col gap-1">
            <h4 className="text-[#1D2433] text-lg font-semibold">
              Trip itineraries
            </h4>
            <span className="text-[#647995] text-sm">
              Your trip itineraries are placed here
            </span>
          </div>

          <FlightFrame
            bookingItems={FLIGHT_ITINERARIES_DETAILS}
            onShowFlightDetails={() => null}
            onShowPriceDetails={() => null}
            onEditDetails={() => null}
          />
          <HotelsFrame
            bookingItems={HOTEL_ITINERARIES_DETAILS}
            onShowHotelDetails={() => null}
            onShowPriceDetails={() => null}
            onEditDetails={() => null}
          />

          <HotelsFrameTwo
            bookingItems={HOTEL_ITINERARIES_DETAILS_TWO}
            onShowHotelDetails={() => null}
            onShowPriceDetails={() => null}
            onEditDetails={() => null}
          />
        </section>
      </section>
    </main>
  );
}
