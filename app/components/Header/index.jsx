import { Link } from "@remix-run/react";
import logo from "./logo.png";

export default function Component() {
    return (
        <div className="mx-auto bg-blue-500">
            <header className="flex h-14 w-full items-center px-4 md:px-6 lg:px-8 space-x-20">
                <Link to="#" className="mr-6 lg:flex items-center" prefetch="none">
                    <img src={logo} alt="TrustWaiver" className="h-8 w-8" />
                    <span className="ml-2 text-white text-lg font-bold">TrustWaiver</span>
                </Link>
                <div className="flex items-center">
                    <nav className="text-slate-700 dark:text-slate-200">
                        <ul className="flex space-x-10 items-center">
                            <li>
                                <Link
                                    to="#"
                                    className="text-white hover:text-slate-50 focus:text-slate-50"
                                    prefetch="none"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                            <Link
                                    to="#"
                                    className="text-white hover:text-slate-50 focus:text-slate-50"
                                    prefetch="none"
                                >
                                    Waiver Templates
                                </Link>
                            </li>
                            <li>
                            <Link
                                    to="#"
                                    className="text-white hover:text-slate-50 focus:text-slate-50"
                                    prefetch="none"
                                >
                                    My Waivers
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

// shield icon, with text "TW" inside