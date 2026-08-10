import { useState, useEffect } from "react";
import { ActionLink } from "./ui-kit";

export function ReservationPrompt() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("matiMahalReservationPopupDismissed");
    if (isDismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("matiMahalReservationPopupDismissed", "true");
    }, 400);
  };

  const handleReserveClick = () => {
    sessionStorage.setItem("matiMahalReservationPopupDismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="reservation-prompt-title"
      className={`fixed bottom-3 left-3 right-3 z-[100] rounded-[1.25rem] border bg-[#F8F0E3] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-400 ease-out md:bottom-6 md:left-auto md:right-6 md:w-[380px] ${
        isClosing
          ? "translate-y-4 opacity-0"
          : "fade-up opacity-100"
      }`}
      style={{ borderColor: "#DCC6A5" }}
    >
      <button
        onClick={handleDismiss}
        aria-label="Close"
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-[#5F554F] transition-colors hover:bg-black/5 hover:text-primary"
      >
        <span className="text-2xl leading-none" aria-hidden="true">&times;</span>
      </button>

      <div className="text-center">
        <p className="eyebrow mb-2 text-[#76232E]">PLAN YOUR VISIT</p>
        <div aria-hidden="true" className="mx-auto mb-3 text-[10px] tracking-widest text-[#C79A5B]">
          ──── ◆ ────
        </div>
        <h2 id="reservation-prompt-title" className="font-display text-[1.75rem] font-semibold leading-tight text-[#76232E]">
          Your Table Awaits
        </h2>
        <p className="mx-auto mt-3 max-w-[280px] text-sm leading-relaxed text-[#5F554F]">
          Join us for an authentic dining experience, warm hospitality and the flavours of Rajasthan.
        </p>
        
        <div className="mt-7 flex flex-col items-center gap-2">
          <div onClick={handleReserveClick} className="w-full">
            <ActionLink to="/reservations" className="w-full bg-[#76232E] hover:bg-[#5C1A23] text-[#F8F0E3]">
              Reserve a Table
            </ActionLink>
          </div>
          <button
            onClick={handleDismiss}
            className="px-4 py-2 text-sm font-medium text-[#5F554F] transition-colors hover:text-[#76232E]"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
