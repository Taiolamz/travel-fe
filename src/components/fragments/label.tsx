interface ReusableLabelProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode;
  text: string;
  textClass?: string;
  handleClick?: () => void;

}

export default function ReusableLabel({
  icon,
  text,
  textClass,
  handleClick,
  ...props
}: ReusableLabelProps) {
  return (
    <span
      className="flex items-center text-sm gap-1 font-semibold"
      onClick={handleClick}
      {...props}
    >
     <span> {icon && icon}</span> <span className={textClass}>{text}</span>
    </span>
  );
}
