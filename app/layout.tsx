import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Head from "next/head";
import ActiveSectioContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeet Shah",
  description: "I am a full-stack developer with experience of 6 months",
  icons: {
    icon: "/favicon-png.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28px sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#e2fbf0] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#629687]"></div>
        <div className="bg-[#dbd7fe] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectioContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-center" />
            <ThemeSwitch />
          </ActiveSectioContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
