import NavBar from '@/components/NavBar';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';

const noto_sans_kr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={noto_sans_kr.className}>
      <body className="light bg-slate-50 text-slate-900 antialiased">
        <header>
          <nav>
            <NavBar />
          </nav>
        </header>
        <main className="pt-14">{children}</main>
      </body>
    </html>
  );
}
