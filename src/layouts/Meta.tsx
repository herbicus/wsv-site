import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import React from "react";

type MetaProps = {
  title?: string;
  description?: string;
  canonical?: string;
  metaImage?: any;
};

const Meta: React.FC<MetaProps> = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Whiskey Shit Vomit - Band Site</title>

        <meta name="description" content="Whiskey Shit Vomit - Band Site" />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-icon"
          href={`${router.basePath}/apple-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${router.basePath}/android-icon-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${router.basePath}/favicon-96x96.png`}
          key="icon96"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />

        <meta name="msapplication-TileColor" content="#000" />
        <meta
          name="msapplication-TileImage"
          content={`${router.basePath}/ms-icon-144x144.png`}
        />
        <meta name="theme-color" content="#000" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: "Whiskey Shite Vomit - Band Site",
          description: "Whiskey Shit Vomit - Band Site",
          url: "www.wsv.herbtorres.com",
          locale: "en",
          site_name: "Whiskey Shite Vomit - Band Site",
          images: [
            {
              url: `${router.basePath}/meta-og-image.png`,
              alt: "Whiskey Shite Vomit - Band Site",
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };
