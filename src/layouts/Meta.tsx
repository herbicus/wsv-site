import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import React from 'react';

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

        <title>Grandma&#8217;s House - Ann Arbor</title>

        <meta
          name="description"
          content="Make yourself at home in Ann Arbor's welcoming west side neighborhood."
        />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
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
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: 'Grandma\u2019s House - Ann Arbor',
          description:
            'Make yourself at home in Ann Arbor\u2019s welcoming west side neighborhood.',
          url: 'www.graandmashouse.com',
          locale: 'en',
          site_name: 'Grandma\u2019s House - Ann Arbor',
          images: [
            {
              url: `${router.basePath}/meta-op-image.jpg`,
              alt: 'Grandma\u2019s House - Ann Arbor',
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };
