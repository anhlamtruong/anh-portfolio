"use client";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { SnapSection } from "@/features/homepage/ui/homepage-section";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false); // Flag for programmatic scrolling
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to get the section number from the URL
  const getSectionFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get("section");
    return section && !isNaN(Number(section)) ? Number(section) : 1;
  };

  // On initial mount, check if URL has a section query, and scroll to the relevant section
  useEffect(() => {
    const sectionFromUrl = getSectionFromUrl();
    setActiveIndex(sectionFromUrl);

    const section = document.getElementById(`section-${sectionFromUrl}`);
    if (section) {
      setIsProgrammaticScroll(true); // Set flag for programmatic scroll
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setIsProgrammaticScroll(false), 500); // Disable the flag after scroll animation completes
    }
  }, []);

  // Handle the scroll event of the scrollable container
  const handleScroll = debounce(() => {
    if (!isProgrammaticScroll && scrollRef.current) {
      const sectionHeight = window.innerHeight;
      const scrollTop = scrollRef.current.scrollTop;
      const currentSection = Math.round(scrollTop / sectionHeight); // Calculate the current section based on scroll position

      if (activeIndex !== currentSection) {
        setActiveIndex(currentSection); // Update active section if it changes
      }
    }
  }, 50);

  // // Debounce scroll event handler to avoid rapid updates
  // const debounceScroll = () => {
  //   let timeout: NodeJS.Timeout;
  //   return () => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(handleScroll, 50); // Debounce delay
  //   };
  // };

  // Scroll to the active section and update URL
  useEffect(() => {
    if (activeIndex !== null) {
      const section = document.getElementById(`section-${activeIndex}`);
      if (section) {
        setIsProgrammaticScroll(true); // Set flag for programmatic scroll
        section.scrollIntoView({ behavior: "smooth" });

        // Update the URL query parameter with the active section index
        const newUrl = `/?section=${activeIndex}`;
        if (newUrl !== window.location.href) {
          router.replace(newUrl);
        }

        setTimeout(() => setIsProgrammaticScroll(false), 500); // Disable the flag after scroll animation completes
      }
    }
  }, [activeIndex, router]);

  return (
    <div>
      <main>
        <div className="flex items-center justify-center">
          <center
            ref={scrollRef}
            onScroll={handleScroll} // Debounced scroll handler
            className=" no-scrollbar h-screen overflow-scroll snap-mandatory snap-y w-full sm:w-full md:w-11/12 lg:w-9/12 scroll-smooth"
          >
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
      </main>
    </div>
  );
}
