"use client";

import { useEffect, useState } from "react";
import { Calendar, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OpeningModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closed = document.cookie
      .split("; ")
      .find((row) => row.startsWith("opening-modal-closed="));
    if (!closed) {
      setOpen(true);
    }
  }, []);

  const setClosedCookie = () => {
    const base = "opening-modal-closed=1; Max-Age=31536000; Path=/; SameSite=Lax";
    const secure =
      typeof window !== "undefined" && location.protocol === "https:" ? "; Secure" : "";
    document.cookie = base + secure;
  };

  const handleClose = () => {
    setOpen(false);
    setClosedCookie();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative bg-accent/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-md w-full text-center">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-accent-foreground hover:text-accent-foreground/70 cursor-pointer"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-accent-foreground mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Торжественное открытие</span>
              </div>
              <div className="text-2xl font-bold text-accent-foreground">
                5 сентября, 12:00
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
