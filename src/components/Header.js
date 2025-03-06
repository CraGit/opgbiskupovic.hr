"use client";

import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const localeLabels = {
  "en-us": "EN",
  hr: "HR",
};

export function Header({ locales = [], navigation, settings }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine current locale from pathname
  const currentLocale = pathname.startsWith("/hr") ? "/hr" : "";

  useEffect(() => {
    const menu = document.getElementById("toggle-menu");
    const links = document.querySelectorAll(".link-hoder");

    if (isMenuOpen) {
      menu.classList.remove("closed");
      menu.classList.add("open");
      links.forEach((link) => {
        link.classList.remove("-translate-y-10");
        link.classList.add("translate-y-0");
      });
    } else {
      menu.classList.add("closed");
      menu.classList.remove("open");
      links.forEach((link) => {
        link.classList.add("-translate-y-10");
        link.classList.remove("translate-y-0");
      });
    }
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-container border-transparent">
        <div className="w-full max-w-6xl px-4 mx-auto relative">
          <div className="flex w-full justify-between items-center h-20">
            <Link href={`${currentLocale}`} className="py-1.5">
              {prismic.isFilled.image(settings.data.logo) && (
                <PrismicNextImage field={settings.data.logo} alt="" />
              )}
            </Link>
            <ul className="flex items-center gap-3">
              <li className="font-medium font-raleway text-lg uppercase text-black">
                Menu
              </li>
              <li className="flex items-center">
                <button
                  className=""
                  id="toggle-button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.23088 4H14.5642M2.56421 8H14.5642M5.23088 12H14.5642"
                      stroke="#171A22"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="toggle-menu" className="toggle-menu closed">
        <div className="p-4 py-10 pb-20">
          <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mx-auto">
            <ul className="transform transition-all duration-500 delay-150 flex flex-col gap-4 max-md:mb-5 md:gap-9 w-full">
              {navigation.data?.links.map((item, index) => {
                const isActive = pathname === prismic.asLink(item.link);
                return (
                  <li
                    key={prismic.asText(item.label)}
                    className="link-hoder transition-all duration-500 -translate-y-10"
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    <PrismicNextLink
                      field={item.link}
                      className={`nav_links relative group ${isActive ? "active text-s_skin" : ""}`}
                    >
                      <PrismicText field={item.label} />
                      <div
                        className={`line ${isActive ? "w-20" : ""} bg-s_skin`}
                      ></div>
                    </PrismicNextLink>
                  </li>
                );
              })}
            </ul>
            <ul className="transform transition-all duration-500 delay-150 flex flex-col md:items-end justify-center w-full gap-4 md:gap-6">
              <li
                className="link-hoder transition-all duration-500 -translate-y-10"
                style={{ transitionDelay: "100ms" }}
              >
                <a href="#" className="social-link group font-raleway">
                  Facebook <div className="line bg-s_skin"></div>
                </a>
              </li>
              <li
                className="link-hoder transition-all duration-500 -translate-y-10"
                style={{ transitionDelay: "300ms" }}
              >
                <a href="#" className="social-link group font-raleway">
                  Instagram <div className="line bg-s_skin"></div>
                </a>
              </li>
              <li
                className="link-hoder transition-all duration-500 -translate-y-10"
                style={{ transitionDelay: "500ms" }}
              >
                <a href="#" className="social-link group font-raleway">
                  Twitter <div className="line bg-s_skin"></div>
                </a>
              </li>
              {locales.map((locale, index) => (
                <li
                  key={locale.lang}
                  className="link-hoder transition-all duration-500 -translate-y-10"
                  style={{ transitionDelay: `${(index + 4) * 200}ms` }}
                >
                  <PrismicNextLink
                    href={locale.url}
                    locale={locale.lang}
                    className="social-link group font-raleway"
                  >
                    {localeLabels[locale.lang] || locale.lang}
                    <div className="line bg-s_skin"></div>
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
