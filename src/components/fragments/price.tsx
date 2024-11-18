import { NairaIcon } from "../../assets/svgs";

interface PriceLabelProps {
    amount: number | string;
    total?: number | string;
    description?: string;
}

export default function PriceLabel({amount, total, description}: PriceLabelProps) {
  return (
    <div className="flex flex-col gap-1 lg:items-end items-start md:items-end lg:mt-0 mt-4 md:mt-0">
      <h2 className="text-[#1D2433] font-semibold text-lg flex justify-end items-center gap-1 ">
        <NairaIcon /> {amount}
      </h2>
     {total && <span className="text-[.65rem] font-medium text-right">Total Price: NGN {total}</span>}
     {description && <span className="text-[.65rem] font-medium text-right">{description}</span>}
    </div>
  );
}
