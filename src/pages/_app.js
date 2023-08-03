import "../Styles/globals.css";
import Navbar from "../Components/Navbar";

const MyApp = ({ Component, pageProps }) => {
  // console.log("I am loading");
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
