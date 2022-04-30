import { useState } from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();

  return <Component setUser={setUser} user={user} {...pageProps} />;
}

export default MyApp;
