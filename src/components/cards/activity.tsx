import Button from "../button";

interface ActivityCardProps {
    title: string;
    description: string;
    btnText: string;
    bgColor: string;
    btnColor?: string;
    btnBgColor?: string;
    textColor?: string;
    titleColor?: string;
  
}

export default function ActivityCard({title, description, btnText, bgColor, btnColor, btnBgColor, textColor, titleColor}: ActivityCardProps) {
  return (
    <div className="p-6 px-4  rounded-[4px] text-white bg-[#000031] lg:max-w-[20rem] md:max-w-[20rem]"
        style={{
            backgroundColor: bgColor,
  
        }}
    >
      <h3 className="text-xl font-bold mb-3"
        style={{
            color: titleColor
        }}
      >{title}</h3>
      <p className="my-4" style={{color: textColor}}>
        {description}
      </p>
      <Button className="mt-8 w-full !p-3.5" style={{color: btnColor, background: btnBgColor}}>{btnText}</Button>
    </div>
  );
}
