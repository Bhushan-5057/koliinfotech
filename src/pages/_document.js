import { Html, Head, Main, NextScript } from "next/document";

/**
 * No Bootstrap CDN — layout utilities ship via bootstrap-lite.css in _app
 * (avoids 3rd-party CSS, unused CSS bloat, and network dependency tree hits).
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#0b1f3a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
