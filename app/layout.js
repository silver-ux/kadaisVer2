import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "コーディング課題をUP",
  description: "コーディング課題を作って、アップロードする場所。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
