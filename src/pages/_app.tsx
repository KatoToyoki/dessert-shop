import type { AppProps } from "next/app";
import '@/style/globals.css'
import NavBar from "@/compoenents/NavBar";
import Footer from "@/compoenents/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
