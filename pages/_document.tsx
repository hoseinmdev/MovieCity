import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href='http://fonts.googleapis.com/css?family=Audiowide|Exo+2|Rambla|Scada' rel='stylesheet' type='text/css'/>
        <title>Movie City</title>
      </Head>
      <body className="bg-stone-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
