import './styles/globals.css'
import { Inter as FontSans } from "next/font/google"
import 'bootstrap-icons/font/bootstrap-icons.css';

import { cn } from "@/lib/utils"
import Footer from '@/components/Footer';

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata = {
    title: '纽村省钱快报',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
