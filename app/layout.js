import { M_PLUS_1p } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import SideMenu from "@/components/SideMenu";

const inter = M_PLUS_1p({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "OriginDoc",
  description: "This is a OriginDoc site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main className="flex-row flex">
          <SideMenu />
          saaa
          <section className="pl-[300px] max-lg:pl-[146px] max-md:pl-[0] w-ful min-h-screen overflow-hidden">
            <TopMenu />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
