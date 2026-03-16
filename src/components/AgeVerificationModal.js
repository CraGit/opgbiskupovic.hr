"use client";

import { useEffect, useState } from "react";

const AGE_KEY = "opg_age_verified";

export default function AgeVerificationModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem(AGE_KEY);
    if (!verified) {
      setVisible(true);
    }
  }, []);

  function handleConfirm() {
    sessionStorage.setItem(AGE_KEY, "1");
    setVisible(false);
  }

  function handleDeny() {
    window.location.href = "https://www.google.com";
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Provjera dobi"
    >
      <div className="relative bg-white max-w-md w-full mx-auto shadow-2xl overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-[#a87b52]" />

        <div className="px-8 py-10 flex flex-col items-center text-center">
          {/* Wine icon */}
          <div className="mb-6 text-[#a87b52]">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M14 4h12l3 10c0 5.523-4.477 10-9 10S11 19.523 11 14L14 4Z"
                stroke="#a87b52"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M20 24v10M14 36h12"
                stroke="#a87b52"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M11 16h18"
                stroke="#a87b52"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeDasharray="2 2"
              />
            </svg>
          </div>

          <h2 className="font-title text-3xl lg:text-4xl font-normal text-[#7C7669] mb-2 leading-snug">
            Dobrodošli
          </h2>
          <p className="font-title text-lg text-[#a87b52] mb-6 italic">
            OPG Biskupović
          </p>

          <p className="font-text text-sm text-s_pera leading-7 mb-2">
            Ova web stranica posvećena je vinu i alkoholnim pićima.
          </p>
          <p className="font-text text-sm text-s_pera leading-7 mb-8">
            Kako biste nastavili, molimo vas da potvrdite da ste navršili{" "}
            <strong className="text-[#7C7669] font-semibold">18 godina</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              onClick={handleConfirm}
              className="flex-1 relative h-12 px-6 rounded-full overflow-hidden group border border-[#a87b52] bg-[#a87b52] text-white font-text text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-transparent hover:text-[#a87b52]"
            >
              Da, imam 18+
            </button>
            <button
              onClick={handleDeny}
              className="flex-1 h-12 px-6 rounded-full border border-s_abs_line text-s_pera font-text text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:border-[#7C7669] hover:text-[#7C7669]"
            >
              Nemam 18
            </button>
          </div>

          <p className="mt-6 font-text text-xs text-s_pera leading-6">
            Odgovornim uživanjem alkohola čuvamo zdravlje i sigurnost sviju.
          </p>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 w-full bg-[#7C7669]" />
      </div>
    </div>
  );
}
