import React, { Fragment, useContext, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ScrollContext } from "@/context/ScrollContext";

// import MobileNavigation from "./MobileNavigation";

// import SiteIcon from "@/components/SiteIcon/SiteIcon";
import ScrollLink from "@/components/ScrollLink/ScrollLink";

import {
  faBars,
  faEnvelope,
  faSkull,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// import { baseLinks, welcomeLinks, navLinks } from "@/data/navigation";
// import { CONTACT_URL } from "@/data/constants";

type SiteHeaderProps = {
  isSignedIn?: boolean;
  isAdmin?: boolean;
};

const SiteHeader: React.FC<SiteHeaderProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const scrollContext = useContext(ScrollContext);

  if (!scrollContext) {
    return null;
  }

  const { isAboveFold, isScrollUp } = scrollContext;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-white/90 shadow-md transition-transform duration-700 ease-out-quint ${
        !isAboveFold && !isScrollUp && !isNavOpen
          ? "-translate-y-full"
          : "translate-y-0"
      }`}
    >
      <nav className="gh-container z-40 flex h-16 max-w-8xl items-center justify-between">
        <div className="flex items-center gap-x-4 lg:flex-1">
          <ScrollLink
            href="#home"
            className="-m-2.5 inline-flex items-center justify-center gap-x-4 rounded-md p-2.5 text-gray-900 hover:text-gray-900"
          >
            <FontAwesomeIcon
              icon={faSkull}
              className="h-6 w-6"
              aria-hidden="true"
            />

            <span className="block whitespace-nowrap font-light leading-none lg:text-lg">
              Whiskey Shit Vomit
            </span>
          </ScrollLink>
        </div>

        {/* <div className="flex w-full items-center justify-center gap-x-4 lg:flex-1">
          <ul className="hidden items-center justify-center gap-x-6 lg:flex">
            {baseLinks.map((item) => (
              <li className="font-semibold text-gray-900" key={item.name}>
                <ScrollLink
                  href={item.href}
                  className="transition hover:text-slate-600"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div> */}

        {/* <div className="flex items-center justify-end gap-x-4 lg:flex-1">
          <Menu as="div" className="relative hidden lg:block">
            <Menu.Button className="inline-flex items-center gap-x-2 font-semibold text-gray-900 transition hover:text-slate-600">
              <span className="sr-only">Menu</span>
              <FontAwesomeIcon
                icon={faBars}
                className="h-6 w-6"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Menu.Items className="absolute right-0 z-10 mt-8 flex w-screen max-w-max">
                <div className="w-screen max-w-xs flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="relative p-4">
                    <Menu.Item
                      as="button"
                      className="flex w-full items-center justify-end pb-2 transition hover:text-slate-600"
                    >
                      <span className="sr-only">Close</span>
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="pointer-events-none h-4 w-4"
                        aria-hidden="true"
                      />
                    </Menu.Item>
                    {welcomeLinks.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <FontAwesomeIcon
                                icon={item.icon}
                                className="h-6 w-6 text-gray-600 group-hover:text-slate-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div>
                              <ScrollLink
                                href={item.href}
                                className="font-semibold text-gray-900"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </ScrollLink>
                              <p className="mt-1 text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={CONTACT_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                        >
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              className="h-6 w-6 text-gray-600 group-hover:text-slate-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900 group-hover:text-slate-600">
                              Contact
                            </span>
                            <p className="mt-1 text-gray-600">
                              Message the Host
                            </p>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="sr-only">
                {isNavOpen ? "Close main menu" : "Open main menu"}
              </span>
              <FontAwesomeIcon
                icon={faBars}
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
        </div> */}
      </nav>

      {/* <MobileNavigation isOpen={isNavOpen} setIsOpen={setIsNavOpen}>
        <div className="flex h-[75%] flex-col justify-between">
          <ul className="block space-y-6">
            {navLinks.map((item) => (
              <li
                className="font-regular text-slate-900"
                key={item.name}
                onClick={() => setIsNavOpen(false)}
              >
                <ScrollLink
                  href={item.href}
                  className="flex items-center gap-x-4"
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
          </ul>
          <a
            href={CONTACT_URL}
            className="font-regular flex items-center justify-center gap-x-2 rounded-md px-4 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-500 transition-all hover:bg-slate-100 hover:text-slate-900 hover:shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="h-4 w-4 text-slate-500"
              aria-hidden="true"
            />

            <span>Message Host</span>
          </a>
        </div>
      </MobileNavigation> */}
    </header>
  );
};

export default SiteHeader;
