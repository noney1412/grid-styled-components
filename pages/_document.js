import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props =>
			sheet.collectStyles(<App {...props} />)
		);
		const styleTags = sheet.getStyleElement();
		return {
			...page,
			styleTags
		};
	}

	render() {
		return (
			<html>
				<Head>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
						key="viewport"
					/>
					<meta name="author" content="Chanon Panpila" />
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
					/>
					{this.props.styleTags}
				</Head>
				<body style={{ margin: 0, padding: 0, backgroundColor: "#f4f4f4" }}>
					<Main />
					<NextScript />
				</body>
				<script src="https://smartlock.google.com/client" />
			</html>
		);
	}
}
