import GlobalStyle from "../styles";
import Head from "next/head";
import Navbar from "../components/Navbar";
/* import useSatet from "react";  */
// import data from "../data/products";
// import { products } from "../data/products";

export default function App({ Component, pageProps }) {
  // const [productid setProductid] = useState([])
  //  function handleAppendWarenkorb (
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>IJ VDW</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
