import React from "react";
import sanityClient from "@/data/sanity.config";

import SiteImage from "@/components/SiteImage/SiteImage";
import SiteIcon from "@/components/SiteIcon/SiteIcon";
import RichText from "@/components/RichText/RichText";

import { Main } from "@/templates/Main";
import { Meta } from "@/layouts/Meta";

import SiteHeader from "@/components/SiteNavigation/SiteHeader";
import SiteSlider from "@/components/SiteSlider/SiteSlider";

import { imageMeta } from "@/data/queries";
import ScrollLink from "@/components/ScrollLink/ScrollLink";

interface SiteProps {
  data: {
    heading: string;
    subheading: string;
    image: any;
    description: any;
  };
  slides: {
    title: string;
    description: string;
    image: any;
  }[];
}

const HomePage: React.FC<SiteProps> = ({ data, slides }) => {
  return (
    <Main meta={<Meta />}>
      <section
        id="home"
        className="aspect-h-4 aspect-w-3 lg:aspect-h-9 lg:aspect-w-16"
      >
        <div className="z-20 flex flex-col justify-end px-4 lg:px-6">
          <div className="gh-container mb-12 max-w-sm rounded-md bg-white/95 px-4 py-6 text-center shadow-lg lg:mb-32 lg:max-w-xl lg:px-8 lg:py-8">
            <h1 className="text-2xl font-black mb-2 text-slate-900 lg:text-4xl">
              {data.heading}
            </h1>
            <p className="mx-auto block max-w-xs text-sm font-light lg:max-w-sm lg:text-xl">
              {data.subheading}
            </p>
          </div>
        </div>

        <SiteImage
          image={data.image}
          classes="z-[1] object-left lg:object-center"
          objectFit="cover"
          blurUrl={data.image.lqip}
          alt=""
        />
        {/* <div className="z-10 bg-white/30" /> */}
      </section>

      {/* <section id="welcome" className="pb-6 pt-16 lg:pb-16 lg:pt-32">
        <div className="gh-container max-w-4xl">
          <div className="grid grid-cols-4 gap-x-6 gap-y-8 lg:grid-cols-12">
            <div className="col-span-4">
              <div className="flex flex-col items-center justify-center space-y-6">
                <SiteIcon
                  iconName="fa-solid fa-paw"
                  className="h-12 w-12 text-slate-900"
                  aria-hidden="true"
                />
                <div className="block text-center">
                  <h5 className="text-xl font-bold">Pet Friendly</h5>

                  <ScrollLink href="#rules" className="font-regular block">
                    &#42; Rules Apply
                  </ScrollLink>
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <div className="flex flex-col items-center justify-center space-y-6">
                <SiteIcon
                  iconName="fa-solid fa-wifi"
                  className="h-12 w-12 text-slate-900"
                  aria-hidden="true"
                />
                <div className="block text-center">
                  <h5 className="text-xl font-bold">Wi-Fi</h5>
                  <span className="font-regular block">GrandmasHouse</span>
                  <span className="font-regular block">grandmas</span>
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <div className="flex flex-col items-center justify-center space-y-6">
                <SiteIcon
                  iconName="fa-solid fa-user"
                  className="h-12 w-12 text-slate-900"
                  aria-hidden="true"
                />
                <div className="block text-center">
                  <h5 className="mb-1.5 block text-xl font-bold">Contact</h5>
                  <a
                    href={CONTACT_URL}
                    className="font-regular flex items-center justify-center gap-x-2 rounded-md px-4 py-1.5 text-slate-900 shadow-sm ring-1 duration-200 ring-inset ring-slate-500 transition-all hover:bg-slate-100 hover:text-inherit hover:shadow-md hover:ring-transparent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiteIcon
                      iconName="fa-brands fa-facebook"
                      className="h-4 w-4 text-[#1877F2]"
                      aria-hidden="true"
                    />

                    <span>Message Host</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section
        id="map"
        className="mx-auto w-full py-6 lg:max-w-8xl lg:px-8 lg:py-16"
      >
        <SiteImage
          image={data.mapImage}
          classes="z-[1] object-left lg:object-center"
          objectFit="cover"
          blurUrl={data.mapImage.lqip}
          alt=""
        />
      </section> */}

      <section id="gallery" className="py-6 lg:py-16">
        <SiteSlider slides={slides} />
      </section>

      <section
        id="description"
        className="gh-container max-w-8xl py-6 lg:py-16"
      >
        <RichText content={data.description.content} />
      </section>
    </Main>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const query = `
  {
    "site": *[_type == "site"] {
      ...,
      ${imageMeta("image")}
    }[0],
    "slides": *[_type == "imagePost"] | order(coalesce(sortOrder, 9999) asc) {
      title,
      description,
      ${imageMeta("image")}
    }
  }`;

  const { site, slides } = await sanityClient.fetch(query);

  return {
    props: {
      data: site,
      slides: slides,
    },
  };
};
