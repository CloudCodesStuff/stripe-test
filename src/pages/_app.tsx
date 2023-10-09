import { api } from "@/utils/api";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Poppins } from 'next/font/google';

import "@/styles/globals.css";
const font = Poppins({
  subsets: ['latin'],
  weight: ["100", '200', '300', '400', '500', '600', '700', '800', "900"]
})
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <div className={`${font.className}`}>
      <SessionProvider session={session}>

        <Component  {...pageProps} />

      </SessionProvider>
    </div>

  );
};

export default api.withTRPC(MyApp);
