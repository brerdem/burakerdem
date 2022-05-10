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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
