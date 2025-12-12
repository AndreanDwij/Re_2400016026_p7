import React from "react"
import { testimonials } from "../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={item.avatar}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-blue-800">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-700">"{item.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}