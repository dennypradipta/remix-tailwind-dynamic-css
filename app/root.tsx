import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import { userPrefs } from "./cookies";

import customStyle1 from "../styles/custom-style-1.css";
import customStyle2 from "../styles/custom-style-2.css";

export const meta: MetaFunction = (arg) => {
  return { title: "New Remix App" };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader({ request }: any) {
  const url = new URL(request.url);
  let theme = url.searchParams.get("theme") || "";

  if (theme.indexOf("custom-style-1") >= 0) {
    theme = customStyle1;
  } else if (theme.indexOf("custom-style-2") >= 0) {
    theme = customStyle2;
  }

  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await userPrefs.parse(cookieHeader)) || {};
  if (theme) {
    cookie.cssToUse = theme;
  } else if (cookie.cssToUse) {
    theme = cookie.cssToUse;
  }

  return json(
    { cssToUse: theme },
    {
      headers: {
        "Set-Cookie": await userPrefs.serialize(cookie),
      },
    }
  );
}

export default function App() {
  const data = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {data.cssToUse && <link rel="stylesheet" href={data.cssToUse} />}
      </head>
      <body className="leading-normal tracking-normal">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
