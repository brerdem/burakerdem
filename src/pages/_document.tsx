import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rajdhani:200,300,400|Roboto:300,400|Petit+Formal+Script:400&display=swap"
        />
        <script
          src="https://analytics.burakerdem.com/js/plausible.js"
          async
          defer
          data-domain="burakerdem.com"
          data-nscript="afterInteractive"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
