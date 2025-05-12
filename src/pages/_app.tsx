// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ReactElement, ReactNode, useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";
// import { useThemeStore } from "@/store/useThemeStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { Provider } from "@/ThemeProvider";
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from "@/components/Theme-Provider";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const hydrateUser = useUserStore((state) => state.hydrate);
  // const hydrateTheme = useThemeStore((state) => state.hydrateTheme);

  useEffect(() => {
    hydrateUser();
    // hydrateTheme();
  }, [hydrateUser]);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <html lang="en" suppressHydrationWarning>
    <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
    {/* // <div suppressHydrationWarning={true}>    <Provider> */}
    <QueryClientProvider client={queryClient}>

      {getLayout(<Component {...pageProps} />)}
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-right" />
    </QueryClientProvider>
      {/* // </Provider>  </div> */}
      </ThemeProvider>
      </html>

  );
}





// // pages/_app.tsx
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import type { NextPage } from "next";
// import { ReactElement, ReactNode, useEffect } from "react";
// import { useUserStore } from "@/store/useUserStore";
// import { useThemeStore } from "@/store/useThemeStore";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

// const queryClient = new QueryClient();

// export default function App({ Component, pageProps }: AppPropsWithLayout) {
//   const hydrateUser = useUserStore((state) => state.hydrate);
//   const hydrateTheme = useThemeStore((state) => state.hydrateTheme);

//   useEffect(() => {
//     hydrateUser();
//     hydrateTheme();
//   }, [hydrateUser, hydrateTheme]);

//   const getLayout = Component.getLayout ?? ((page) => page);

//   return (
//     <QueryClientProvider client={queryClient}>
//       {getLayout(<Component {...pageProps} />)}
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// }