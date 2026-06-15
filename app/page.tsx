import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>

        {/* ── HERO SECTION ── */}
        <section style={{ position: "relative", width: "100%", minHeight: "calc(100vh - 72px)", overflow: "hidden" }}>
          <Image src="/images/landing_page_imgs/hero-bg.jpg" alt="Hero background" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} priority />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.35)" }} />

          {/* Decorative circles */}
          <div style={{ position: "absolute", width: "449px", height: "449px", bottom: "0", left: "42%", backgroundColor: "#FFB600", borderRadius: "50%", zIndex: 1 }} />
          <div style={{ position: "absolute", width: "164px", height: "164px", bottom: "0", left: "37%", backgroundColor: "#2AA76F", borderRadius: "50%", zIndex: 2 }} />
          <div style={{ position: "absolute", width: "242px", height: "242px", bottom: "0", right: "5%", backgroundColor: "#E05163", borderRadius: "50%", zIndex: 1 }} />

          {/* Hero girl */}
          <div style={{
            position: "absolute", right: 130, bottom: 0,
            width: "250%", height: "130%",
            zIndex: 3,
          }}>
            <Image src="/images/landing_page_imgs/hero-girl.png" alt="Student" fill sizes="62vw" style={{ objectFit: "contain", objectPosition: "right bottom" }} priority />
          </div>

          {/* Hero text */}
          <div style={{ position: "relative", zIndex: 4, padding: "clamp(60px, 10vw, 120px) 0 60px 73px", maxWidth: "600px" }}>
            <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(64px, 8.5vw, 128px)", lineHeight: "1.0", color: "#fff", textShadow: "0px 10px 4px rgba(0,0,0,0.25)", margin: 0 }}>
              Fulfilling<br /><span style={{ color: "#FFB600" }}>dreams</span>
            </h1>
            <p style={{ fontWeight: 500, fontSize: "clamp(20px, 2.5vw, 36px)", color: "#fff", margin: "24px 0 40px" }}>one child at a time.....</p>
            <Link href="/donate" style={{ display: "inline-block", backgroundColor: "#FFBC25", color: "#000", fontWeight: 800, fontSize: "clamp(18px, 2vw, 32px)", padding: "18px 40px", borderRadius: "20px", textDecoration: "none" }}>
              Donate Now
            </Link>
          </div>

          {/* SVG upward curve */}
          <div style={{ position: "absolute", bottom: "-50px", left: 0, right: 0, zIndex: 5, lineHeight: 0 }}>
            <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "90px" }}>
              <path d="M0,90 L0,90 Q720,90 1440,90 L1440,0 Q720,80 0,0 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* ── ABOUT BAITHAK ── */}
        <section style={{ backgroundColor: "#fff", padding: "80px 64px 60px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap" }}>
            <div style={{ position: "relative", width: "420px", height: "460px", flexShrink: 0 }}>
              <div style={{ position: "absolute", bottom: 40, right: 0, width: "350px", height: "350px", backgroundColor: "#FFB600", borderRadius: "50%" }} />
              <div style={{ position: "absolute", bottom: 40, right: 0, width: "350px", height: "450px", overflow: "hidden", borderBottomLeftRadius: "175px", borderBottomRightRadius: "175px", zIndex: 1 }}>
                <Image src="/images/landing_page_imgs/about1-boy.png" alt="About Baithak" fill sizes="350px" style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
            </div>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <h2 style={{ fontWeight: 700, fontSize: "48px", color: "#000", marginBottom: "24px" }}>About Baithak</h2>
              <p style={{ fontWeight: 500, fontSize: "24px", lineHeight: "34px", color: "#000", maxWidth: "550px" }}>
                Rendering their dream of a literate Pakistan into reality, a group of passionate women, took their first step back in 1996. From a single room, and "Baithak", progressing towards 150+ primary schools all over Pakistan. Their hard work and commitment led them toward success while many new hands joined them over the years to strengthen their cause.
              </p>
            </div>
          </div>
        </section>

        {/* ── OUR CREDIBILITY ── */}
        <section style={{ backgroundColor: "#fff", padding: "0 64px 60px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <h3 style={{ fontWeight: 500, fontSize: "32px", color: "#000", marginBottom: "32px" }}>Our Credibility</h3>
            <Image src="/images/landing_page_imgs/partnerr-logos.png" alt="Partner logos" width={1050} height={178} style={{ maxWidth: "70%", width: "auto", height: "auto", marginLeft: "200px" }} />
          </div>
        </section>

        {/* ── SUNO MERI KAHANI BLUE BAND ── */}
        <section style={{ position: "relative", backgroundColor: "#19499C", padding: "90px 0", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "30px", backgroundColor: "#fff", clipPath: "ellipse(55% 100% at 50% 0%)" }} />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "20px", padding: "30px 0" }}>
            <Image src="/images/landing_page_imgs/kahani.png" alt="کہانی" width={220} height={140} style={{ width: "auto", height: "120px" }} />
            <Image src="/images/landing_page_imgs/meri5.png" alt="میری" width={180} height={120} style={{ width: "auto", height: "120px" }} />
            <Image src="/images/landing_page_imgs/suno.png" alt="سنو" width={180} height={120} style={{ width: "auto", height: "120px" }} />
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40px", backgroundColor: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)" }} />
        </section>

        {/* ── WHAT IS SUNO MERI KAHANI ── */}
        <section style={{ backgroundColor: "#fff", padding: "40px 44px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(36px, 4vw, 60px)", color: "#164397", textAlign: "center", marginBottom: "0px" }}>
              What is Suno Meri Kahani?
            </h2>
            <p style={{ fontWeight: 500, fontSize: "clamp(18px, 2vw, 32px)", textAlign: "center", color: "#1E1E1E", maxWidth: "700px", margin: "0 auto 0px", lineHeight: "43px" }}>
              A campaign by Baithak, born from the belief that every child deserves to be heard.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0px", justifyContent: "center" }}>
              {[
                { img: "story-shohaib.png", name: "Shohaib's Story", color: "#E05163", pos: "center 70px" },
                { img: "story-laibaa.png", name: "Laiba's Story", color: "#FFB600", pos: "center 40px" },
                { img: "story-mohib.png", name: "Mohib's Story", color: "#2AA76F", pos: "center 90px" },
              ].map((s) => (
                <div key={s.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0px" }}>
                  <div style={{ position: "relative", width: "260px", height: "350px" }}>
                    <div style={{ position: "absolute", bottom: 0, left: 0, width: "260px", height: "260px", borderRadius: "50%", backgroundColor: s.color }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, width: "260px", height: "440px", overflow: "hidden", borderBottomLeftRadius: "130px", borderBottomRightRadius: "130px", zIndex: 1 }}>
                      <Image src={`/images/landing_page_imgs/${s.img}`} alt={s.name} fill sizes="260px" style={{ objectFit: "cover", objectPosition: s.pos }} />
                    </div>
                  </div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "clamp(18px, 1.5vw, 26px)", color: "#282727", textAlign: "center" }}>{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── YOUR DONATION IN ACTION ── */}
        <section style={{ backgroundColor: "#fff", padding: "0 64px 80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", borderTop: "4px solid #DFDEE2", paddingTop: "64px" }}>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(36px, 4vw, 60px)", color: "#164397", textAlign: "center", marginBottom: "8px" }}>Your Donation In Action</h2>
            <p style={{ fontWeight: 500, fontSize: "clamp(18px, 2vw, 32px)", textAlign: "center", color: "#000", marginBottom: "48px" }}>How your donation transforms lives</p>
            <div style={{ background: "linear-gradient(180deg, #17469E 0%, #081938 100%)", borderRadius: "41px", padding: "48px 48px 0 48px", position: "relative", overflow: "hidden", maxWidth: "1042px", margin: "0 auto 32px", minHeight: "450px", display: "flex", alignItems: "center", justifyContent: "flex-end", flexDirection: "column" }}>
              {/* Green filled circle - top right */}
              <div style={{ position: "absolute", top: "44px", right: "80px", width: "173px", height: "173px", backgroundColor: "#2AA76F", borderRadius: "50%" }} />
              {/* Yellow filled circle - left edge */}
              <div style={{ position: "absolute", left: "-45px", top: "300px", width: "96px", height: "96px", backgroundColor: "#FDBA21", borderRadius: "50%" }} />
              {/* Green outline circle - overlapping yellow */}
              <div style={{ position: "absolute", left: "-51px", top: "290px", width: "96px", height: "96px", border: "3px solid #2AA76F", borderRadius: "50%" }} />
              {/* Yellow outline ring - top left */}
              <div style={{ position: "absolute", left: "83px", top: "56px", width: "64px", height: "64px", border: "3px solid #FFB600", borderRadius: "50%" }} />
              {/* Red filled circle - right side */}
              <div style={{ position: "absolute", right: "60px", top: "250px", width: "44px", height: "44px", backgroundColor: "#E05163", borderRadius: "50%" }} />
              {/* Small red dot - center left */}
              <div style={{ position: "absolute", left: "200px", top: "245px", width: "25px", height: "25px", backgroundColor: "#E05163", borderRadius: "50%" }} />
              <Image src="/images/landing_page_imgs/donation-illustration.png" alt="Donation illustration" width={1200} height={1200} style={{ position: "relative", zIndex: 1, maxWidth: "100%", width: "auto", height: "auto", borderRadius: "37px" }} />
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: "clamp(16px, 1.8vw, 27px)", textAlign: "center", color: "#000", maxWidth: "830px", margin: "0 auto 40px", lineHeight: "38px" }}>
              Poverty, child labor, and lack of nearby schools<br /> keep <strong>millions of children</strong> away from classrooms
            </p>
            <div style={{ textAlign: "center" }}>
              <Link href="/stories-and-voices" className="read-more-btn" style={{ display: "inline-block", backgroundColor: "#E5EEFF", color: "#1E1E1E", fontSize: "clamp(16px, 1.8vw, 27px)", padding: "16px 40px", borderRadius: "23px", textDecoration: "none", transition: "background-color 0.2s, color 0.2s" }}>
                Read More Stories
              </Link>
              <style>{`
                .read-more-btn:hover {
                  background-color: #17469E !important;
                  color: #fff !important;
                }
              `}</style>
            </div>
          </div>
        </section>

        {/* ── HOW BAITHAK IS BRIDGING THE GAP ── */}
        <section style={{ backgroundColor: "#fff", padding: "0 64px 80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", borderTop: "4px solid #D5DEDA", paddingTop: "64px" }}>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(28px, 3vw, 48px)", color: "#11171A", marginBottom: "48px", textAlign: "center" }}>
              How Baithak is Bridging the <span style={{ fontWeight: 400 }}>Gap</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
              {[
                { img: "program-schools.jpg", title: "Formal & Non-Formal Schools", desc: "Establishing formal schools and non-formal schools in slums and low-income areas to reduce access barriers." },
                { img: "program-teachers.jpg", title: "Teacher Training & Development", desc: "Local teachers, empowered through structured training to deliver quality learning in every classroom." },
                { img: "program-community.jpg", title: "Community Engagement", desc: "Working closely with families and communities to ensure children attend school consistently." },
              ].map((card) => (
                <div key={card.title} style={{ backgroundColor: "#fff", boxShadow: "0px 4px 4px rgba(0,0,0,0.25)", borderRadius: "36px", overflow: "hidden" }}>
                  <div style={{ position: "relative", width: "100%", height: "189px" }}>
                    <Image src={`/images/landing_page_imgs/${card.img}`} alt={card.title} fill sizes="(max-width: 1200px) 33vw, 390px" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "20px 24px 28px" }}>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "24px", color: "#000", marginBottom: "12px", lineHeight: "1.3" }}>{card.title}</h3>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "16px", color: "#333", lineHeight: "1.6" }}>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── YOUR SUPPORT DRIVES REAL CHANGE (Blue) ── */}
        <section style={{ backgroundColor: "#17469E", padding: "80px 64px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", flexWrap: "wrap" }}>
            <div style={{ flexShrink: 0 }}>
              <Image src="/images/landing_page_imgs/donate_ss.png" alt="Donation form" width={408} height={672} style={{ borderRadius: "45px", boxShadow: "0px 4px 61.5px 3px rgba(0,0,0,0.25)", maxWidth: "100%", width: "auto", height: "auto" }} />
            </div>
            <div style={{ flex: "0 1 500px", minWidth: "280px" }}>
              <h2 style={{ fontWeight: 700, fontSize: "clamp(36px, 4vw, 64px)", color: "#E5EEFF", lineHeight: "1.2", marginBottom: "24px" }}>Your support <br /> drives real change</h2>
              <p style={{ fontWeight: 500, fontSize: "clamp(18px, 2vw, 32px)", color: "#E5EEFF", lineHeight: "46px", marginBottom: "40px" }}>
                Baithak School brings quality<br /> education to Pakistan's most<br /> underserved communities, one<br /> neighbourhood at a time.
              </p>
              <Link href="/donate" style={{ display: "inline-block", backgroundColor: "#FFB600", color: "#000", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "24px", padding: "15px 28px", borderRadius: "15px", textDecoration: "none" }}>
                Donate Now
              </Link>
            </div>
          </div>
        </section>

        {/* ── YOUR SUPPORT DRIVES REAL CHANGE (White) ── */}
        <section style={{ backgroundColor: "#fff", padding: "80px 64px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "60px", flexWrap: "wrap" }}>
            <div style={{ position: "relative", width: "400px", height: "430px", flexShrink: 0 }}>
              <div style={{ position: "absolute", bottom: 0, left: "15px", width: "370px", height: "370px", backgroundColor: "#FFB600", borderRadius: "50%" }} />
              <div style={{ position: "absolute", bottom: 0, left: "15px", width: "370px", height: "430px", overflow: "hidden", borderBottomLeftRadius: "185px", borderBottomRightRadius: "185px", zIndex: 1 }}>
                <Image src="/images/landing_page_imgs/impact-girl.png" alt="Impact" fill sizes="370px" style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
            </div>
            <div style={{ width: "460px", flexShrink: 0 }}>
              <h2 style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 3.5vw, 55px)", color: "#082E76", lineHeight: "1.2", marginBottom: "20px" }}>
                Your support <br />drives <span style={{ fontWeight: 400 }}>real change</span>
              </h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "clamp(16px, 1.6vw, 26px)", color: "#282727", lineHeight: "40px", marginBottom: "40px" }}>
                Baithak School brings quality education to Pakistan's most underserved communities — one neighbourhood at a time.
              </p>
              <Link href="/your-support" style={{ display: "inline-block", backgroundColor: "#FFB600", color: "#000", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "clamp(16px, 1.6vw, 27px)", padding: "16px 32px", borderRadius: "15px", textDecoration: "none" }}>
                See your Impact Now
              </Link>
            </div>
          </div>

        </section>
        {/* ── TRANSFORM LIVES BANNER ── */}
        <section style={{ position: "relative", width: "100%", minHeight: "700px", overflow: "hidden" }}>

          {/* Background image */}
          <Image src="/images/landing_page_imgs/transform1-bg.png" alt="Transform background" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center top" }} priority />

          {/* Dark overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.35)" }} />

          {/* Text - pushed toward top */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: "80px", zIndex: 1 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(20px, 3vw, 42px)", color: "#fff", textAlign: "center", margin: "0 0 8px", letterSpacing: "2px" }}>
              YOUR SPONSORSHIP'S WILL
            </p>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(52px, 9vw, 130px)", color: "#fff", textAlign: "center", margin: 0, lineHeight: "1", letterSpacing: "2px" }}>
              TRANSFORM LIVES
            </h2>
          </div>

          {/* Kids PNG - bottom aligned, covers lower half */}
          <img
            src="/images/landing_page_imgs/transform_kids.png"
            alt="Kids walking"
            style={{ position: "absolute", bottom: 235, left: 19, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", zIndex: 2 }}
          />

        </section>
      </main>
      <Footer />
    </>
  );
} 