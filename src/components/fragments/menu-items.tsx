export default function MenuItem({ icon, label }: { icon: string; label: string }) {
    return (
      <li className="flex flex-col items-center cursor-pointer">
        <img src={icon} alt={label} aria-label={label} className="h-6 w-6" />
        <span className="text-xs">{label}</span>
      </li>
    );
  }
  