import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from './styles/tokens.stylex';


import "./index.css";

export const links: LinksFunction = () => [
];

const styles = stylex.create({
  root: {
    backgroundColor: {
      default: colors.background,
    },
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
  }
})


export function Layout({ children }: { children: React.ReactNode }) {
  return ( 
    <html lang="en" {...stylex.props(styles.root)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
