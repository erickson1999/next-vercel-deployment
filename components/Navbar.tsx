/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";
const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <>
      <nav className={styles.menu}>
        {menuItems.map(({ text, href }) => (
          <ActiveLink key={text} titleLink={text} href={href} />
        ))}
      </nav>
    </>
  );
};
