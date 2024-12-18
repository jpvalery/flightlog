import { HomeIcon, UserCircleIcon } from "@heroicons/react/outline";
import NextLink from "next/link";

export default function MenuIcons() {
  return (
    <div className="flex items-center gap-4">
      <NextLink href="/" legacyBehavior>
        <HomeIcon className="h-6 w-6 hover:cursor-pointer hover:text-zinc-500" />
      </NextLink>
      <NextLink href="/stats" legacyBehavior>
        <UserCircleIcon className="h-6 w-6 hover:cursor-pointer hover:text-zinc-500" />
      </NextLink>
    </div>
  );
}
