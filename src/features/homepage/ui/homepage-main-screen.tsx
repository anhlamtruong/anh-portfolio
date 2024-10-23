"use client";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { SnapSection } from "./homepage-section";
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

export const HomePageMainScreen = () => {
  // State to keep track of the active section
  const [activeIndex, setActiveIndex] = useState(0);

  // useWindowScroll from react-use
  const { y } = useWindowScroll();

  // Automatically scroll to the next section based on scroll
  useEffect(() => {
    const sectionHeight = window.innerHeight;
    const currentSection = Math.round(y / sectionHeight); // Calculate the current section based on scroll position
    setActiveIndex(currentSection); // Set active section
  }, [y]);

  // Scroll to the active section
  useEffect(() => {
    const section = document.getElementById(`section-${activeIndex}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeIndex]);
  return (
    <div className="flex items-center justify-center">
      <center className=" no-scrollbar h-screen overflow-scroll snap-mandatory snap-y w-full sm:w-full md:w-11/12 lg:w-9/12 scroll-smooth">
        <SnapSection id="section-1" className="snap-center transition-all">
          <ModeToggle />
          <div>
            <h1 className="text-7xl">Page1</h1>
          </div>
        </SnapSection>
        <SnapSection id="section-2" className="snap-center">
          <ModeToggle />
          <div>
            <h1 className="text-7xl">Page2</h1>
          </div>
        </SnapSection>
        <SnapSection id="section-3" className="snap-center">
          <ModeToggle />
          <div>
            <h1 className="text-7xl">Page3</h1>
          </div>
        </SnapSection>
        <SnapSection id="section-4" className="snap-center">
          <ModeToggle />
          <div>
            <h1 className="text-7xl">Page4</h1>
          </div>
        </SnapSection>
      </center>
    </div>
  );
};
