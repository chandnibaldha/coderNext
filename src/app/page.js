//import Image from "next/image";
import styles from "../Styles/page.module.css";
import Head from "next/head";
//import Navbar from "@/Components/Navbar";

export default function Home() {
  // console.log("Hello i am Next");
  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.title}>CoderNext</title>
      </Head>

      <main className={styles.main}>
        <h1>CoderNext</h1>
        <div className={styles.imagewrap}>
          {/* <Image className={styles.myImg} src="/homeimg.jfif" width={237} height={158}/> */}
          <img
            className={styles.myImg}
            src="/homeimg.jfif"
            width={237}
            height={158}
            alt="hunting coder"
          />
        </div>
        <p className={styles.description}>A blog for coder by a coderNext</p>
      </main>
    </div>
  );
}
