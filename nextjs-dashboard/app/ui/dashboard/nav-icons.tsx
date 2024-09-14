'use client';


import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from  'clsx';
import { FaGithub, FaLinkedin,  } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md";


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { 
    name: 'Github', 
    href: 'https://github.com/matsusht24',
    icon: FaGithub,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/trent-matsushima/',
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "trentmatsushima@gmail.com",
    icon: MdOutlineEmail,
  },
];

export default function NavIcons() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[42px] grow items-center justify-center rounded-md font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-4",
              {'bg-sky-100 text-blue-600': pathname === link.href,

              },
            )}
          >
          <LinkIcon className="w-full h-full" />
          </Link>
        );
      })}
    </>
  );
}
