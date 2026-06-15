import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#082E76", padding: "60px 64px 32px", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Main footer content */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "40px", alignItems: "flex-start" }}>
        
        {/* Left - Logo + Bank Info */}
        <div style={{ flex: "0 0 550px", minWidth: "280px" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0px", marginBottom: "10px" }}>
            <Image src="/images/landing_page_imgs/logo.png" alt="Baithak Logo" width={46} height={55} style={{ objectFit: "contain" }} />
            <Image src="/images/landing_page_imgs/baithak-school-logo2.png" alt="Baithak School Network" width={180} height={55} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
          </div>

          {/* Bank transfer heading */}
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "31px", color: "#FFFFFF", marginBottom: "16px" }}>
            Make a deposit or a direct<br /> bank transfer:
          </p>

          {/* Bank details */}
          <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "#EBEBEB", margin: 0 }}>
            Meezan Bank Account Title: Society For Educational Welfare<br />
            Swift Code: MEZNPKKA<br />
            Zakaat Account: PK73 MEZN 0001030100019290<br />
            Donation Account: PK03 MEZN 0001030100019289
          </p>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Quick Links */}
        <div style={{ minWidth: "160px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px", color: "#EBEBEB", textTransform: "uppercase", marginBottom: "24px" }}>
            Quick Links
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {[
              { label: "Home", href: "/" },
              { label: "About us", href: "/about" },
              { label: "Donate Now", href: "/donate" },
              { label: "How to Donate", href: "/how-to-donate" },
              { label: "Contact us", href: "/contact" },
            ].map((item) => (
              <Link key={item.label} href={item.href} style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "16px", color: "#EBEBEB", textDecoration: "underline" }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Support */}
        <div style={{ minWidth: "160px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px", color: "#EBEBEB", textTransform: "uppercase", marginBottom: "24px" }}>
            Support
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {[
              { label: "Help Centre", href: "/help" },
              { label: "Contact Us", href: "/contact" },
            ].map((item) => (
              <Link key={item.label} href={item.href} style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "16px", color: "#EBEBEB", textDecoration: "none" }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div style={{ minWidth: "140px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px", color: "#EBEBEB", textTransform: "uppercase", marginBottom: "24px" }}>
            Socials
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {[
              { label: "Instagram", href: "https://instagram.com" },
              { label: "Facebook", href: "https://facebook.com" },
              { label: "YouTube", href: "https://youtube.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "Twitter", href: "https://twitter.com" },
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "16px", color: "#EBEBEB", textDecoration: "none" }}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar - Privacy Policy, Terms, Legal */}
      <div style={{ maxWidth: "1400px", margin: "48px auto 0", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", display: "flex", justifyContent: "flex-end", gap: "48px" }}>
        {[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Use", href: "/terms" },
          { label: "Legal", href: "/legal" },
        ].map((item) => (
          <Link key={item.label} href={item.href} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", color: "#737373", textDecoration: "none" }}>
            {item.label}
          </Link>
        ))}
      </div>

    </footer>
  );
}