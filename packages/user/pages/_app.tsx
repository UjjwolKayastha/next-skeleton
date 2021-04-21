import { QueryClientProvider, QueryClient } from "react-query";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import { GlobalStyle } from "shared";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <GlobalStyle />
    </QueryClientProvider>
  );
};

export default MyApp;
