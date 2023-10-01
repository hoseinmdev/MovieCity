import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Movie City</title>
      </Head>
      <body className="bg-stone-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
