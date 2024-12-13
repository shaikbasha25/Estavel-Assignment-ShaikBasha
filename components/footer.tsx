import { Building2, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-6 w-6" />
              <span className="font-bold text-xl text-white">Stonepedia</span>
            </div>
            <p className="text-sm">
              Your premier destination for exquisite natural stones, marbles, and granites.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>123 Stone Street</li>
              <li>Mumbai, India</li>
              <li>Phone: +91 1234567890</li>
              <li>Email: info@stonepedia.in</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Stonepedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}