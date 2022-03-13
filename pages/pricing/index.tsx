import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import DarkLayout from "../../components/layouts/DarkLayout";
import Link from "next/link";
export default function Pricing() {
  return (
    <>
      <h1 className="title">
        Welcome to About!Go to <Link href="/">Home</Link>?
      </h1>
      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </>
  );
}

Pricing.getLayout = function (page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
