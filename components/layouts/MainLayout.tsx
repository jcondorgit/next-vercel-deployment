import React from "react";
import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from './MainLayout.module.css';
import { MainLayoutProps } from "./interfaces";

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return  (
    <>
    <div className={`${styles.container}`}>
      <Head>
        <title>Title</title>
        <meta name="description" content="Contact page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={`${styles.main}`}>
          { children }
      </main>
    </div>
    </>
  );
}