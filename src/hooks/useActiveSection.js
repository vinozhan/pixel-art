import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = [];
    const visibleSections = new Map();

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;

        if (entry.isIntersecting) {
          visibleSections.set(id, entry.intersectionRatio);
        } else {
          visibleSections.delete(id);
        }
      });

      // Find the section with highest visibility or first visible section
      if (visibleSections.size > 0) {
        // Prioritize sections by their order in sectionIds
        for (const id of sectionIds) {
          if (visibleSections.has(id)) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: `-${offset}px 0px -50% 0px`,
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push({ observer, element });
      }
    });

    return () => {
      observers.forEach(({ observer, element }) => {
        observer.unobserve(element);
      });
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useActiveSection;
