'use client';

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const brands = [
  { nome: "Brastemp", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6voahS4_qcr733-J3vzTfFuH0vfR79a9vnw&s" },
  { nome: "Consul", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQC2SyfLdD--H8zhklcNQRC_E86jI_bt_yQ&s" },
  { nome: "Philco", logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Philco-logo.png" },
  { nome: "LG", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LG_logo_%282014%29.svg/2560px-LG_logo_%282014%29.svg.png" },
  { nome: "Electrolux", logo: "https://logopng.com.br/logos/electrolux-60.png" },
  { nome: "Panasonic", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Panasonic_logo.svg/2560px-Panasonic_logo.svg.png" },
  { nome: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png" },
];

export default function BrandsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= brands.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? brands.length - slidesToShow : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Trabalhamos com as melhores marcas
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={brand.nome}
                      className="max-h-16 object-contain mx-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Anterior"
          >
            <FaChevronLeft className="text-[#FF5926] text-xl" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Próximo"
          >
            <FaChevronRight className="text-[#FF5926] text-xl" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: brands.length - slidesToShow + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-[#FF5926]" : "bg-gray-300"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}