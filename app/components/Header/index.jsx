import { Link } from "@remix-run/react";
import logo from "./logo.png";
import { useLocation } from "@remix-run/react";

export default function Component() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="mx-auto bg-[#3c3c3c]">
            <header className="flex h-14 w-full items-center px-4 md:px-6 lg:px-8 space-x-20 mb-[1.25rem]">
                <Link to="/" className="mr-6 lg:flex items-center" prefetch="none">
                    <img src={logo} alt="TrustWaiver" className="h-8 w-8" />
                    <span className="ml-2 text-lg font-bold text-primary text-[#150E00]">TrustWaiver</span>
                </Link>
                <div className="flex items-center">
                    <nav className="text-slate-700 dark:text-slate-200">
                        <ul className="flex space-x-10 items-center">
                            <li>
                                <Link
                                    to="/"
                                    className={`hover:text-[#facc15] hover:underline hover:underline-offset-4 hover:decoration-4 focus:text-[#facc15] focus:underline focus:underline-offset-4 focus:decoration-4 ${isActive("/") ? "text-[#facc15] underline underline-offset-4 decoration-4" : "text-white"}`}
                                    prefetch="none"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/templates"
                                    className={`hover:text-[#facc15] hover:underline hover:underline-offset-4 hover:decoration-4 focus:text-[#facc15] focus:underline focus:underline-offset-4 focus:decoration-4 ${isActive("/templates") ? "text-[#facc15] underline underline-offset-4 decoration-4" : "text-white"}`}
                                    prefetch="none"
                                >
                                    Waiver templates
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className={`hover:text-[#facc15] hover:underline hover:underline-offset-4 hover:decoration-4 focus:text-[#facc15] focus:underline focus:underline-offset-4 focus:decoration-4 ${isActive("#") ? "text-[#facc15] underline underline-offset-4 decoration-4" : "text-white"}`}
                                    prefetch="none"
                                >
                                    Reporting
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}