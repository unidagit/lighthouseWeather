import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-slate-400 h-screen">
      <Link href="/">
        <h1 className="text-3xl font-bold p-5">등대지기</h1>
      </Link>
      <nav className="flex-col p-5">
        <Link href="/">
          <p>제주</p>
        </Link>

        <Link href="/busan">
          <p>부산</p>
        </Link>

        <Link href="/mokpo">
          <p>목포</p>
        </Link>

        <Link href="/ulsan">
          <p>울산</p>
        </Link>
      </nav>
    </header>
  );
}
