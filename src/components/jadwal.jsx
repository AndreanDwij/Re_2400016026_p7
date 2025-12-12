import React from "react";
import { Calendar } from "lucide-react";
import morningImg from "../assets/jam.png";   
import eveningImg from "../assets/jam.png";   
import careerImg from "../assets/career.png";     
import extraImg from "../assets/extra.png";       
import projectImg from "../assets/project.png";   
import mentorImg from "../assets/mentor.png";     

export default function JadwalSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-40">

        <h2 className="text-3xl font-bold text-center">
          Jadwal & <span className="text-blue-500">Program Kegiatan</span>
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Program terstruktur yang dirancang untuk mengoptimalkan <br />
          pembelajaran dan pengembangan skill Setiap Sabtu
        </p>

        <div className="bg-white p-14 rounded-2xl shadow-xl mb-12">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="text-blue-500 mr-2" />
            <h3 className="text-3xl mb-1 font-semibold text-blue-600">Setiap Sabtu</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-xl bg-linear-to-r from-yellow-200 to-green-200 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <img src={morningImg} alt="morning" className="w-10 h-10 mr-6" />
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg mb-2.5">Sesi Pagi</h4>
                  <p className="font-medium text-blue-800">09.00 – 12.00 WIB</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Workshop, Career Talks, dan Extra Classes intensif
              </p>
            </div>

            <div className="p-6 rounded-xl bg-linear-to-r from-yellow-200 to-green-200 shadow-md">
              <div className="flex items-center mb-3">
                <img src={eveningImg} alt="evening" className="w-10 h-10 mr-6" />
                <div>
                  <h4 className="font-semibold text-lg mb-2.5">Sesi Sore</h4>
                  <p className="font-medium text-blue-800">16.00 – 19.00 WIB</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Project Work, Mentoring, dan Collaboration Session
              </p>
            </div>

          </div>
        </div>

        <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
            <img src={careerImg} className="w-14 h-14 mb-3" />
            <h4 className="text-lg font-semibold mb-2">Career Talks</h4>
            <p className="text-gray-600">
              Sesi sharing dari praktisi industri dan alumni sukses
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl shadow-md">
            <img src={extraImg} className="w-14 h-14 mb-3" />
            <h4 className="text-lg font-semibold mb-2">Extra Classes</h4>
            <p className="text-gray-600">
              Kelas tambahan skill development dan workshop teknis
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow-md">
            <img src={projectImg} className="w-14 h-14 mb-3"/>
            <h4 className="text-lg font-semibold mb-2">Project Work</h4>
            <p className="text-gray-600">
              Mengerjakan project nyata dengan bimbingan mentor
            </p>
          </div>

          <div className="bg-pink-100 p-6 rounded-xl shadow-md ">
            <img src={mentorImg} className="w-14 h-14 mb-3" />
            <h4 className="text-lg font-semibold mb-2">Mentoring</h4>
            <p className="text-gray-600">
              Sesi konsultasi personal dengan mentor berpengalaman
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}