import { useState } from "react";

export default function Hero() {
  const slides = [
    {
      img: "/sm.jpg",
      title: "AI for Small Finance Bank",
      subtitle: "Secure and Efficient Banking for the Digital Age.",
      link: "sfb-offerings.pdf",
    },
    {
      img: "/cattle-m.jpg",
      title: "IoT for Cattle Heath Monitoring",
      subtitle: "Real-Time Health Tracking for Improved Livestock Management.",
      link: "sfb-offerings.pdf",
    },
    {
      img: "/pharma.jpg",
      title: "IoT for Pharma Industry",
      subtitle:
        "Intelligent Monitoring Solutions for Supply Chain and Manufacturing Compliance.",
      link: "sfb-offerings.pdf",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="home" className="hero-slider">
      {/* Slides wrapper */}
      <div
        className="hero-slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: "flex",
          transition: "transform 0.6s ease-in-out",
        }}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index} style={{ minWidth: "100%" }}>
            <img
              src={slide.img}
              alt={slide.title}
              className="background-image"
            />
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <a
                href={slide.link}
                className="cta-button"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      {totalSlides > 1 && (
        <div className="controls">
          <button className="control-btn" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="control-btn" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      )}

      {/* Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
