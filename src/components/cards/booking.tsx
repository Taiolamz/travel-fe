import { CancelIcon } from "../../assets/svgs";

interface BookingCardProps {
    children: React.ReactNode
}

export default function BookingCard({children}: BookingCardProps) {
  return (
    <div className="flex justify-between overflow-auto bg-white rounded-[4px] ">
      <div className="w-full">
        {children}
      </div>

      <div className=" grid p-1 place-content-center bg-[#FBEAE9] max-h-full lg:w-10 md:w-10 cursor-pointer">
        <CancelIcon />
      </div>
    </div>
  );
}
