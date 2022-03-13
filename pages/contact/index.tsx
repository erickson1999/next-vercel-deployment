import React from "react";
import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";
import DarkLayout from "../../components/layouts/DarkLayout";
export default function Contact() {
  return (
    <MainLayout>
      <DarkLayout>
        <h1 className="title">
          Welcome to contact! Go to<Link href="/">Home</Link>?
        </h1>

        <p className="description">
          Get started by editing <code className="code">pages/index.js</code>
        </p>
      </DarkLayout>
    </MainLayout>
  );
}
