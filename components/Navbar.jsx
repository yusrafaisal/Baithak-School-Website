"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <div className="logo-circle">
            <img src="/images/logo.png" alt="Baithak Logo" width={36} height={36} />
          </div>
          <div className="logo-text">
            <span className="logo-title">Baithak School Network</span>
            <span className="logo-sub">Society for Educational Welfare (Regd)</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li><Link href="/our-story">Our Story</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><Link href="/stories-voices">Stories &amp; Voices</Link></li>
          <li><Link href="/your-support">Your Support</Link></li>
          <li className="has-dropdown">
            <Link href="/blogs-stories">Blogs &amp; Stories ▾</Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          <Link href="/donate" className="btn-donate">Donate Now</Link>
          <button className="lang-toggle">EN | اردو</button>
        </div>

        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/our-story">Our Story</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/stories-voices">Stories &amp; Voices</Link>
          <Link href="/your-support">Your Support</Link>
          <Link href="/blogs-stories">Blogs &amp; Stories</Link>
          <Link href="/donate" className="btn-donate mobile-donate">Donate Now</Link>
        </div>
      )}
    </nav>
  );
}
