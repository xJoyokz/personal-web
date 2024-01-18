"use client";

import React from "react";
import Image from "next/image";

import "@/styles/_apps.scss";
import NavBar from "@/components/NavigationBar/NavBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="layout">
      <Image
        className="image-logo"
        width={40}
        height={40}
        src="/img/joyokz-logo.svg"
        alt="Logo"
      />
      <div className="layout-content">{children}</div>
      <NavBar />
    </section>
  );
}
