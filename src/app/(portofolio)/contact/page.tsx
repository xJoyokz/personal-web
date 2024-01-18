import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Contact - xJoyokz",
};
const ContactPage = dynamic(() => import("./ContactPage"), {
  ssr: false,
});

export default function Home(): React.ReactElement {
  return (
    <div>
      <ContactPage />
    </div>
  );
}
