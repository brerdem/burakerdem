import "../../styles/globals.css";
import type { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import PausibleProvider from "next-plausible";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PausibleProvider
      domain="burakerdem.com"
      selfHosted
      customDomain="https://analytics.burakerdem.com"
    >
      <Component {...pageProps} />
      <Toaster />
      <Script
        src="https://talktomy.site/embed.js"
        data-website-id="88YUQWjEwdcZWoVBMdpAec"
        data-color="#3B82F6"
        data-icon="icon1"
      ></Script>
    </PausibleProvider>
  );
}

export default MyApp;
