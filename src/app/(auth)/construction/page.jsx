"use client";
import { useRouter } from "next/navigation";

const UnderConstruction = () => {
      const router = useRouter();
  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      {/* Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 text-center max-w-lg w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-500 mb-4">
          🚧 Under Construction
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
          We’re working hard to bring this page to life.  
          Please check back soon!
        </p>

        <button
          onClick={() => router.back()}
          className="px-5 md:px-8 py-2.5 md:py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600 transition-all"
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  )
}

export default UnderConstruction