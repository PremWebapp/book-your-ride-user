import Script from "next/script";
import Head from "next/head";
import { Provider } from "react-redux";
import Header from "./component/header";
import Footer from "./Component/Footer/footer";
import "../styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
              crossOrigin="anonymous"
            />
          </Head>
            <Header/>
           
          <Component {...pageProps} />
          <Footer/>
        </PersistGate>
      </Provider>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />
    </>
  );
}

export default MyApp;
