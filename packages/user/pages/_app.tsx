import { QueryClientProvider, QueryClient } from "react-query";
import "../styles/globals.css";
import 'semantic-ui-css/semantic.min.css'

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
