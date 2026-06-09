import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">
          Fulfilling <span className="hero-highlight">dreams</span>
        </h1>
        <p className="hero-sub">one child at a time.....</p>
        <Link href="/donate" className="btn-hero-donate">Donate Now</Link>
      </div>

      {/* Decorative circles */}
      <div className="hero-circle yellow" />
      <div className="hero-circle green" />
      <div className="hero-circle red" />

      {/* Hero image */}
      <div className="hero-image-wrap">
        <img src="/images/hero-girl.png" alt="Student" className="hero-img" />
      </div>
    </section>
  );
}
