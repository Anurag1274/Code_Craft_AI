import { Button } from "@/components/ui/button";
import { ArrowRight, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      {/* HEADER  */}
      <div className="flex justify-between items-center p-6 border border-b-2">
        <Link href={"/"}>
          <div className="flex justify-center items-center">
            <Image src={"/logo.svg"} width={60} height={60} alt="logo" />
            <h1 className="font-bold text-lg">Code Craft AI</h1>
          </div>
        </Link>

        <Link href={"/dashboard"}>
          <div className="flex justify-center items-center">
            <User2Icon />
            <h1 className="font-md">Get Started</h1>
          </div>
        </Link>
      </div>

      {/* MAIN PAGE  */}

      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="flex items-center justify-center flex-col mt-24 gap-2">
          <span className="text-primary text-6xl font-bold ">Code Craft</span>
          <span className="text-6xl text-black font-bold"> AI </span>
          <p className="text-gray-500">
            Transform development with CodeCraft AI, your AI-powered assistant
            for efficient and high-quality code creation.
          </p>

          <div className="flex gap-6 mt-8">
            <a
              href="/dashboard"
              className="inline-flex justify-center items-center 
      gap-x-3 text-center bg-gradient-to-tl from-blue-600
       to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800 p-6"
            >
              Get Started <ArrowRight />{" "}
            </a>

            <a
              href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFaO5hx-JY22QAAAZP4uNjgQJCEgLaCVCTBEyRbe-hpJBb9ImLcGljJLoBCMDd-7buZuwb27BSYLO4CanwJd1_mfRaDiLSjxJ48aF8LPet1BQ8mIRNIvlquSy4Pua2iGWMoIvY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fanurag-gajbhiye-747404295%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
              target="_blank"
              className="inline-flex justify-center items-center 
      gap-x-3 text-center bg-gradient-to-tl from-blue-600
       to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800 p-6"
            >
              Contact Us <ArrowRight />{" "}
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER  */}

      <div className="border-t-2 absolute bottom-0 flex justify-between items-center w-full p-12">
        <div>
          <h1>© 2024 Code Craft AI Inc. All rights reserved.</h1>
        </div>

        <div className="flex gap-4">
          <a href="/" className="hover:text-gray-500">
            Terms & Services
          </a>
          <a href="/" className="hover:text-gray-500">
            Privacy
          </a>
        </div>
      </div>
    </div>
  );
}
