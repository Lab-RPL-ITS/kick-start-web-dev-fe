import Image from "next/image";
import Link from "next/link";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";

export default function Home() {
  return (
    <main>
      <header className="bg-[#FE6E06] w-full py-3">
        <div className="w-11/12 max-w-[1320px] m-auto flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo-RPL.png"
              width={65}
              height={65}
              alt="Logo"
              className="w-[45px] sm:w-[65px]"
            />
          </Link>
          <div className="flex gap-5 sm:gap-12">
            <a href="#" className="font-bold sm:text-lg">
              Home
            </a>
            <a href="#" className="font-bold sm:text-lg">
              About
            </a>
            <a href="#" className="font-bold sm:text-lg">
              Service
            </a>
          </div>
        </div>
      </header>
      <section className="bg-[#EFAF64]">
        <div className="w-11/12 max-w-[1320px] mx-auto flex sm:flex-row flex-col">
          <div className="sm:w-1/2 pb-5 pt-16 sm:py-20 lg:py-40">
            <h1 className="text-5xl lg:text-[85px] leading-[55px] lg:leading-[80px]">
              Design <br /> what you love
            </h1>
            <p className="mt-8 lg:mt-16 lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit
              vulputate.consectetur adipiscing elit.
            </p>
            <Link href="/todo">
              <button className="py-2 lg:py-4 text-sm lg:text-lg px-6 lg:px-9 bg-[#FE6E06] rounded-full mt-5 lg:mt-10">
                Get Started
              </button>
            </Link>
            <div className="relative">
              <div className="mt-8 lg:mt-16 text-black flex sm:absolute gap-2 lg:gap-4 justify-between pb-12">
                <div className="bg-[#FAEFE3] p-3 lg:p-5 rounded-xl lg:rounded-3xl flex flex-col gap-1">
                  <AiFillHeart className="text-xl lg:text-3xl text-[#FCB782]" />
                  <h5 className="text-sm lg:text-xl font-bold">Title</h5>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="bg-[#FAEFE3] p-3 lg:p-5 rounded-xl lg:rounded-3xl flex flex-col gap-1">
                  <AiFillStar className="text-xl lg:text-3xl text-[#FCB782]" />
                  <h5 className="text-sm lg:text-xl font-bold">Title</h5>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="bg-[#FAEFE3] p-3 lg:p-5 rounded-xl lg:rounded-3xl flex flex-col gap-1">
                  <BsEyeFill className="text-xl lg:text-3xl text-[#FCB782]" />
                  <h5 className="text-sm lg:text-xl font-bold">Title</h5>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 flex justify-end">
            <div className="bg-gradient-to-t from-white/80 to bg-transparent w-10/12 rounded-b-full mb-5 hidden sm:flex" />
            <Image
              alt="asset"
              src="/images/asset.png"
              width={580}
              height={580}
              className="sm:absolute sm:flex mt-10 lg:mt-24 lg:w-[580px] w-[350px] hidden"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
