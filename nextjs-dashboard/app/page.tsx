import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./ui/dashboard/nav-links";
import NavIcons from "./ui/dashboard/nav-icons";

//Landing page for my website
export default function Page() {
  return (
    <main className="flex flex-col">
      <div className=" flex grow flex-col gap-1  items-center">
        <div className="flex justify-center md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/Selfie_nobg_v1.png"
            width={560}
            height={620}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/Selfie_nobg_v1.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
        <p
          className={`${lusitana.className}text-3xl text-blue-100 md:text-6xl md:leading-normal`}
        >
          <strong>Trent Matsushima</strong>
        </p>
      </div>
      <div className="flex flex-row p-6 gap-4 justify-center text-blue-100">
      <NavLinks></NavLinks>
      </div>
      <div className="flex flex-row p-6 gap-4 justify-center text-blue-100">
      <NavIcons></NavIcons>
      </div>
    </main>
  );
}
