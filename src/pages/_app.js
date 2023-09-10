import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics";
import Chat from "components/Chat";
import { ThemeProvider } from "util/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <>
        <Chat />
        <>
          <Navbar
            color="default"
            logo="https://uploads.divjoy.com/logo.svg"
            logoInverted="https://uploads.divjoy.com/logo-white.svg"
          />

          <Component {...pageProps} />

          <Footer
            bgColor="light"
            size="normal"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright={`© ${new Date().getFullYear()} Company`}
            logo="https://uploads.divjoy.com/logo.svg"
            logoInverted="https://uploads.divjoy.com/logo-white.svg"
            sticky={true}
          />
        </>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
