import "../styles/globals.css";
// import "../styles/output.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

//create a client
const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		//Provide the client to your app
		<QueryClientProvider client={client}>
			<Hydrate state={pageProps.dehydratedState}>
				<Component {...pageProps} />
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;
