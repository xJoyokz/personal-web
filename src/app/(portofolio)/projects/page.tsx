import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Projects - xJoyokz",
};
const GalleryPage = dynamic(() => import("./GalleryPage"), {
  ssr: false,
});

export default function Projects(): React.ReactElement {
  return (
    <div>
      <GalleryPage />
    </div>
  );
}
