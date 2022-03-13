/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import DarkLayout from "../components/layouts/DarkLayout";
export default function HomePage() {
  return (
    <MainLayout>
      <DarkLayout>
        <h1 className="title">
          Welcome to Home! Go to<Link href="/about">About</Link>?
        </h1>

        <p className="description">
          Get started by editing <code className="code">pages/index.js</code>
        </p>
      </DarkLayout>
    </MainLayout>
  );
}
