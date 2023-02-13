import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head'
import Layout from "../components/layout/Layout";
import { useEffect } from "react";

function App({ Component, pageProps }) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

	return (
	<div>
	<Head>
		<title>Alberto García</title>
		<meta
			name="viewport"
			content="initial-scale=1.0, width=device-width"
		/>
	</Head>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</div>
	);
}

export default App;
