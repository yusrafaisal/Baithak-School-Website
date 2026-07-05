"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IMG = "/images/stories_and_voices_imgs";
const LANDING_IMG = "/images/landing_page_imgs";

const moreStories = [
  { img: `${IMG}/mohib-story.jpg`, title: "From Fixing Bikes to Building Dreams", date: "2026-01-27", desc: "Mohib's Journey From Fixing Bikes to Building Dreams. Class 3, Baithak School Rana Town, Lahore. Every day, as the streets come alive..." },
  { img: `${IMG}/hadia-story.jpg`, title: "The Icecream Stick Girl 'Hadia'", date: "2026-01-24", desc: "The Ice Cream Stick Girl 'Hadia Shahbaz', Class-4 Student, Baithak School Barket Town, Lahore. In a small, bustling neighborhood..." },
  { img: `${IMG}/shoaib-story.jpg`, title: "Shoaib: Learning in Class, working at the dairy...", date: "2026-05-06", desc: "Shoaib: Learning in Class, Working at the Dairy — A Journey of Determination. At Baithak School Rana Town, students don't..." },
  { img: `${IMG}/sufyan-story.png`, title: "A Carpenter's Son 'Sufyan Samiullah'", date: "2026-01-20", desc: "A Carpenter's Son Sufyan Samiullah, Class-4, Baithak School Swat. In the serene valleys of Swat, nine-year-old Sufyan is rewriting..." },
  { img: `${IMG}/laiba-story.jpg`, title: "Laiba: Working as a Cleaner along side her m...", date: "2026-05-02", desc: "I work as a cleaner and sweeper alongside my mother, scrubbing floors and streets from dawn till dusk to keep things..." },
  { img: `${IMG}/mohib-working.png`, title: "Mohib: Helping his father in his Mechanic shop afte..", date: "2026-05-02", desc: "I'm 14 years old, and every day after school, I help my father at his mechanic shop, fixing bikes and cars with greasy hands..." },
];

export default function StoriesAndVoicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>

        {/* ── HERO ── */}
        <section className="hero-section sv-hero" style={{ position: "relative", width: "100%", minHeight: "600px", overflow: "hidden" }}>
          <Image src={`${IMG}/her-bg.png`} alt="Background" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} priority />

          {/* Decorative circles — BEHIND the kids photos (lower z-index) */}
          <div className="hero-circle" style={{ position: "absolute", width: "90px", height: "90px", left: "20px", top: "30px", border: "4px solid #FFB600", borderRadius: "50%", zIndex: 1 }} />
          <div className="hero-circle" style={{ position: "absolute", width: "70px", height: "70px", left: "70px", top: "110px", backgroundColor: "#2AA76F", borderRadius: "50%", zIndex: 1 }} />
          <div className="hero-circle" style={{ position: "absolute", width: "150px", height: "150px", right: "40px", top: "40px", border: "4px solid #E05163", borderRadius: "50%", zIndex: 1 }} />

          {/* Suno Meri Kahani title — reused from landing page assets */}
          <div className="hero-title-wrap" style={{ position: "relative", zIndex: 2, padding: "48px 24px 20px", textAlign: "center" }}>
            <div className="smk-words-row" style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", flexWrap: "nowrap", gap: "16px" }}>
              <Image className="smk-word" src={`${LANDING_IMG}/kahani.png`} alt="کہانی" width={189} height={120} style={{ width: "auto", height: "clamp(35px, 10vw, 110px)" }} />
              <Image className="smk-word" src={`${LANDING_IMG}/meri5.png`} alt="میری" width={180} height={120} style={{ width: "auto", height: "clamp(35px, 10vw, 110px)" }} />
              <Image className="smk-word" src={`${LANDING_IMG}/suno.png`} alt="سنو" width={180} height={120} style={{ width: "auto", height: "clamp(35px, 10vw, 110px)" }} />
            </div>
          </div>

          {/* Kids photos — anchored to bottom of hero, in front of circles */}
          <div className="hero-kids-row" style={{ position: "absolute", bottom: "0px", left: 0, right: 0, zIndex: 3, display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "0px", flexWrap: "wrap" }}>
            <div className="hero-kid-photo" style={{ position: "relative", width: "clamp(220px, 38vw, 420px)", height: "clamp(280px, 46vw, 480px)" }}>
              <Image src={`${IMG}/hero-girls.png`} alt="Students" fill sizes="420px" style={{ objectFit: "cover", objectPosition: "bottom" }} />
            </div>
            <div className="hero-kid-photo" style={{ position: "relative", width: "clamp(220px, 38vw, 420px)", height: "clamp(280px, 46vw, 480px)" }}>
              <Image src={`${IMG}/hero-boys.png`} alt="Students" fill sizes="420px" style={{ objectFit: "cover", objectPosition: "bottom" }} />
            </div>
          </div>

          {/* Curved white wave at the very bottom */}
          <div style={{ position: "absolute", bottom: "-2px", left: 0, right: 0, zIndex: 4, lineHeight: 0 }}>
            <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "70px" }}>
              <path d="M0,90 L0,90 Q720,90 1440,90 L1440,0 Q720,80 0,0 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* ── STORY SELECTOR (exact same circles/images/classes as landing page) ── */}
        <section style={{ backgroundColor: "#fff", padding: "60px 44px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="smk-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0px", justifyContent: "center" }}>
              {[
                { img: "story-shohaib.png", name: "Shohaib's Story", color: "#E05163", pos: "center 70px", target: "more-stories" },
                { img: "story-laibaa.png", name: "Laiba's Story", color: "#FFB600", pos: "center 40px", target: "more-stories" },
                { img: "story-mohib.png", name: "Mohib's Story", color: "#2AA76F", pos: "center 90px", target: "story-detail" },
              ].map((s) => (
                <div key={s.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0px" }}>
                  <button
                    onClick={() => document.getElementById(s.target)?.scrollIntoView({ behavior: "smooth" })}
                    style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                  >
                    <div className="story-wrap" style={{ position: "relative", width: "260px", height: "350px" }}>
                      <div className="story-circle" style={{ position: "absolute", bottom: 0, left: 0, width: "260px", height: "260px", borderRadius: "50%", backgroundColor: s.color }} />
                      <div className="story-photo" style={{ position: "absolute", bottom: 0, left: 0, width: "260px", height: "440px", overflow: "hidden", borderBottomLeftRadius: "130px", borderBottomRightRadius: "130px", zIndex: 1 }}>
                        <Image src={`${LANDING_IMG}/${s.img}`} alt={s.name} fill sizes="260px" style={{ objectFit: "cover", objectPosition: s.pos }} />
                      </div>
                    </div>
                  </button>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "clamp(18px, 1.5vw, 26px)", color: "#282727", textAlign: "center" }}>{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUNO MERI KAHANI BLUE BAND (exactly reused from landing page) ── */}
        <section style={{ position: "relative", backgroundColor: "#19499C", padding: "90px 0", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "30px", backgroundColor: "#fff", clipPath: "ellipse(55% 100% at 50% 0%)" }} />
          <div className="smk-words-row" style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", flexWrap: "nowrap", gap: "16px", padding: "30px 20px", overflow: "hidden" }}>
            <Image className="smk-word" src={`${LANDING_IMG}/kahani.png`} alt="کہانی" width={189} height={120} style={{ width: "auto", height: "clamp(35px, 10vw, 120px)" }} />
            <Image className="smk-word" src={`${LANDING_IMG}/meri5.png`} alt="میری" width={180} height={120} style={{ width: "auto", height: "clamp(35px, 10vw, 120px)" }} />
            <Image className="smk-word" src={`${LANDING_IMG}/suno.png`} alt="سنو" width={180} height={120} style={{ width: "auto", height: "clamp(35px, 10vw, 120px)" }} />
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40px", backgroundColor: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)" }} />
        </section>

        {/* ── STORY DETAIL (Mohib — matches prototype layout exactly) ── */}
        <section id="story-detail" style={{ backgroundColor: "#fff", padding: "80px 64px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>

            {/* Wide oval banner photo with green/pink decorative backdrop */}
            <div className="story-banner-wrap" style={{ position: "relative", width: "100%", height: "clamp(220px, 32vw, 340px)", margin: "0 auto 70px" }}>
              <div style={{ position: "absolute", top: "16px", left: "16px", right: "-16px", bottom: "-16px", border: "6px solid #E05163", borderRadius: "50%", zIndex: 0 }} />
              <div style={{ position: "absolute", top: "-14px", left: "-14px", right: "14px", bottom: "14px", backgroundColor: "#2AA76F", borderRadius: "50%", zIndex: 1 }} />
              <div style={{ position: "absolute", top: "-20px", left: "60px", width: "34px", height: "34px", backgroundColor: "#FFB600", borderRadius: "50%", zIndex: 3 }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", overflow: "hidden", zIndex: 2 }}>
                <Image src={`${IMG}/mohib-working.png`} alt="Mohib" fill sizes="760px" style={{ objectFit: "cover" }} />
              </div>
            </div>

            {/* Name + photo (left column) alongside bio + quote (right column) */}
            <div className="story-content-row" style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
              <div className="story-left-col" style={{ flex: "0 0 280px", width: "280px" }}>
                <Image src={`${IMG}/mera-naam-mohib-urdu.png`} alt="میرا نام Mohib" width={300} height={160} style={{ width: "auto", height: "clamp(160px, 20vw, 230px)", marginTop: "-36px", marginBottom: "-12px" }} />
                <div className="story-photo-box" style={{ position: "relative", width: "100%", maxWidth: "300px", height: "clamp(200px, 22vw, 100px)", borderRadius: "10px", overflow: "hidden", marginTop: "30px" }}>
                  <Image src={`${IMG}/mohib-story.jpg`} alt="Mohib" fill sizes="280px" style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: "1.7", color: "#000", marginBottom: "18px" }}>
                  Every day, as the bustling streets of Rana Town, Pakistan come alive, 9 year old Mohib ur Rehman juggles two worlds: the classroom and the motorcycle repair shop. By morning, he's a dedicated Class 3 student at Baithak School Network, eager to learn and grow. By afternoon, he's at his father's side, fixing bikes and contributing to his family's livelihood.
                </p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: "1.7", color: "#000", marginBottom: "24px" }}>
                  As the eldest of five siblings, Mohib carries the responsibility of being a role model. Two of his younger siblings also study at Baithak School, where education is both affordable and of high quality.
                </p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: "1.7", color: "#000" }}>
                  "Baithak has been a blessing for our family," his father says. "We trust the school to provide the education and values that will shape our children's futures."
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── MORE STORIES ── */}
        <section id="more-stories" style={{ backgroundColor: "#fff", padding: "0 64px 80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", borderTop: "4px solid #DFDEE2", paddingTop: "64px" }}>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(32px, 3.5vw, 48px)", color: "#282727", marginBottom: "48px", textAlign: "center" }}>
              More <span style={{ fontWeight: 400 }}>Stories</span>
            </h2>
            <div className="bridge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
              {moreStories.map((s) => (
                <div key={s.title} style={{ backgroundColor: "#fff", boxShadow: "0px 4px 12px rgba(161,161,161,0.25)", borderRadius: "24px", overflow: "hidden" }}>
                  <div style={{ position: "relative", width: "100%", height: "190px" }}>
                    <Image src={s.img} alt={s.title} fill sizes="(max-width: 1200px) 33vw, 380px" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "20px 22px 24px" }}>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "20px", color: "#000", marginBottom: "8px", lineHeight: "1.3" }}>{s.title}</h3>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "12px", color: "#333", marginBottom: "10px" }}>🕐 {s.date}</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "14px", color: "#000", lineHeight: "1.5", marginBottom: "16px" }}>{s.desc}</p>
                    <Link href="/blogs-stories" className="more-stories-btn" style={{ display: "block", textAlign: "center", width: "100%", backgroundColor: "#E5EEFF", color: "#1E1E1E", fontSize: "15px", padding: "12px", borderRadius: "12px", border: "none", cursor: "pointer", textDecoration: "none", transition: "background-color 0.2s, color 0.2s" }}>
                      See More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUPPORT YOUNG DREAMERS LIKE MOHIB ── */}
        <section style={{ position: "relative", background: "linear-gradient(180deg, #0243BD 0%, #072A6C 100%)", padding: "40px 24px 0", overflow: "hidden" }}>
          <div className="hero-circle" style={{ position: "absolute", width: "48px", height: "48px", left: "24px", top: "20px", border: "3px solid #FFB600", borderRadius: "50%" }} />
          <div className="hero-circle" style={{ position: "absolute", width: "16px", height: "16px", left: "30px", top: "150px", backgroundColor: "#E05163", borderRadius: "50%" }} />
          <div className="hero-circle" style={{ position: "absolute", width: "14px", height: "14px", left: "180px", top: "165px", backgroundColor: "#E05163", borderRadius: "50%" }} />
          <div className="hero-circle" style={{ position: "absolute", width: "34px", height: "34px", right: "40px", top: "80px", backgroundColor: "#E05163", borderRadius: "50%" }} />
          <div className="hero-circle" style={{ position: "absolute", width: "16px", height: "16px", right: "190px", top: "150px", backgroundColor: "#E05163", borderRadius: "50%" }} />
          <div className="hero-circle" style={{ position: "absolute", width: "14px", height: "14px", right: "160px", top: "60px", backgroundColor: "#FFB600", borderRadius: "50%" }} />
          <div className="hero-circle" style={{ position: "absolute", width: "220px", height: "220px", right: "-90px", top: "20px", backgroundColor: "#2AA76F", borderRadius: "50%" }} />
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4.5vw, 56px)", color: "#fff", lineHeight: "1.2", marginBottom: "20px" }}>
              Support young<br /><span style={{ fontWeight: 400 }}>dreamers</span> like Mohib
            </h2>
            <Link href="/donate" className="dreamers-btn" style={{ display: "inline-block", backgroundColor: "#FFEDBA", color: "#1E1E1E", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "16px", padding: "14px 32px", borderRadius: "24px", textDecoration: "none", marginBottom: "20px", transition: "background-color 0.2s" }}>
              See More
            </Link>
          </div>
          <div className="dreamers-row" style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "0px", flexWrap: "wrap" }}>
            {[`${IMG}/support-girl1.png`, `${IMG}/support-boy2.png`, `${IMG}/support-girl3.png`, `${IMG}/support-boy4.png`].map((src, i) => (
              <div key={i} style={{ position: "relative", width: "clamp(160px, 26vw, 320px)", height: "clamp(200px, 34vw, 380px)", marginLeft: i === 0 ? 0 : "-100px" }}>
                <Image src={src} alt="Baithak student" fill sizes="320px" quality={95} style={{ objectFit: "cover", objectPosition: "bottom" }} />
              </div>
            ))}
          </div>
        </section>

        {/* ── YOUR SUPPORT DRIVES REAL CHANGE (exactly reused from landing page, same image) ── */}
        <section style={{ backgroundColor: "#fff", padding: "80px 64px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "60px", flexWrap: "wrap" }}>
            <div className="impact-img-wrap" style={{ position: "relative", width: "400px", height: "430px", flexShrink: 0 }}>
              <div className="impact-circle-bg" style={{ position: "absolute", bottom: 0, left: "15px", width: "370px", height: "370px", backgroundColor: "#FFB600", borderRadius: "50%" }} />
              <div className="impact-photo-mask" style={{ position: "absolute", bottom: 0, left: "15px", width: "370px", height: "430px", overflow: "hidden", borderBottomLeftRadius: "185px", borderBottomRightRadius: "185px", zIndex: 1 }}>
                <Image src={`${LANDING_IMG}/impact-girl.png`} alt="Impact" fill sizes="370px" style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 300px", minWidth: "260px" }}>
              <h2 style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 3.5vw, 55px)", color: "#082E76", lineHeight: "1.2", marginBottom: "20px" }}>
                Your support <br />drives <span style={{ fontWeight: 400 }}>real change</span>
              </h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "clamp(16px, 1.6vw, 26px)", color: "#282727", lineHeight: "40px", marginBottom: "40px" }}>
                Baithak School brings quality education to Pakistan's most underserved communities — one neighbourhood at a time.
              </p>
              <Link href="/your-support" className="impact-btn" style={{ display: "inline-block", backgroundColor: "#FFEDBA", color: "#000", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "clamp(16px, 1.6vw, 27px)", padding: "16px 32px", borderRadius: "15px", textDecoration: "none", transition: "background-color 0.2s" }}>
                See your Impact Now
              </Link>
            </div>
          </div>
        </section>

        {/* ── YOUR DONATION IN ACTION (exactly reused from landing page) ── */}
        <section style={{ backgroundColor: "#fff", padding: "0 64px 80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", borderTop: "4px solid #DFDEE2", paddingTop: "64px" }}>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(36px, 4vw, 60px)", color: "#164397", textAlign: "center", marginBottom: "8px" }}>Your Donation In Action</h2>
            <p style={{ fontWeight: 500, fontSize: "clamp(18px, 2vw, 32px)", textAlign: "center", color: "#000", marginBottom: "48px" }}>How your donation transforms lives</p>
            <div className="donation-action-card" style={{ background: "linear-gradient(180deg, #17469E 0%, #081938 100%)", borderRadius: "41px", padding: "48px 48px 0 48px", position: "relative", overflow: "hidden", maxWidth: "1042px", margin: "0 auto 32px", minHeight: "450px", display: "flex", alignItems: "center", justifyContent: "flex-end", flexDirection: "column" }}>
              <div style={{ position: "absolute", top: "44px", right: "80px", width: "173px", height: "173px", backgroundColor: "#2AA76F", borderRadius: "50%" }} />
              <div style={{ position: "absolute", left: "-45px", top: "300px", width: "96px", height: "96px", backgroundColor: "#FDBA21", borderRadius: "50%" }} />
              <div style={{ position: "absolute", left: "-51px", top: "290px", width: "96px", height: "96px", border: "3px solid #2AA76F", borderRadius: "50%" }} />
              <div style={{ position: "absolute", left: "83px", top: "56px", width: "64px", height: "64px", border: "3px solid #FFB600", borderRadius: "50%" }} />
              <div style={{ position: "absolute", right: "60px", top: "250px", width: "44px", height: "44px", backgroundColor: "#E05163", borderRadius: "50%" }} />
              <div style={{ position: "absolute", left: "200px", top: "245px", width: "25px", height: "25px", backgroundColor: "#E05163", borderRadius: "50%" }} />
              <Image src={`${LANDING_IMG}/donation-illustration.png`} alt="Donation illustration" width={1200} height={1200} style={{ position: "relative", zIndex: 1, maxWidth: "100%", width: "auto", height: "auto", borderRadius: "37px" }} />
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: "clamp(16px, 1.8vw, 27px)", textAlign: "center", color: "#000", maxWidth: "830px", margin: "0 auto 40px", lineHeight: "38px" }}>
              Poverty, child labor, and lack of nearby schools<br /> keep <strong>millions of children</strong> away from classrooms
            </p>
            <div style={{ textAlign: "center" }}>
              <Link href="/blogs-stories" className="read-more-btn" style={{ display: "inline-block", backgroundColor: "#E5EEFF", color: "#1E1E1E", fontSize: "clamp(16px, 1.8vw, 27px)", padding: "16px 40px", borderRadius: "23px", textDecoration: "none", transition: "background-color 0.2s, color 0.2s" }}>
                Read More Stories
              </Link>
            </div>
          </div>
        </section>

        <style>{`
          .read-more-btn:hover { background-color: #17469E !important; color: #fff !important; }
          .more-stories-btn:hover { background-color: #17469E !important; color: #fff !important; }
          .dreamers-btn:hover { background-color: #E8A400 !important; }
          .impact-btn:hover { background-color: #E8A400 !important; }
          @media (max-width: 900px) {
            .smk-grid { grid-template-columns: 1fr !important; gap: 40px !important; justify-items: center; }
            .bridge-grid { grid-template-columns: 1fr !important; }
            .story-banner-wrap { height: clamp(160px, 55vw, 220px) !important; margin-top: 60px !important; }
            .story-content-row { flex-direction: column !important; align-items: center !important; text-align: center; }
            .story-left-col { display: flex !important; flex-direction: column !important; align-items: center !important; width: 100% !important; max-width: 380px !important; }
            .story-photo-box { max-width: 100% !important; width: 100% !important; height: 190px !important; }
            .story-wrap { width: 200px !important; height: 270px !important; }
            .story-circle { width: 200px !important; height: 200px !important; }
            .story-photo { width: 200px !important; height: 340px !important; border-bottom-left-radius: 100px !important; border-bottom-right-radius: 100px !important; }
            .impact-img-wrap { width: 220px !important; height: 235px !important; }
            .impact-circle-bg { width: 200px !important; height: 200px !important; left: 8px !important; }
            .impact-photo-mask { width: 200px !important; height: 235px !important; left: 8px !important; border-bottom-left-radius: 100px !important; border-bottom-right-radius: 100px !important; }
            .donation-action-card { padding: 20px 16px 0 16px !important; min-height: 320px !important; }
            .dreamers-row { flex-wrap: nowrap !important; }
            .dreamers-row > div { width: clamp(85px, 24vw, 150px) !important; height: clamp(120px, 32vw, 200px) !important; margin-left: -18px !important; }
            .dreamers-row > div:first-child { margin-left: 0 !important; }
            #story-detail { padding: 40px 20px !important; }
          }
          @media (max-width: 480px) {
            .hero-kid-photo { width: clamp(130px, 45vw, 210px) !important; height: clamp(170px, 55vw, 260px) !important; }
            .hero-title-wrap { padding-top: 230px !important; }
            .hero-title-wrap .smk-word { height: clamp(45px, 13vw, 110px) !important; }
          }
        `}</style>


      </main>
      <Footer />
    </>
  );
}