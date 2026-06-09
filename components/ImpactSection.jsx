import Link from "next/link";

export default function ImpactSection() {
  return (
    <section className="impact section-pad">
      <div className="container impact-inner">
        <div className="impact-image-wrap">
          <div className="circle-yellow-bg">
            <img src="/images/impact-girl.png" alt="Student" className="impact-img" />
          </div>
        </div>
        <div className="impact-text">
          <h2>
            Your support<br />
            <strong>drives</strong> real change
          </h2>
          <p>
            Baithak School brings quality education to Pakistan's most underserved
            communities — one neighbourhood at a time.
          </p>
          <Link href="/impact" className="btn-impact">See your Impact Now</Link>
        </div>
      </div>
    </section>
  );
}
