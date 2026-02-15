'use client'

import Image from "next/image"
import Link from "next/link"
import { footerLinks } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* TOP SECTION */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <Image
              src="/assets/logo/logo1.png"
              alt="HS Solutions Logo"
              width={200}
              height={80}
              className="h-20 w-auto object-contain"
            />

            <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
              We design and build custom software, mobile apps,
              and backend systems for businesses worldwide.
            </p>

            <p className="mt-4 text-xs text-foreground/50">
              © {new Date().getFullYear()} HS Solutions. All rights reserved.
            </p>
          </div>

          {/* LINKS */}
          <FooterColumn title="Solutions" links={footerLinks.solutions} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Industries" links={footerLinks.industries} />

        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-border" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-sm text-foreground/60">
          <p>Built with clean code and honest engineering.</p>

          <div className="flex gap-6">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Security</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

/* Small reusable column */
function FooterColumn({ title, links }: any) {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-foreground">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link: any, i: number) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
