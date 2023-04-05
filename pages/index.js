import Head from "next/head";
import About from "../Components/About";
import HomePage from "../Components/HomePage";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ramadan Kareem</title>
        <meta name="description" content="شهر رمضان المعظم" />
        <link rel="icon" href="/fanoos.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
        <About />
      </main>
    </>
  );
}
