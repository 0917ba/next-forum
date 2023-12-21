import NavBar from "@/components/page/NavBar";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import AuthSession from "@/components/auth/AuthSession";
import type {Metadata} from 'next'

const noto_sans_kr = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
    title: "인곽게시판😃",
    description: "인천과학고 커뮤니티 게시판",
}

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html lang="ko" className={noto_sans_kr.className}>
      <body className="light overflow-y-scroll bg-slate-50 text-slate-900 antialiased ">
        <AuthSession>
          <header>
            <nav>
              <NavBar />
            </nav>
          </header>
          <main className="py-14 flex justify-center">
            {authModal}
            {children}
          </main>
        </AuthSession>
      </body>
    </html>
  );
}
