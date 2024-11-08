import type { MetaFunction } from "@remix-run/node";
import * as stylex from "@stylexjs/stylex";
import {colors, font} from '../styles/tokens.stylex';

const styles = stylex.create({
  root: {
    backgroundColor: {
      default: 'lightblue',
    },
  },
  header: {
    fontSize: font.large,
    lineHeight: 1.5,
    backgroundColor: "white",
    padding: 4,
    borderRadius: 8,
    paddingInline: 16,
    marginInline: 16,
  },
  list: {    
    color: {
      default: colors.primaryText,
    },
    marginTop: 10,
  },
  listItem: {    
    marginTop: 10,
  },
  a : {
    color: {
      default: colors.primaryText,
      ':hover': colors.accent,
    },
    fontSize: font.medium,
  }
})

export const meta: MetaFunction = () => {
  return [
    { title: "Remix and StylexJS" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <header>
        <h1 {...stylex.props(styles.header)}>Welcome to Remix with StyleX</h1>
      </header>
      <ul {...stylex.props(styles.list)}>
        {resources.map(({ href, text }) => (
          <li key={href} {...stylex.props(styles.listItem)}>
            <a {...stylex.props(styles.a)}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const resources = [
  {
    href: "https://remix.run/start/quickstart",
    text: "remix Quick Start (5 min)",
  },
  {
    href: "https://remix.run/start/tutorial",
    text: "Remix Tutorial (30 min)",
  },
  {
    href: "https://remix.run/docs",
    text: "Remix Docs",
  },
  {
    href: "https://stylexjs.com/docs/learn/thinking-in-stylex/",
    text: "Thinking in StyleX Discord",
  },
];
