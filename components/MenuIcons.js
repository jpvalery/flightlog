import NextLink from "next/link";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/outline";

export default function MenuIcons() {
  return (
    <div className="flex items-center gap-4">
      <NextLink href="/">
        <HomeIcon className="w-6 h-6 hover:cursor-pointer hover:text-zinc-500" />
      </NextLink>
      <NextLink href="/">
        <UserCircleIcon className="w-6 h-6 hover:cursor-pointer hover:text-zinc-500" />
      </NextLink>
    </div>
  );
}
