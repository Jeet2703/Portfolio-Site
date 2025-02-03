import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-950 dark:text-white/80">
      <small className="mb-2 block text-xs">
        &copy; 2025 Jeet Shah. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React and Next.js (App Router & Server Actions), TypeScript, Tailwind
        CSS, Framer motion, React Email & Resend, Vercel hosting.{" "}
      </p>
    </footer>
  );
}
