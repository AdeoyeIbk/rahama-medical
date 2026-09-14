"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function BackgroundRippleEffectDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden bg-[#000066]">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full relative z-10 px-4">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl font-heading">
          Interactive Background Boxes Ripple Effect
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-blue-200">
          Hover over the boxes above and click. To be used on backgrounds of hero
          sections OR Call to Action sections.
        </p>
      </div>
    </div>
  );
}
