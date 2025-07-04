"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/pages/about" },
  { name: "Projects", href: "/pages/projects" },
  { name: "Contact", href: "/pages/contact" },
]

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-accent text-xl font-bold">Duwayne Blok</span>
        <div className="space-x-4">
          {links.map(link => (
            <Link key={link.name} href={link.href}>
              <span className={`hover:text-accent transition ${
                pathname === link.href ? "text-accent" : "text-white"
              }`}>
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
