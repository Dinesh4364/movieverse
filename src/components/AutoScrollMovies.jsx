// components/AutoScrollMovies.jsx
import React, { useEffect, useRef } from "react";

const AutoScrollMovies = ({ movies }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = 0.5; // pixels per frame
    const delay = 10; // roughly 60fps

    const scrollLoop = () => {
      if (!scrollContainer) return;

      scrollAmount += scrollStep;

      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // reset to start for seamless loop
      }

      scrollContainer.scrollLeft = scrollAmount;

      requestAnimationFrame(scrollLoop);
    };

    scrollLoop();
  }, [movies]);

  // Duplicate movies array for seamless looping
  const movieItems = [...movies, ...movies];

  return (
    <div
      ref={scrollRef}
      className="flex overflow-hidden whitespace-nowrap py-4"
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030014] to-transparent pointer-events-none z-20"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030014] to-transparent pointer-events-none z-20"></div>

      <div className="flex animate-scroll-slow hover:animate-none">
        {movieItems.map((movie, index) => (
          <div key={index} className="inline-block flex-shrink-0 w-48 mr-4">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="rounded-lg w-full h-[300px] object-cover" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default AutoScrollMovies;
