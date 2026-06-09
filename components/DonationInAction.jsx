import Link from "next/link";

export default function DonationInAction() {
  return (
    <section className="dia section-pad">
      <div className="container dia-inner">
        <h2 className="dia-heading">Your Donation In Action</h2>
        <p className="dia-sub">How your donation transforms lives</p>
        <div className="dia-image-card">
          <img src="/images/donation-illustration.png" alt="Donation in action" />
          {/* Decorative circles */}
          <div className="dia-circle dia-circle--yellow-outline" />
          <div className="dia-circle dia-circle--green" />
          <div className="dia-circle dia-circle--pink" />
          <div className="dia-circle dia-circle--pink2" />
        </div>
        <p className="dia-caption">
          <em>Poverty, child labor, and lack of nearby schools keep <strong>millions of children</strong> away from classrooms</em>
        </p>
        <Link href="/stories" className="btn-outline">Read More Stories</Link>
      </div>
    </section>
  );
}
