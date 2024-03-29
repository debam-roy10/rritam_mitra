import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Condensed } from "next/font/google";
import  Header from "../components/Header";

const customFont = Roboto_Condensed ({
  subsets: ["latin"],
  variable: "--font-custom",
  weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${customFont.variable} font-sans h-full`}>
      <Header/>
      <Component {...pageProps} />
    </div>
  );
}
