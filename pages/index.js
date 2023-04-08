import Head from "next/head";
import About from "../Components/About";
import HomePage from "../Components/HomePage";
import Catigoires from "../Components/Catigoires";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maktabti</title>
        <meta name="description" content="مكتبتي" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <HomePage />
        <About />
        <Catigoires />
      </main>
    </>
  );
}
