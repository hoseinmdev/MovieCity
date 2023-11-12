import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Movie City</title>
      </Head>
      <body className="bg-red-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
