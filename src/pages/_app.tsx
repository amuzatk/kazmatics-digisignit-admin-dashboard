// // pages/_app.tsx
import { useAuth } from "@/hooks/useAuth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useAuth();
  return <Component {...pageProps} />;
}



// // pages/_app.tsx
// import { useAuth } from '@/hooks/useAuth';
// import '@/styles/globals.css';

// function MyApp({ Component, pageProps }: any) {
//   useAuth();

//   return <Component {...pageProps} />;
// }

// export default MyApp;






