import "../../styles/globals.css";
import type { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import PausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PausibleProvider
      domain="burakerdem.com"
      selfHosted
      customDomain="https://analytics.burakerdem.com"
    >
      <Component {...pageProps} />
      <Toaster />
    </PausibleProvider>
  );
}

export default MyApp;
