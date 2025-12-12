import React, { useState } from "react";
import { showcaseProjects } from "../data/showcaseProjects";

export default function CardGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? showcaseProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === showcaseProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-gray-800">Showcase </span>
          <span className="text-blue-500">Student Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Karya-karya inovatif yang telah dihasilkan oleh mahasiswa <br />
          dalam program Ruang Ekspresi
        </p>

        <div className="relative max-w-6xl mx-auto">

          <button
            onClick={handlePrev}
            className="absolute -left-20 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg z-10 hover:scale-105 transition"
          >
            <svg className="w-6 h-6" stroke="currentColor" fill="none">
              <path strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-20 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl z-50"
          >
            <svg className="w-6 h-6" stroke="currentColor" fill="none">
              <path strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {showcaseProjects.map((project) => (
                <div key={project.id} className="w-full flex shrink-0">

                  <div className="w-full flex flex-col md:flex-row items-center p-6 gap-6">
                    <div className="md:w-1/2">
                      <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm inline-block mb-4">
                        {project.category}
                      </div>

                      <h3 className="text-2xl font-bold mb-3">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <h4 className="font-semibold mb-2">Tim Pembuat:</h4>
                      <div className="flex flex-col gap-2 mb-5">

                        {project.teamMembers.map((member, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full font-bold text-gray-700">
                              {member.charAt(0)}
                            </div>
                            <p className="text-gray-700 text-sm">{member}</p>
                          </div>
                        ))}
                      </div>
                      <a
                        href={project.liveDemo}
                        className="bg-blue-600 text-white px-5 py-2 rounded-xl inline-block hover:bg-blue-700 transition"
                      >
                        Live Demo
                      </a>
                    </div>
                    <div className="md:w-1/2">
                      <img
                        src={project.image}
                        className="rounded-xl border-2 border-purple-300"
                      />
                    </div>
                    

                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
