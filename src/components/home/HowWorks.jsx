import Image from "next/image";
import React from "react";
import popularcateIcon from '../../../public/popularcate.svg'
import bgline from '../../../public/bg-line.svg'
import cateimg1 from '../../../public/Frame (8).svg'
import cateimg2 from '../../../public/hand.svg'
import service3 from '../../../public/hand.svg'
import HowWorkCard from "@/sharred/HowWorkCard";


const data = [
    { id: 1, cateName: "Create Your Account", providers: "Sign up as a customer or service provider directly on our website." , icon: cateimg1 },
    { id: 2, cateName: "Find or List a Service", providers: "Customers can browse services by category, location, or price." , icon: cateimg2 },
    { id: 3, cateName: "Book & Connect Securely", providers: "Confirm bookings, chat in real-time, and make secure payments." , icon: service3 }
]


const HowWorks = () => {
  return (
    <div>
      <div className="flex flex-col gap-16">
        <div className="mt-16 md:mt-44 flex flex-col gap-5 md:flex-row justify-between md:items-center">
          {/* top header */}
          <div>
            <div className="flex items-center gap-4 ">
              <Image
                src={popularcateIcon}
                alt="Popular Category "
                height={24}
              />
              <p className="font-semibold text-md md:text-xl text-color pb-3">
                Servify
              </p>
            </div>
            <h3 className="font-semibold text-2xl md:text-4xl flex flex-col gap-6">
            How It Works
            </h3>
          </div>

        </div>

        {/* gradiant color */}
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
            <div className="absolute top-0 left-0 right-0 mx-auto w-full h-full flex items-center justify-center z-10">
                <Image src={bgline} alt="Background Line" />
            </div>
            <div className="absolute top-44 left-0 right-0 mx-auto w-full px-4 md:px-0  grid grid-cols-1 md:grid-cols-3 gap-24 z-90">
                {
                    data.map((item,index)=>(
                        <HowWorkCard key={index} item={item} />
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
