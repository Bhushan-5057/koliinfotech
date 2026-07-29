import Head from "next/head";
import HomePage from "./home-page";
import { Fragment } from "react";

const META_DESCRIPTION =
  "KOLI Infotech delivers custom software, web development, mobile apps, AI solutions & cloud services. 10+ years, 160+ projects, 150+ happy clients. Get a free consultation today.";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>
          KOLI Infotech | Custom Software, Web &amp; Mobile App Development Company in Surat
        </title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta
          property="og:title"
          content="KOLI Infotech | Custom Software & Digital Solutions in Surat"
        />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta
          name="twitter:title"
          content="KOLI Infotech | Custom Software & Digital Solutions in Surat"
        />
        <meta name="twitter:description" content={META_DESCRIPTION} />
      </Head>
      <HomePage />
    </Fragment>
  );
}
