import Link from "next/link";

import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  active?: boolean;
  icon: IconType;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  active,
  icon: Icon,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white text-neutral-400 py-1",
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p
        className="
          truncate w-full
        "
      >
        {label}
      </p>
    </Link>
  );
};

export default SidebarItem;
