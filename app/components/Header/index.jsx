import { Link } from "@remix-run/react";
import logo from "./logo.png";
import { useLocation } from "@remix-run/react";

export default function Component() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="mx-auto bg-slate-800">
      <header className="flex h-14 w-full items-center px-4 md:px-6 lg:px-8 space-x-2">
        <Link to="/" className="mr-6 lg:flex items-center" prefetch="none">
          <img src={logo} alt="TrustWaiver" className="h-8 w-8" />
          <span className="ml-2 text-lg font-bold text-primary text-[#150E00]">
            TrustWaiver
          </span>
        </Link>
        <div className="flex items-center">
          <nav className="text-slate-700 dark:text-slate-200">
            <ul className="flex space-x-10 items-center">
              <li>
                <Link
                  to="/"
                  className={`text-white hover:text-primary hover:underline hover:underline-offset-8 hover:decoration-2 ${
                    isActive("/")
                      ? "underline underline-offset-8 decoration-2 decoration-primary"
                      : ""
                  }`}
                  prefetch="none"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/templates"
                  className={`text-white hover:text-primary hover:underline hover:underline-offset-8 hover:decoration-2 ${
                    isActive("/templates") || isActive("/template")
                      ? "underline underline-offset-8 decoration-2 decoration-primary"
                      : ""
                  }`}
                  prefetch="none"
                >
                  Waiver templates
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className={`text-white hover:text-primary hover:underline hover:underline-offset-8 hover:decoration-2 ${
                    isActive("#")
                      ? "underline underline-offset-8 decoration-2 decoration-primary"
                      : ""
                  }`}
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
  );
}
