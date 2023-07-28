import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <header>
          <h2>익명게시판😀</h2>
          <nav>
            <Link href='/write'>
              <button>글쓰기</button>
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
