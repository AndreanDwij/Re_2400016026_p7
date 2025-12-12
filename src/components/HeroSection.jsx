import React from "react";
import ReFT1 from "../assets/ReFT1.png";

export default function HeroSection() {
  return (
      <div className="container mx-auto px-45 flex flex-3 lg:flex-row items-center gap-12 py-16">
        <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-7 leading-tight">
                <span className="text-blue-500">RUANG EKSPRESI :</span>{" "}
                <span className="text-gray-800">Wadah Kreatif & Kompetitif Mahasiswa</span>
            </h1>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">Ideation</span>
            <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Creation</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Collaboration</span>
            <span className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">Guidance & Support</span>
          </div>
        </div>

        <div className="lg:w-2/3 flex justify-end">
          <img 
            src={ReFT1}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
  );
}