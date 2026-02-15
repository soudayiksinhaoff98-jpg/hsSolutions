'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function NavigationBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/logo1.png"
            alt="HS Solutions Logo"
            width={220}
            height={80}
            priority
            className="
              h-12 sm:h-20 lg:h-25
              w-auto object-contain
              transition-all duration-300
            "
          />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-medium">
          {["Services","About","Careers","Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-background border-t border-border px-6 py-6 space-y-5 text-center text-lg font-medium shadow-lg">
          {["Services","About","Careers","Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  )
}
