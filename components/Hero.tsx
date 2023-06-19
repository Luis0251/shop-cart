"use client";
import Image from "next/image";
import { CustomButtom } from "./CustomButtom";
export const Hero = () => {
const handleScroll = () =>{
}
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          find, book, or rent a car - quickly and easly!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experiencie with our effortless booking
          process!
        </p>
        <CustomButtom
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src='/hero.png' alt="hero" fill className="object-contain"/>
          </div>
          <div className="hero__image-overlay"/>
        </div>
    </div>
  );
};
