import {
  BedIcon,
  CalenderIcon,
  HotelIcon,
  LocationIcon,
  RateIcon,
} from "../../assets/svgs";
import BookingCard from "../cards/booking";
import IteneraryCard from "../cards/itenerary";
import ReusableLabel from "./label";
import PriceLabel from "./price";

type IMAGES = string[];

type FACILITIES = {
  icon: React.ReactNode;
  text: string;
};

type BOOKINGITEMS = {
  images?: IMAGES;
  title: string;
  address: string;
  rate: string;
  room_size: string;
  amount: string;
  total_amount: string;
  price_description: string;
  facilities: FACILITIES[];
  check_in: string;
  check_out: string;
};

interface FLIGHTFRAMEPROPS {
  onShowHotelDetails: () => void;
  onShowPriceDetails: () => void;
  onEditDetails: () => void;
  bookingItems: BOOKINGITEMS[];
}

export default function ({
  bookingItems,
  onEditDetails,
  onShowHotelDetails,
  onShowPriceDetails,
}: FLIGHTFRAMEPROPS) {
  const clickableClass = "text-clrPrimary font-medium cursor-pointer";
  return (
    <IteneraryCard
      headingText="Hotels"
      headingIcon={<HotelIcon color="#ffffff" />}
      headingBtnText="Add Hotels"
      bgColor="#344054"
      headTextColor="#ffffff"
      headingBtnColor="#1D2433"
      className="mt-6 flex flex-col gap-5"
    >
      {bookingItems?.map((bookingItem, index) => {
        const {
          images,
          title,
          address,
          rate,
          room_size,
          amount,
          total_amount,
          price_description,
          facilities,
          check_in,
          check_out,
        } = bookingItem;
        return (
          <BookingCard key={index}>
            <div className="lg:flex  row pl-5 py-5">
              <div className="w-fit">
                {images?.map((image, index) => {
                  return (
                    <img
                      key={index}
                      src={image}
                      alt="hotel"
                      className="lg:w-[232px] md:w-[232px] w-full p-5 lg:p-0 md:p-0 object-cover h-full rounded-[4px]"
                    />
                  );
                })}
              </div>
              <div className="w-full">
                <div className="lg:flex md:flex row gap-20 items-center justify-between border-b border-[#E4E7EC] px-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-[#1D2433] text-lg font-semibold">
                        {title}
                      </h4>
                      <div className="flex gap-1 items-center">
                        <span className="text-base font-medium lg:w-[445px] md:w-[445px] min-w-fit">
                          {address}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="flex gap-2 items-center">
                          <LocationIcon />
                          <p className="text-[#0D6EFD] font-medium text-base">
                            Show in map
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <RateIcon />
                          <p className="text-[#676E7E] font-medium text-base">
                            {rate}
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <BedIcon />
                          <p className="text-[#676E7E] font-medium text-base">
                            {room_size}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <PriceLabel
                    amount={amount}
                    total={total_amount}
                    description={price_description}
                  />
                </div>

                <div className=" lg:flex md:flex row justify-between items-center border-b border-[#E4E7EC]">
                  <div className="flex  p-4 px-6 gap-4">
                    <span className="text-[#647995] font-medium">
                      Facilities:{" "}
                    </span>
                    <div className="flex ">
                      <div className="flex items-center gap-4">
                        {facilities.map((item) => (
                          <ReusableLabel
                            {...item}
                            className="!text-[#647995] flex items-center gap-1"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:flex md:flex lg:space-y-0 space-y-2 lg:my-0 my-3 row gap-4 items-center px-6">
                    <div className="flex gap-2 items-center">
                      <CalenderIcon />
                      <p className="text-[#647995] min-w-fit text-lg font-medium">
                        Check In:{check_in}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CalenderIcon />
                      <p className="text-[#647995] min-w-fit text-lg font-medium">
                        Check Out: {check_out}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 px-6">
                  <div className="flex items-center gap-4">
                    <span
                      className={clickableClass}
                      onClick={onShowHotelDetails}
                    >
                      Hotel details
                    </span>
                    <span
                      className={clickableClass}
                      onClick={onShowPriceDetails}
                    >
                      Price details
                    </span>
                  </div>
                  <span className={clickableClass} onClick={onEditDetails}>
                    Edit details
                  </span>
                </div>
              </div>
            </div>
          </BookingCard>
        );
      })}
    </IteneraryCard>
  );
}
