import "@/app/globals.css";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons';

import { ScrollProvider } from "@/context/ScrollContext";

import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

import type { AppProps } from "next/app";

// library.add(fab, fas);

const GrandmasHouseMarketing = ({ Component, pageProps }: AppProps) => (
  <ScrollProvider>
    <Component {...pageProps} />
    <GoogleAnalytics />
  </ScrollProvider>
);

export default GrandmasHouseMarketing;
