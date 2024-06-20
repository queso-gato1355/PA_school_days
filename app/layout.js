import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "PA School Days",
    description: "PA characters are going to school!",
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
