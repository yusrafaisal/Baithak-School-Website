import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Left: Logo + Bank Details */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="Baithak Logo" width={40} height={40} />
            <div>
              <span className="footer-logo-title">Baithak School Network</span>
              <span className="footer-logo-sub">Society for Educational Welfare (Regd)</span>
            </div>
          </div>
          <div className="footer-bank">
            <p><strong>Make a deposit or a direct bank transfer:</strong></p>
            <p>Meezan Bank Account Title: Society For Educational Welfare</p>
            <p>Swift Code: MEZNPKKA</p>
            <p>Zakaat Account: PK73 MEZN 0001030100019290</p>
            <p>Donation Account: PK03 MEZN 0001030100019289</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/donate">Donate Now</Link>
          <Link href="/how-to-donate">How to Donate</Link>
          <Link href="/contact">Contact us</Link>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h4>SUPPORT</h4>
          <Link href="/help">Help Centre</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Socials */}
        <div className="footer-col">
          <h4>SOCIALS</h4>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Use</Link>
        <Link href="/legal">Legal</Link>
      </div>
    </footer>
  );
}
