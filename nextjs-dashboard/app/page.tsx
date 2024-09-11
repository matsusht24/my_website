import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import {lusitana} from '@/app/ui/fonts';
import Image from 'next/image'

//Landing page for my website



export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-blue-100">
      <div className="mt-4 flex grow flex-col gap-1  items-center">
          <div className="flex justify-center p-4 md:w-3/5 md:px-28 md:py-12">
          
          <Image
            src="/Selfie_nobg.png"
            width={900}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            />
          <Image
            src="/Selfie_nobg.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
            />
        </div>
        <p className={`${lusitana.className}text-3xl text-white-100 md:text-6xl md:leading-normal`}>
            <strong>Trent Matsushima</strong> 
          </p>
      </div>
      <div className='flex flex-row p-6 gap-4 justify-center text-blue-300'>
        <p>Projects</p>
        <p>Experience</p>
      </div>
    </main>
  );
}
