const stories = [
  { name: "Shohaib's Story", img: "/images/story-shohaib.png", bg: "pink" },
  { name: "Laiba's Story", img: "/images/story-laiba.png", bg: "yellow" },
  { name: "Mohib's Story", img: "/images/story-mohib.png", bg: "green" },
];

export default function SunoMeriKahani() {
  return (
    <>
      {/* Blue Urdu Banner */}
      <div className="smk-banner">
        <h2 className="smk-urdu">سنو میری کہانی</h2>
      </div>

      {/* What is Suno Meri Kahani */}
      <section className="smk-section section-pad">
        <div className="container">
          <h2 className="smk-heading">What is Suno Meri Kahani?</h2>
          <p className="smk-sub">
            A campaign by Baithak, born from the belief that every child deserves to be heard.
          </p>
          <div className="smk-cards">
            {stories.map((s) => (
              <div key={s.name} className="smk-card">
                <div className={`smk-circle smk-circle--${s.bg}`}>
                  <img src={s.img} alt={s.name} />
                </div>
                <p className="smk-card-name">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
