import Head from 'next/head'
import { useEffect } from "react";
import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import theme from "../styles/theme.js"

function App({ Component, pageProps }) {

	return (
	<div>
	<Head>
		<title>Alberto García</title>
		<meta
			name="viewport"
			content="initial-scale=1.0, width=device-width"
		/>
	</Head>
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	</div>
	);
}

export default App;
