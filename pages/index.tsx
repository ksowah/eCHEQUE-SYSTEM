import Footer from "../components/footer";
import Head from "next/head";
import Navbar from "../components/navbar";
import type { NextPage } from "next";
import Partners from "../components/partners";
import Showcase from "../components/showcase";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CodeGeeks | e-cheque cashout</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-auto min-h-[100vh] flex flex-col bg-primary">
        <Navbar />
        <main className="w-full h-auto  mt-20 md:mt-20 flex flex-col items-center justify-center">
          <Showcase />
          <Partners />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
