import {
  ActivitiesIcon,
  AngleDown,
  AngleUp,
  ClockIcon,
  LocationIcon,
  RateIcon,
} from "../../assets/svgs";
import BookingCard from "../cards/booking";
import IteneraryCard from "../cards/itenerary";
import ReusableLabel from "./label";
import PriceLabel from "./price";

type IMAGES = string[];

type BOOKINGITEMS = {
  images: IMAGES;
  title: string;
  description: string;
  time: string;
  rate: string;
  amount: string;
  price_description: string;
};

interface FLIGHTFRAMEPROPS {
  onShowHotelDetails: () => void;
  onShowPriceDetails: () => void;
  onEditDetails: () => void;
  bookingItems: BOOKINGITEMS[];
}

export default function HotelsFrameTwo({
  bookingItems,
  onEditDetails,
  onShowHotelDetails,
  onShowPriceDetails,
}: FLIGHTFRAMEPROPS) {
  const clickableClass = "text-clrPrimary font-medium cursor-pointer";

  return (
    <IteneraryCard
      headingText="Hotels"
      headingIcon={<ActivitiesIcon color="#ffffff" />}
      headingBtnText="Add Activities"
      bgColor="#0054E4"
      headTextColor="#ffffff"
      headingBtnColor="#0D6EFD"
      className="mt-6 flex flex-col gap-5"
    >
      {bookingItems?.map((bookingItem, index) => {
        const {
          images,
          title,
          description,
          time,
          rate,
          amount,
          price_description,
        } = bookingItem;
        return (
          <BookingCard key={index}>
            <div className="lg:flex row pl-5 py-5">
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
                        <span className="text-base font-medium lg:w-[445px] md:w-[w-445px] w-full">
                          {description}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="flex gap-2 items-center">
                          <LocationIcon />
                          <p className={clickableClass}>Directions</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <RateIcon />
                          <p className="text-[#676E7E] font-medium text-base">
                            {rate}
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <ClockIcon />
                          <p className="text-[#676E7E] font-medium text-base">
                            {time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <PriceLabel amount={amount} description={price_description} />
                </div>

                <div className=" lg:flex md:flex row justify-between items-end py-2  border-b border-[#E4E7EC]">
                  <div className="lg:flex md:flex row  p-4 px-6 gap-4">
                    <span className="text-[#647995] font-medium">
                      What's Included:
                    </span>
                    <div className="lg:flex md:flex row ">
                      <div className="flex items-center gap-4">
                        <div>
                          <ReusableLabel
                            text="Admission to the Empire State Building"
                            textClass="text-[#647995] !font-medium"
                          />
                        </div>
                        <p className={clickableClass}>See more</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 flex gap-4 items-center">
                    <div className="bg-[#0A369D] cursor-pointer hover:-translate-y-1 transition-all duration-300 py-[4px] px-[8px] rounded-[4px] ">
                      <p className="text-white font-medium text-xs">
                        Day 1-(2)
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <AngleUp className="cursor-pointer" />
                      <AngleDown className="cursor-pointer" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 px-6">
                  <div className="flex items-center gap-4">
                    <span
                      className={clickableClass}
                      onClick={onShowHotelDetails}
                    >
                      Activity details
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
