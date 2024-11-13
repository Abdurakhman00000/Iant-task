"use client"

import localFont from "next/font/local";
import "./globals.scss";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ScrollToTopButton from "@/components/ui/scrollToTop/ScrollToTopButton";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

const sourceCodeProSans = localFont({
  src: "./fonts/SourceCodePro-VariableFont_wght.ttf",
  variable: "--font-sourceCodePro-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodeProSans.variable} ${geistMono.variable}`}>
        <Provider store={store}>
          <ToastContainer/>
          <ScrollToTopButton/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
