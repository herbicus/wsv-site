import React from "react";
import sanityClient from "@/data/sanity.config";

import SiteImage from "@/components/SiteImage/SiteImage";
import SiteIcon from "@/components/SiteIcon/SiteIcon";
import RichText from "@/components/RichText/RichText";
import ScrollLink from "@/components/ScrollLink/ScrollLink";

import { Main } from "@/templates/Main";
import { Meta } from "@/layouts/Meta";

import SiteHeader from "@/components/SiteNavigation/SiteHeader";
import SiteSlider from "@/components/SiteSlider/SiteSlider";
import VideoGrid from "@/components/VideoGrid/VideoGrid";

import { imageMeta } from "@/data/queries";

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
  videos: any;
}

const HomePage: React.FC<SiteProps> = ({ data, slides, videos }) => {
  return (
    <Main meta={<Meta />}>
      <section
        id="home"
        className="aspect-h-4 aspect-w-3 lg:aspect-h-9 lg:aspect-w-16"
      >
        <div className="z-20 flex flex-col justify-end px-4 lg:px-6">
          <div className="gh-container mb-12 max-w-sm rounded-md text-gray-900 bg-white/95 px-4 py-6 text-center shadow-lg lg:mb-32 lg:max-w-xl lg:px-8 lg:py-8">
            <h1 className="text-2xl mb-2 text-slate-900 lg:text-4xl">
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
      </section>

      <section id="gallery" className="py-6 lg:py-16">
        <SiteSlider slides={slides} />
      </section>

      <section id="videos" className="gh-container max-w-8xl py-6 lg:py-16">
        <h2 className="text-4xl mb-4">Videos</h2>
        <VideoGrid videos={videos} />
      </section>

      <section
        id="description"
        className="gh-container max-w-8xl py-6 lg:py-16"
      >
        <RichText {...data.description} />
      </section>
    </Main>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
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
    },
    "videos": *[_type == "videoPost"] | order(sortOrder) {
      _id,
      title,
      youTube,
      "mp4": mp4.asset->url,
      description,
      sortOrder
    }
  }`;

  const { site, slides, videos } = await sanityClient.fetch(query);

  return {
    props: {
      data: site,
      slides: slides,
      videos: videos,
    },
  };
};
