import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Journey - xJoyokz",
};

const JourneyPage = dynamic(() => import("./JourneyPage"), {
  ssr: false,
});

export default function Journey() {
  return <JourneyPage />;
}
