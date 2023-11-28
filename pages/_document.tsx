import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          href="https://www.pngmart.com/files/11/Sad-Pepe-The-Frog-Meme-PNG-Transparent-Picture.png"
        ></link>
        <meta name="theme-color" content="#000" />
        <title>Movie City</title>
      </Head>
      <body className="bg-current">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
