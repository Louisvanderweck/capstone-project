import GlobalStyle from "../styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <main style={{ maxWidth: 600, paddingBottom: 20 }}>
      <GlobalStyle />
      <Head>
        <title>IJ VDW</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
