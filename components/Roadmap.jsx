const milestones = [
  { year:"1996", side:"right", dotColor:"#E05163",
    title:"YEAR OF ESTABLISHMENT",
    desc:"Established in 1996, Society for Educational Welfare (SEW) started providing educational opportunities to the under-privileged through formal and informal setups." },
  { year:"2000", side:"left",  dotColor:"#FFC533",
    title:"REGISTERED AS A WELFARE",
    desc:'Registered in 2000 under "The Societies Act of 1860".' },
  { year:"2001", side:"right", dotColor:"#FFC533",
    title:"STARTED FROM 6 BAITHAK SCHOOLS",
    desc:"From humble beginnings of one room one teacher to 6 functioning schools." },
  { year:"2005", side:"left",  dotColor:"#FFC533",
    title:"STARTED FROM 6 BAITHAK SCHOOLS",
    desc:"From humble beginnings of one room one teacher to 6 functioning schools." },
  { year:"2006", side:"right", dotColor:"#FFC533",
    title:"HEAD OFFICE ESTABLISHED IN 2005",
    desc:"A central head office formed as school operations across Pakistan take full swing." },
  { year:"2012", side:"left",  dotColor:"#FFC533",
    title:"ESTABLISHED 100 SCHOOLS",
    desc:"Managing and running 100 schools from head office on centralized curriculum." },
  { year:"2014", side:"right", dotColor:"#FFC533",
    title:"SOFTWARE SYSTEM DEVELOPED",
    desc:"To cater to schools reporting digitally." },
  { year:"2016", side:"left",  dotColor:"#FFC533",
    title:"QUALITY IMPROVEMENT PROGRAMS",
    desc:"For schools and all Pakistan teacher training." },
  { year:"2018", side:"right", dotColor:"#FFC533",
    title:"ENLIGHTENING GWADAR",
    desc:"Target of opening 10 schools in form of strong cluster to combat illiteracy." },
  { year:"2019", side:"left",  dotColor:"#FFC533",
    title:"CEMENTED ACKNOWLEDGMENT",
    desc:"Shariah certified and Electronic Affairs Division certified." },
  { year:"2020", side:"right", dotColor:"#FFC533",
    title:"TRANSPARENCY OF FUNDS",
    desc:"Annual Audit by Grant Thornton." },
  { year:"2021", side:"left",  dotColor:"#FFC533",
    title:"AIMING FOR SECONDARY EDUCATION",
    desc:"Secondary School Pilot Project." },
  { year:"2022", side:"right", dotColor:"#FFC533",
    title:"EQUIPPING STUDENTS WITH IT SKILLS",
    desc:"Computer Labs established in Schools." },
  { year:"2023", side:"left",  dotColor:"#FFC533",
    title:"SOFTWARE",
    desc:"Taken to grassroot level for data entry directly from schools to cloud based software." },
];

function Card({ title, desc }) {
  return (
    <div className="rm__card">
      <p className="rm__card-title">{title}</p>
      <p className="rm__card-desc">{desc}</p>
    </div>
  );
}

export default function Roadmap() {
  return (
    <section className="rm">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <h2 className="rm__heading">Roadmap to Success</h2>

      <div className="rm__canvas">
        {/* Vertical line pinned exactly to 50% */}
        <div className="rm__vline">
          <div className="rm__vline-red" />
        </div>

        {milestones.map((m, i) => (
          <div key={i} className="rm__row">

            {/* ── LEFT HALF ── */}
            <div className="rm__half rm__half--left">
              {m.side === "left" ? (
                <div className="rm__card-side rm__card-side--left rm__desktop-only">
                  <Card title={m.title} desc={m.desc} />
                  <div className="rm__connector" />
                </div>
              ) : (
                /* Year label on left for right-side cards */
                <div className="rm__year-side rm__year-side--left">
                  <span className="rm__year">{m.year}</span>
                </div>
              )}
            </div>

            {/* ── CENTRE DOT ── */}
            <div className="rm__dot-wrap">
              <div className="rm__dot" style={{ background: m.dotColor }} />
            </div>

            {/* ── RIGHT HALF ── */}
            <div className="rm__half rm__half--right">
              {m.side === "right" ? (
                <div className="rm__card-side rm__card-side--right">
                  <div className="rm__connector" />
                  <Card title={m.title} desc={m.desc} />
                </div>
              ) : (
                <>
                  <div className="rm__year-side rm__year-side--right rm__desktop-only">
                    <span className="rm__year">{m.year}</span>
                  </div>
                  <div className="rm__card-side rm__card-side--right rm__mobile-only">
                    <div className="rm__connector" />
                    <Card title={m.title} desc={m.desc} />
                  </div>
                </>
              )}
            </div>

          </div>
        ))}
      </div>

      <style>{`
        .rm {
          background: #17469E;
          padding: 80px 0 120px;
        }

        .rm__heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 48px;
          line-height: 77px;
          text-align: center;
          color: #FFFFFF;
          margin: 0 0 60px;
        }

        .rm__canvas {
          position: relative;
          width: 1100px;
          margin: 0 auto;
        }

        /* Vertical line */
        .rm__vline {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 22px;
          transform: translateX(-50%);
          background: #FFFFFF;
          border-radius: 45px;
          z-index: 1;
          overflow: hidden;
          pointer-events: none;
        }
        .rm__vline-red {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 100px;
          background: #E05163;
          border-radius: 45px 45px 0 0;
        }

        .rm__row {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 201px;
          z-index: 2;
        }

        .rm__half {
          width: 50%;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          position: relative;
        }
        .rm__half--left  { justify-content: flex-end; }
        .rm__half--right { justify-content: flex-start; }

        /* Dot */
        .rm__dot-wrap {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
          width: 31px;
          height: 31px;
        }
        .rm__dot {
          width: 31px;
          height: 31px;
          border-radius: 50%;
          box-shadow: 0 0 0 3px #17469E;
        }

        /* Card sides */
        .rm__card-side {
          display: flex;
          align-items: center;
          width: 100%;
          z-index: 3;
        }
        .rm__card-side--left  { flex-direction: row; justify-content: flex-end; }
        .rm__card-side--right { flex-direction: row; justify-content: flex-start; }

        /* Card — Figma: 493–494px wide, 201–202px tall, border-radius 30px */
        .rm__card {
          background: #FFFFFF;
          border-radius: 30px;
          width: 460px;
          min-height: 180px;
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-shrink: 0;
          box-sizing: border-box;
        }

        /* Figma: Poppins 500 24px lh 24px #000 */
        .rm__card-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 24px;
          color: #000000;
          margin: 0 0 10px;
        }

        /* Figma: Poppins 400 16px lh 20px #333 */
        .rm__card-desc {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #333333;
          margin: 0;
        }

        /* Connector: Figma Rectangles 136–149: 45×35px white */
        .rm__connector {
          width: 45px;
          height: 35px;
          background: #FFFFFF;
          flex-shrink: 0;
          z-index: 3;
          position: relative;
        }

        /* Year labels — Figma: Poppins 600 32px white */
        .rm__year-side {
          display: flex;
          align-items: center;
          width: 100%;
        }
        .rm__year-side--left {
          justify-content: flex-end;
          padding-right: 44px;
        }
        .rm__year-side--right {
          justify-content: flex-start;
          padding-left: 44px;
        }
        .rm__year {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 1;
          color: #FFFFFF;
          white-space: nowrap;
        }

        .rm__mobile-only { display: none; }
        .rm__desktop-only { display: flex; }

        @media (max-width: 1160px) {
          .rm__canvas { width: 96vw; }
          .rm__card { width: 38vw; min-height: unset; padding: 18px 22px; }
          .rm__card-title { font-size: 18px; line-height: 20px; }
          .rm__card-desc  { font-size: 13px; line-height: 18px; }
          .rm__year { font-size: 24px; }
          .rm__year-side--left  { padding-right: 36px; }
          .rm__year-side--right { padding-left: 36px; }
          .rm__heading { font-size: 38px; line-height: 1.3; }
        }

        @media (max-width: 700px) {
          .rm__canvas { width: 100%; padding: 0 12px; box-sizing: border-box; }
          .rm__heading { font-size: 26px; line-height: 1.3; margin-bottom: 30px; }

          .rm__vline { left: 52px; transform: none; }
          .rm__dot-wrap { left: 52px; transform: translate(-50%, -50%); }
          .rm__dot { box-shadow: 0 0 0 2px #17469E; }

          .rm__row { min-height: unset; margin-bottom: 12px; align-items: stretch; }

          .rm__half--left { width: 52px; flex-shrink: 0; justify-content: flex-end; }
          .rm__half--right { width: calc(100% - 52px); flex-shrink: 0; align-items: center; }

          .rm__mobile-only  { display: flex !important; }
          .rm__desktop-only { display: none !important; }

          .rm__year-side--left {
            justify-content: flex-end;
            padding-right: 6px;
            width: 100%;
          }
          .rm__year { font-size: 12px; }

          .rm__card { width: 100%; border-radius: 14px; padding: 10px 12px; min-height: unset; }
          .rm__card-side--right { width: 100%; }
          .rm__card-title { font-size: 11px; line-height: 15px; margin-bottom: 4px; }
          .rm__card-desc  { font-size: 10px; line-height: 14px; }
          .rm__connector  { width: 16px; height: 20px; }
        }
      `}</style>
    </section>
  );
}
