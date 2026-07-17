import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
        <meta name="theme-color" content="#05050E" />
      </Head>
      <body className="bg-current">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
