import {
  AirlineIcon,
  PlaneDownIcon,
  PlaneIcon,
  PlaneUpIcon,
} from "../../assets/svgs";
import BookingCard from "../cards/booking";
import IteneraryCard from "../cards/itenerary";
import DateTimeLabel from "./datetime";
import ReusableLabel from "./label";
import PriceLabel from "./price";

type FACILITIES = {
  icon: React.ReactNode;
  text: string;
};

type BOOKINGITEMS = {
  header: string;
  flight_code: string;
  flight_type: string;
  duration: string;
  start_location: string;
  end_location: string;
  amount: string;
  facilities: FACILITIES[];
  departure_time: string;
  departure_date: string;
  arrival_time: string;
  arrival_date: string;
};

interface FLIGHTFRAMEPROPS {
  onShowFlightDetails: () => void;
  onShowPriceDetails: () => void;
  onEditDetails: () => void;
  bookingItems: BOOKINGITEMS[];
}

export default function FlightFrame({
  bookingItems,
  onEditDetails,
  onShowFlightDetails,
  onShowPriceDetails,
}: FLIGHTFRAMEPROPS) {
  const clickableClass = "text-clrPrimary font-medium cursor-pointer";
  return (
    <IteneraryCard
      headingText="Flight"
      headingIcon={<PlaneIcon />}
      headingBtnText="Add Flights"
      bgColor="#F0F2F5"
      className="flex flex-col gap-5"
    >
      {bookingItems?.map((bookingItem, index) => {
        const {
          header,
          flight_code,
          flight_type,
          departure_time,
          departure_date,
          duration,
          start_location,
          arrival_time,
          arrival_date,
          amount,
          facilities,
          end_location,
        } = bookingItem;
        return (
          <BookingCard key={index}>
            <>
              <div className="lg:flex row gap-20 items-center justify-between border-b border-[#E4E7EC] p-4 px-6">
                <div className="flex  items-center gap-2">
                  <AirlineIcon />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[#1D2433] text-lg font-semibold">
                      {header}
                    </h4>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#676E7E]">{flight_code}</span>
                      <span className="w-[.15rem] h-[.15rem] bg-gray-500 rounded-full"></span>
                      <span className="bg-[#0A369D] text-[.7rem] px-2 text-white rounded-[4px] grid place-content-center">
                        {flight_type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:flex lg:mt-0 mt-4 row justify-between items-center gap-10">
                  <DateTimeLabel time={departure_time} date={departure_date} />
                  <div className="lg:w-[445px] w-full">
                    <div className="flex justify-between items-center">
                      <PlaneUpIcon />
                      <span className="text-[#676E7E] text-sm font-medium">
                        Duration: {duration}
                      </span>
                      <PlaneDownIcon />
                    </div>
                    <span className="block relative w-full h-2 bg-[#E7F0FF] rounded-[8px] my-4 before:absolute before:w-[30%] before:bg-clrPrimary before:h-full before:left-0 before:right-0 before:m-auto before:rounded-[8px]"></span>
                    <div className="flex justify-between items-center">
                      <span className="text-[#1D2433] text-sm font-medium">
                        {start_location}
                      </span>
                      <span className="text-[#676E7E] text-sm font-medium">
                        Direct
                      </span>
                      <span className="text-[#1D2433] text-sm font-medium">
                        {end_location}
                      </span>
                    </div>
                  </div>
                  <DateTimeLabel time={arrival_time} date={arrival_date} />
                </div>
                <PriceLabel amount={amount} />
              </div>

              <div className="border-b border-[#E4E7EC] w-full overflow-auto">
                <div className="flex p-4 px-6 py-6 gap-4">
                  <span className="text-[#647995] font-medium">
                    Facilities:{" "}
                  </span>
                  <div className="flex items-center w-full gap-4">
                    {facilities.map((item) => (
                      <ReusableLabel
                        {...item}
                        className="!text-[#647995] min-w-fit flex items-center gap-1"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 px-6">
                <div className="flex items-center gap-4">
                  <span
                    className={clickableClass}
                    onClick={onShowFlightDetails}
                  >
                    Flight details
                  </span>
                  <span className={clickableClass} onClick={onShowPriceDetails}>
                    Price details
                  </span>
                </div>
                <span className={clickableClass} onClick={onEditDetails}>
                  Edit details
                </span>
              </div>
            </>
          </BookingCard>
        );
      })}
    </IteneraryCard>
  );
}
