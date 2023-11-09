"use client";

import Link from "next/link";

import { navItems } from "@/components/CMS";

export default function Navbar() {
  return (
    <header className="top-0 z-50 flex-shrink-0 py-3 bg-neutral-950/50 backdrop-blur border-b border-neutral-950 sticky">
      <div className="container flex flex-col justify-between px-6 mx-auto md:flex-row md:items-center">
        <Link href="/" className="flex items-center mx-auto md:items-start mt-2 md:mt-0">
          <img
            src="/logo.png"
            alt="与映火一同开启您的专业摄影之旅"
            className="w-8 h-auto"
          />
        </Link>
        <ul className="grid grid-flow-col gap-4 mx-auto mt-2 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-8 lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-neutral-50 hover:bg-neutral-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  )
}