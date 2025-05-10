// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

const setInitialTheme = `
(function() {
  try {
    const stored = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored ?? (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
  } catch (e) {
    console.error('Theme hydration error:', e);
  }
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}



// //pages/_document.tsx
// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body className="antialiased">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
