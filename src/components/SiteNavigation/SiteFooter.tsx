/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollLink from "@/components/ScrollLink/ScrollLink";

import { CONTACT_URL } from "@/data/constants";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Logo64 from "@/assets/images/logo64";
import Map64 from "@/assets/images/map64";

type NavLink = {
  name: string;
  href: string;
  icon: any;
};

interface SiteFooterProps {
  navLinks: NavLink[];
}

const SiteFooter: FC<SiteFooterProps> = ({ navLinks }) => {
  return (
    <footer className="bg-neutral-800 py-8">
      <div className="gh-container flex max-w-8xl gap-6">
        <div className="flex flex-col-reverse lg:flex-row gap-x-4 justify-between w-full">
          <Logo64 />
          <div className="flex mb-6 lg:mb-0 flex-col justify-between">
            <ul className="grid grid-cols-4 gap-x-6 gap-y-6 lg:grid-cols-12 lg:gap-y-4">
              {navLinks.map((item) => (
                <li
                  className="font-regular col-span-4 text-sm text-gray-100 group"
                  key={item.name}
                >
                  <ScrollLink
                    href={item.href}
                    className="flex items-center gap-x-2 hover:text-slate-200"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
              {/* <li className="font-regular col-span-4 text-sm text-slate-900">
              <a
                href={CONTACT_URL}
                className="font-regular flex items-center gap-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                <span>Contact</span>
              </a>
            </li> */}
            </ul>
            {/* <div className="aspect-h-7 aspect-w-16">
              <Map64 className="object-cover" />
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
