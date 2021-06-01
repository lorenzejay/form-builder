import UserAuthProvider from "../context/UserAuth/UserAuthProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthProvider>
      <Component {...pageProps} />
    </UserAuthProvider>
  );
}

export default MyApp;
