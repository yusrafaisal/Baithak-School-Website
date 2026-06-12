import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Annual Report 2026 | Baithak School Network",
  description: "Read the Baithak School Network 2025 Annual Report.",
};

export default function AnnualReportPage() {
  return (
    <main>
      <Navbar />

      <section className="ar">
        <h1 className="ar__title">BSN Annual Report 2026</h1>
        <p className="ar__sub">
          Discover how, together with our global partners, we are reshaping what's
          possible for children in Pakistan.
        </p>

        {/* PDF embed — file lives at public/Annual-Report-2025.pdf */}
        <div className="ar__viewer">
          <iframe
            src="/Annual-Report-2025.pdf"
            title="BSN Annual Report 2026"
            className="ar__iframe"
            allow="fullscreen"
          />
        </div>

        {/* Fallback download link */}
        <a
          href="/Annual-Report-2025.pdf"
          download
          className="ar__download"
        >
          ⬇ Download PDF
        </a>
      </section>

      <Footer />

      <style>{`
        .ar {
          background: #ffffff;
          padding: 60px 24px 80px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .ar__title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 40px;
          color: #17469E;
          text-align: center;
          margin: 0 0 12px;
        }
        .ar__sub {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 17px;
          line-height: 1.7;
          color: #444;
          text-align: center;
          margin: 0 0 40px;
        }
        .ar__viewer {
          width: 100%;
          /* 16:21 aspect — roughly A4 */
          aspect-ratio: 8 / 11;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(0,0,0,0.15);
        }
        .ar__iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }
        .ar__download {
          display: block;
          text-align: center;
          margin: 28px auto 0;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 15px;
          color: #17469E;
          text-decoration: underline;
          width: fit-content;
        }
        .ar__download:hover { color: #0F295A; }
        @media (max-width: 600px) {
          .ar__title { font-size: 26px; }
          .ar { padding: 40px 16px 60px; }
        }
      `}</style>
    </main>
  );
}
