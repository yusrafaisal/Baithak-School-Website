// // DonationSupportCards.jsx

// "use client";

// const CARDS = [
//   {
//     label: "Support a Child",
//     bg: "#E05163",
//     img: "/images/support-child.png",
//   },
//   {
//     label: "Support a Classroom",
//     bg: "#FFB600",
//     img: "/images/support-classroom.png",
//   },
//   {
//     label: "Support a School",
//     bg: "#2AA76F",
//     img: "/images/support-school.png",
//   },
// ];

// export default function DonationSupportCards() {
//   return (
//     <section
//       style={{
//         background: "#F6F6F6",
//         padding: "60px 20px",
//       }}
//     >
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", // Auto layout alignment for 1, 2, or 3 cards in row based on device size
//           gap: "40px",
//           maxWidth: "1087px",
//           margin: "0 auto",
//           width: "100%"
//         }}
//       >
//         {CARDS.map(({ label, bg, img }) => (
//           <div
//             key={label}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: "16px",
//             }}
//           >
//             {/* Aspect ratio circle containers */}
//             <div
//               style={{
//                 width: "100%",
//                 maxWidth: "260px",
//                 aspectRatio: "1/1",
//                 borderRadius: "50%",
//                 background: bg,
//                 overflow: "hidden",
//                 position: "relative",
//               }}
//             >
//               <img
//                 src={img}
//                 alt={label}
//                 style={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   width: "90%",
//                   height: "auto",
//                   objectFit: "cover",
//                   display: "block",
//                 }}
//                 onError={(e) => { e.currentTarget.style.display = "none"; }}
//               />
//             </div>

//             {/* Label */}
//             <span
//               style={{
//                 fontFamily: "Inter, sans-serif",
//                 fontWeight: 600,
//                 fontSize: "20px",
//                 lineHeight: "1.4",
//                 color: "#282727",
//                 textAlign: "center",
//               }}
//             >
//               {label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// DonationSupportCards.jsx

"use client";

const CARDS = [
  {
    label: "Support a Child",
    bg: "#E05163",
    img: "/images/support-child.png",
    position: "center",
  },
  {
    label: "Support a Classroom",
    bg: "#FFB600",
    img: "/images/support-classroom.png",
    position: "65% center", // move image left
  },
  {
    label: "Support a School",
    bg: "#2AA76F",
    img: "/images/support-school.png",
    position: "center",
  },
];

export default function DonationSupportCards() {
  return (
    <section
      style={{
        background: "#F6F6F6",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", // Auto layout alignment for 1, 2, or 3 cards in row based on device size
          gap: "40px",
          maxWidth: "1087px",
          margin: "0 auto",
          width: "100%"
        }}
      >
        {CARDS.map(({ label, bg, img, position }) => (
          <div
            key={label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* Aspect ratio circle containers */}
            <div
              style={{
                width: "100%",
                maxWidth: "260px",
                aspectRatio: "1/1",
                borderRadius: "50%",
                background: bg,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={img}
                alt={label}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: position,
                  display: "block",
                }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>

            {/* Label */}
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "1.4",
                color: "#282727",
                textAlign: "center",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}