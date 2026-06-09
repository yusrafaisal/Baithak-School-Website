const programs = [
  {
    title: "Formal & Non-Formal Schools",
    desc: "Establishing formal schools and non-formal schools in slums and low-income areas to reduce access barriers.",
    img: "/images/program-schools.png",
  },
  {
    title: "Teacher Training & Development",
    desc: "Local teachers, empowered through structured training to deliver quality learning in every classroom.",
    img: "/images/program-teachers.png",
  },
  {
    title: "Community Engagement",
    desc: "Working closely with families and communities to ensure children attend school consistently.",
    img: "/images/program-community.png",
  },
];

export default function BridgingGap() {
  return (
    <section className="bridge section-pad">
      <div className="container">
        <h2 className="bridge-heading">
          How Baithak is Bridging the <span className="bridge-gap">Gap</span>
        </h2>
        <div className="bridge-cards">
          {programs.map((p) => (
            <div key={p.title} className="bridge-card">
              <div className="bridge-card-img">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="bridge-card-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
