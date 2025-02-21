import React, { useState, useEffect } from "react";
import "./TestimonialSlider.css"; // Import the CSS file

const testimonials = [
  {
    text: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.",
    name: "Nisma Tourism",
    
    image: "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/433886667_1108245647032931_3889635635155875861_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=qtAwhEuE7ucQ7kNvgG-h6no&_nc_zt=23&_nc_ht=scontent.fjkr2-1.fna&_nc_gid=A66hqjc1UXsBYYaj8ybnkSM&oh=00_AYCI6WmF84Wj9dvs7FFXfb7Uu-Iy2yn2gUkI61UBP903Dw&oe=6797A1DE", // Replace with real image URL
  },
  {
    text: "Our efforts have positively impacted communities worldwide, creating lasting change and hope.",
    name: "Yogesh Travel",
    image: "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/471405936_1360052564982209_8562690419359749211_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=lvCbW7N09t0Q7kNvgHEFFdz&_nc_zt=23&_nc_ht=scontent.fjkr2-1.fna&_nc_gid=Aaxmgi7VRSJsgF1X9vTdxdv&oh=00_AYDEKnz2pL3AJIiLx01olzFoD6FCqtRjczQ1Ia3kPWxkWg&oe=67979919",
  },
  {
    text: "Together, we strive for a better future through support and resilience in times of crisis.",
    name: "Saurav Ghumfir",
    image: "https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-1/407597138_2240846852973151_7913052743174781939_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=1vzy8mdL1PQQ7kNvgGFZa6v&_nc_zt=24&_nc_ht=scontent.fktm9-2.fna&_nc_gid=AkYh5be5-0m3AHksVpSoRjD&oh=00_AYC76N8-PXrX2RKSYi6KTwE4DKTsCkufkcsojQztBVIzNQ&oe=67979E3C",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="testimonial-container">
      <div className="testimonial-slide">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="testimonial-image"
        />
        <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
        <h4 className="testimonial-name">- {testimonials[currentIndex].name}</h4>
      </div>

      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
