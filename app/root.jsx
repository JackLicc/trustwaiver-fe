import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

import Header from "./components/Header";

import styles from "./styles/tailwind.css?url";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
