'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Instagram', href: '#' },
  ]

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy', href: '#' },
  ]

  return (
    <footer id="contact" className="bg-[hsl(var(--background))] border-t border-[hsl(var(--border))] py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-[hsl(var(--accent))] mb-4">RKS.Best</h3>
            <p className="text-[hsl(var(--muted-foreground))] text-sm">
              Building gratitude and connection across the universe.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[hsl(var(--foreground))] mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-[hsl(var(--foreground))] mb-4">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[hsl(var(--foreground))] mb-4">Get in Touch</h4>
            <p className="text-[hsl(var(--muted-foreground))] text-sm mb-2">hello@rksbest.com</p>
            <button className="px-4 py-2 border border-[hsl(var(--accent))] text-[hsl(var(--accent))] text-sm font-semibold rounded hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--background))] transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[hsl(var(--border))] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[hsl(var(--muted-foreground))] text-sm">
            © {currentYear} RKS.Best. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))] transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
