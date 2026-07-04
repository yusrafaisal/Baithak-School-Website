"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [blogsOpen, setBlogsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: "#17469E",
        fontFamily: "'Nunito', sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <div
        className="nav-inner"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 32px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0px", textDecoration: "none", flexShrink: 0 }}>
          <Image
            className="nav-logo-icon"
            src="/images/landing_page_imgs/logo.png"
            alt="Baithak School Network logo"
            width={50}
            height={50}
            style={{ objectFit: "contain" }}
          />
          <Image
            className="nav-logo-wordmark"
            src="/images/landing_page_imgs/baithak-school-logo2.png"
            alt="Baithak School Network - Society for Educational Welfare"
            width={220}
            height={50}
            style={{ objectFit: "contain", width: "auto", filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "56px",
          }}
          className="desktop-nav"
        >
          {[
            { label: "Our Story", href: "/our-story" },
            { label: "Programs", href: "/programs" },
            { label: "Stories & Voices", href: "/stories-and-voices" },
            { label: "Your Support", href: "/your-support" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Blogs & Stories dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setBlogsOpen(!blogsOpen)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: 0,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Blogs & Stories
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {blogsOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  left: 0,
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  minWidth: "180px",
                  overflow: "hidden",
                  zIndex: 100,
                }}
              >
                {[
                  { label: "Blogs", href: "/blogs-stories" },
                  { label: "Annual Reports", href: "/annual-report" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      color: "#17469E",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                    onClick={() => setBlogsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side: Donate + Language */}
        <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            className="nav-donate-btn"
            href="/donate"
            style={{
              backgroundColor: "#FFBC25",
              color: "#282727",
              fontWeight: 800,
              fontSize: "15px",
              padding: "10px 24px",
              borderRadius: "15px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Donate Now
          </Link>
          <button
            className="lang-toggle-btn"
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Nunito', sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            EN | اردو
          </button>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
              flexShrink: 0,
            }}
          >
            <span style={{ width: "22px", height: "2px", backgroundColor: "#fff", display: "block" }} />
            <span style={{ width: "22px", height: "2px", backgroundColor: "#fff", display: "block" }} />
            <span style={{ width: "22px", height: "2px", backgroundColor: "#fff", display: "block" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "#17469E",
            padding: "16px 32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {[
            { label: "Our Story", href: "/our-story" },
            { label: "Programs", href: "/programs" },
            { label: "Stories & Voices", href: "/stories-and-voices" },
            { label: "Your Support", href: "/your-support" },
            { label: "Blogs", href: "/blogs-stories" },
            { label: "Annual Reports", href: "/annual-report" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{ color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 600 }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          .nav-inner { padding: 0 16px !important; }
          .nav-logo-icon { width: 34px !important; height: 34px !important; }
          .nav-logo-wordmark { height: 32px !important; }
          .nav-right { gap: 8px !important; }
          .nav-donate-btn { font-size: 12px !important; padding: 8px 14px !important; }
          .lang-toggle-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}