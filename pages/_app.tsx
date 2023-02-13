import "styles/globals.css";
import type { AppProps } from "next/app";
import BuildingProvider from "@/store/BuilidngProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BuildingProvider>
      <Component {...pageProps} />
    </BuildingProvider>
  );
}
