"use client";

import Gallery from "@/components/Gallery/Gallery";

export default function GalleryPage() {
  return (
    <div className="projects-container">
      <h1 className="gallery-title">
        My <span className="projects-text">&nbsp;Projects</span>
      </h1>
      <div className="gallery-container">
        <div className="gallery-content">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
