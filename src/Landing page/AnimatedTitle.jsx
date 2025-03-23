import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "center 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      <h2
        ref={titleRef}
        className="text-5xl font-extrabold mb-8 text-center text-[#202121]"
      >
        {title.split("<br />").map((line, index) => (
          <div key={index} className="flex justify-center flex-wrap gap-2 px-6 text-center">
            {line.split(" ").map((word, idx) => (
              <span
                key={idx}
                className={`inline-block ${
                  word.toLowerCase() === "pixora" ? "text-green-400" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: word }}
              />
            ))}
          </div>
        ))}
      </h2>
    </div>
  );
};

export default AnimatedTitle;
