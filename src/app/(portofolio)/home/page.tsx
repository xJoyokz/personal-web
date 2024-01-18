import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Home - xJoyokz",
};
const HomePage = dynamic(() => import("./HomePage"), {
  ssr: false,
});

export default function Home(): React.ReactElement {
  return (
    <div>
      <HomePage />
    </div>
  );
}
