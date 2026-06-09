"use client";
import { useState } from "react";

const amounts = ["Rs 500", "Rs 1,000", "Rs 5,000"];
const purposes = ["General Education", "Teacher Training", "School Construction", "Community Program"];

export default function YourSupport() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState("Rs 1,000");
  const [custom, setCustom] = useState("");
  const [purpose, setPurpose] = useState("General Education");

  return (
    <section className="support-section">
      <div className="container support-inner">
        {/* Left: Donation Form */}
        <div className="support-form-wrap">
          <div className="support-form">
            <h3 className="support-form-title">Transform a Child's Future<br />with Your Zakat or Donation</h3>
            <p className="support-form-desc">
              Every child deserves a fair chance at education. Your donation helps provide quality
              education and a brighter future for children in underserved communities.
            </p>

            {/* Step indicator */}
            <div className="form-steps">
              {["Amount", "Details", "Payment"].map((label, i) => (
                <div key={label} className={`form-step ${step === i + 1 ? "active" : step > i + 1 ? "done" : ""}`}>
                  <div className="step-circle">{i + 1}</div>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="form-step-content">
                <label>For *</label>
                <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                  {purposes.map((p) => <option key={p}>{p}</option>)}
                </select>

                <label>Choose an amount *</label>
                <div className="amount-grid">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      className={`amount-btn ${selected === a ? "amount-btn--active" : ""}`}
                      onClick={() => { setSelected(a); setCustom(""); }}
                    >{a}</button>
                  ))}
                  <input
                    type="text"
                    placeholder="Other"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setSelected(""); }}
                    className="amount-other"
                  />
                </div>
                <button className="btn-next" onClick={() => setStep(2)}>Next »</button>

                {/* Partner logos */}
                <div className="form-partners">
                  <img src="/images/partner-logos.png" alt="Our credibility partners" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-step-content">
                <label>Full Name *</label>
                <input type="text" placeholder="Your name" className="form-input" />
                <label>Email *</label>
                <input type="email" placeholder="Your email" className="form-input" />
                <label>Phone</label>
                <input type="tel" placeholder="+92..." className="form-input" />
                <div className="form-nav">
                  <button className="btn-back" onClick={() => setStep(1)}>« Back</button>
                  <button className="btn-next" onClick={() => setStep(3)}>Next »</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step-content">
                <p className="payment-info">You will be redirected to our secure payment gateway to complete your donation of <strong>{custom || selected}</strong> for <strong>{purpose}</strong>.</p>
                <div className="form-nav">
                  <button className="btn-back" onClick={() => setStep(2)}>« Back</button>
                  <button className="btn-donate-submit">Donate Now</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Text */}
        <div className="support-text">
          <h2 className="support-heading">
            Your support<br />
            <span className="support-drives">drives</span> real change
          </h2>
          <p className="support-desc">
            Baithak School brings quality education to Pakistan's most underserved communities,
            one neighbourhood at a time.
          </p>
          <a href="/donate" className="btn-donate-yellow">Donate Now</a>
        </div>
      </div>
    </section>
  );
}