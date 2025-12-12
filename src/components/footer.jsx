import React from "react";
import Logo from "../assets/logoputih.png";
import teksRE from "../assets/teksputih.png";

export default function Footer() {
  return (
    <footer className="bg-indigo-900  text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4 space-x-4">
              <img
                src={Logo}
                alt="Logo 1"
                className="h-10 w-auto object-contain"
              />
              <img
                src={teksRE}
                alt="Logo 2"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-blue-200 mb-4">
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin
              mengembangkan potensi melalui ideation, creation, collaboration,
              dan guidance.
            </p>
            <p>

            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a className="text-blue-200 hover:text-white">Home</a>
              </li>
              <li>
                <a className="text-blue-200 hover:text-white">About</a>
              </li>
              <li>
                <a className="text-blue-200 hover:text-white">Program</a>
              </li>
              <li>
                <a className="text-blue-200 hover:text-white">Projects</a>
              </li>
              <li>
                <a className="text-blue-200 hover:text-white">testimonials</a>
              </li>
              <li>
                <a className="text-blue-200 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <a className="text-blue-200 hover:text-white">
                  arreer Talks
                  </a>
              </li>
              <li>
                <a className="text-blue-200 hover:text-white">
                  Extra Classes
                </a>
              </li>
              <li>
                <a className="text-blue-200 hover:text-white">
                 project Work
                </a>
              </li>
              <li>
                <a className="text-blue-200 hover:text-white">
                  Mentoring
                </a>
              </li>
            </ul>
          </div>
            <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-blue-200 mb-4"  >alamat: Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55191m</p>
            <p className="text-blue-200 mb-4">email: ruang_ekspresi@webmail.uad.ac.id</p>
            <p className="text-blue-200 mb-4">telpon: Jl. Kampus No. 1, Jakarta</p>
          </div>
        </div>
        <div className="border-t border-white mt-8 pt-8 text-center text-blue-200">
          © 2025 Ruang Ekspresi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
