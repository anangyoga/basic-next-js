import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";
import styles from "./Layout.module.css";
import Head from "next/head"

interface LayoutProps{
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps){
    const {children, pageTitle} = props;
    return(
        <>
        <Head>
        <title>Basic NextJs | {''}{pageTitle}</title>
        <meta name="description" content="Basic Next Js" />
      </Head>
        <div className={styles.container}>
            <Header />
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
        </>
    )
}