import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "PA School Days",
    description: "PA characters are going to school!",
    openGraph: {
        title: "PA School Days",
        description: "PA characters are going to school!",
        type: "website",
        url: "https://pa-school-days.vercel.app", // 실제 웹사이트 URL로 변경하세요
        images: [
          {
            url: "https://picsum.photos/630/1200", // Open Graph 이미지 URL
            width: 1200,
            height: 630,
            alt: "PA School Days",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "PA School Days",
        description: "PA characters are going to school!",
        images: ["https://picsum.photos/630/1200"], // Twitter 카드 이미지 URL
      },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gradient-to-b from-amber-50 to-amber-200`}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
