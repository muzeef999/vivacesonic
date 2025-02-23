"use client"
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/style/SlickSlider.css';
import icon1 from '@/asserts/logos/1.jpg'
import icon2 from '@/asserts/logos/2.jpg'
import icon3 from '@/asserts/logos/3.jpg'
import icon4 from '@/asserts/logos/4.jpg'
import icon5 from '@/asserts/logos/5.jpg'
import icon6 from '@/asserts/logos/6.jpg'
import icon7 from '@/asserts/logos/7.jpg'
import icon8 from '@/asserts/logos/8.jpg'
import icon9 from '@/asserts/logos/9.jpg'
import Image from 'next/image';

// Importing images dynamically to avoid loading all at once
const iconImages = [
  { src: icon1, alt: "Icon 1" },
  { src: icon2, alt: "Icon 2" },
  { src: icon3, alt: "Icon 3" },
  { src: icon4, alt: "Icon 4" },
  { src: icon5, alt: "Icon 5" }, 
  { src: icon6, alt: "Icon 6" },
  { src: icon7, alt: "Icon 7" },
  { src: icon8, alt: "Icon 8" },
  { src: icon9, alt: "Icon 9" },
  // Add more icons here as necessary
];

const SlickSlider = () => {
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    arrows: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480, // Smallest screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(iconImages);
  }, []);

  return (
    <div className="my-5">
       <h2 className="text-center mb-5 fw-bold">Our Clients</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={110}
              height={110}
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
