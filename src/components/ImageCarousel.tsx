import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your images from assets folder
import C1 from "../assets/Carousel/C1.png"
// import C2 from "../assets/Carousel/C2.png"
import C3 from "../assets/Carousel/C3.png"
import C4 from "../assets/Carousel/C4.png"
import C5 from "../assets/Carousel/C5.png"
import C6 from "../assets/Carousel/C6.png"
import C7 from "../assets/Carousel/C7.png"
import C8 from "../assets/Carousel/C8.png"
import C9 from "../assets/Carousel/C9.png"
import C10 from "../assets/Carousel/C10.png"
import C11 from "../assets/Carousel/C11.png"
import C12 from "../assets/Carousel/C12.png"

// Add your image paths here
const images = [
  C1, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-r from-purple-100 to-blue-100 p-2">
      <div className="relative overflow-hidden rounded-lg bg-white flex items-center justify-center group">
        <img 
          src={images[currentIndex]}
          alt={`ZiddiQR Sticker ${currentIndex + 1}`}
          className="w-full h-48 md:h-64 lg:h-80 object-contain transition-all duration-1000 ease-in-out"
        />
        
        {/* ZiddiQR branding */}
        {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-bold text-purple-600">ZiddiQR</span>
        </div> */}

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary scale-125' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};
