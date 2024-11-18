import { cn } from "../../lib/utils";
import Button from "../button";
import ReusableLabel from "../fragments/label";

interface IteneraryCardProps {
  headingText: string;
  headTextColor?: string;
  headingIcon: React.ReactNode;
  headingBtnText: string;
  headingBtnColor?: string;
  bgColor?: string;
  className?: string;
  headingBtnClick?: () => void;
  children: React.ReactNode
}

export default function IteneraryCard({
  headingText,
  headTextColor,
  headingIcon,
  headingBtnText,
  headingBtnColor,
  bgColor,
  className,
  children
}: IteneraryCardProps) {
  return (
    <div className={cn(
      "bg-[#F0F2F5] rounded-[4px] p-6 px-4",
      className
    )} style={{background: bgColor}}>
      <div className="mb-6 flex justify-between items-center">
        <ReusableLabel icon={headingIcon} text={headingText} style={{color: headTextColor}}/>
        <Button
          className="text-sm bg-white text-clrPrimary font-medium px-5"
          style={{ color: headingBtnColor }}
        >
          {headingBtnText}
        </Button>
      </div>
      {children}
    </div>
  );
}
