import React from "react";
import Styles from "../Styles/blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={Styles.container}>
      <main className={Styles.main}>
        <h2>Popular Blogs</h2>
        <div className="blogItem">
          <Link href={"/blogpost/learn-javascript"}>
            <h3>How to learn the JavaScript?</h3>
          </Link>
          <p>Javascript is the popular language.</p>
        </div>

        <div className="blogItem">
          <h3>How to learn the JavaScript?</h3>
          <p>Javascript is the popular language.</p>
        </div>

        <div className="blogItem">
          <h3>How to learn the JavaScript?</h3>
          <p>Javascript is the popular language.</p>
        </div>

        <div className="blogItem">
          <h3>How to learn the JavaScript?</h3>
          <p>Javascript is the popular language.</p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
