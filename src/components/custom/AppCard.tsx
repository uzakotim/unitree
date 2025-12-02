"use client";

import React from "react";
import AppDetailsCard from "./AppDetailsCard";

function AppCard({ app }: { app: any }) {
  const style: React.CSSProperties = {};
  const navigateToLink = () => {
  if (app.link) {
    // Ensure the link starts with http:// or https://
    const url = app.link.startsWith("http://") || app.link.startsWith("https://")
      ? app.link
      : `https://${app.link}`;

    window.open(url, "_blank");
  }
};

 

  // Dynamic theme colors
  const isDark = app.theme === "dark";

  const bgColor = isDark ? "bg-slate-800" : "bg-zinc-20";

  const titleColor = isDark ? "text-white" : "text-gray-900";
  const featureBg = isDark ? "bg-white/10" : "bg-gray-100/50";
  const featureText = isDark ? "text-amber-400" : "text-amber-400";
  const featureDot = isDark ? "bg-amber-400" : "bg-amber-400";

  const compatibilityBg = featureBg;
  const compatibilityText = isDark ? "text-white" : "text-gray-800";
  const compatibilityBadgeBg = isDark ? "bg-green-500/50" : "bg-green-500/70";
  const compatibilityBadgeText = "text-white";

  const priceColor = featureText;
  const buttonBg = isDark ? "bg-white" : "bg-white";
  const buttonText = isDark ? "text-slate-800 hover:text-white":"text-slate-800 hover:text-white";
  const buttonHover = isDark ? "hover:bg-slate-800" : "hover:bg-slate-800";
  const buttonRing = isDark ? "border-slate-800 hover:border-white" : "border-slate-800";
  const isRight = app.side === "right";

  return (
    <div
      className={`
        flex flex-col md:flex-row gap-5 md:gap-80 items-center justify-center
        h-auto w-full min-w-screen py-10
        shadow-lg hover:shadow-2xl transition-shadow duration-300
        bg-cover bg-center
        border border-white/20
        backdrop-blur-sm ${bgColor}
        ${isRight ? "md:flex-row-reverse" : ""}`}
    >
      {/* Title */}
      <h2 className={`text-extra-bold text-5xl md:text-7xl text-center drop-shadow-lg ${titleColor}`}>
        {app.title}
      </h2>

      <div className="flex flex-col items-center justify-center gap-5">
        {/* Features */}
        {app.json.features && (
          <div className={`flex flex-col text-center items-center justify-center ${featureBg} backdrop-blur-md p-4 rounded-xl shadow-inner`}>
            <h4 className={`text-lg font-semibold uppercase tracking-wider mb-2 ${featureText}`}>
              Features
            </h4>

            <ul className="space-y-2">
              {app.json.features.map((feature: string, i: number) => (
                <li key={i} className={`flex justify-left items-center text-sm md:text-base ${compatibilityText}`}>
                  <span className={`w-2 h-2 rounded-full mr-2 ${featureDot}`}></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Compatibility */}
        {app.json.compatibility && (
          <div className={`flex flex-col items-center justify-center ${compatibilityBg} backdrop-blur-md p-4 rounded-xl shadow-inner`}>
            <h4 className={`text-lg font-semibold uppercase tracking-wider mb-2 ${featureText}`}>
              Compatibility
            </h4>

            <div className="flex flex-wrap gap-2 justify-center">
              {app.json.compatibility.map((c: string, i: number) => (
                <span
                  key={i}
                  className={`
                    px-3 py-1 text-xs sm:text-sm md:text-sm
                    ${compatibilityBadgeBg} ${compatibilityBadgeText} rounded-lg shadow-md
                  `}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price */}
        <p className={`text-xl font-semibold mt-2 ${priceColor}`}>
          {app.price}
        </p>

        {/* Button */}
        <button onClick={navigateToLink}
          className={`
            mt-2 w-auto px-8 py-3.5
            border
            ${buttonBg} ${buttonText} font-bold
            text-xs sm:text-sm md:text-base
            rounded-2xl shadow-lg
            ${buttonHover} hover:shadow-xl
            transition-all duration-300 cursor-pointer
            focus:outline-none focus:ring-4 ${buttonRing}
          `}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default AppCard;
