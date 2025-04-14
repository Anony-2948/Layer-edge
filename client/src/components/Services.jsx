import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);
const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Layer 2 Powered
          <br />
          Services for Everyone
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Experience faster, cheaper, and more scalable crypto transactions using our Layer 2 enhanced infrastructure.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Scalable Security"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Benefit from Ethereum-grade security with Layer 2 scalability for faster and safer transactions."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Low Gas Fees"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Conduct high-volume transactions with minimal gas fees thanks to our Layer 2 integration."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Instant Settlements"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Enjoy near-instant transaction finality and seamless cross-chain bridging using Layer 2 tech."
        />
      </div>
    </div>
  </div>
);


export default Services;