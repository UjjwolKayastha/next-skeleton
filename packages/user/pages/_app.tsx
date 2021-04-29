import { QueryClientProvider, QueryClient } from "react-query";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import { GlobalStyle } from "shared";

import { Hydrate } from "react-query/hydration";
import React from "react";

const MyApp = ({ Component, pageProps }) => {
  const queryClientRef = React.useRef<any>();

  if(!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <GlobalStyle />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
