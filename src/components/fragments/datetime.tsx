
interface DateTimeLabelProps {
    date: string;
    time: string;
}

export default function DateTimeLabel({date, time}: DateTimeLabelProps) {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-[#1D2433] text-lg font-semibold">{date}</h4>
      <span className="text-[#676E7E] text-sm">{time}</span>
    </div>
  );
}
