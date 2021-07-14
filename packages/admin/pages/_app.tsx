import React from "react";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle } from "shared";

function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef<any>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Component {...pageProps} />
      <GlobalStyle />
    </QueryClientProvider>
  );
}
export default MyApp;
