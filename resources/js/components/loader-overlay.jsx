import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function LoaderOverlay({ autoHideAfter = null }) {
   const [loading, setLoading] = useState(false);

  // Loading indicator for page navigation
  useEffect(() => {
    const removeStartListener = Inertia.on("start", () => setLoading(true));
    const removeFinishListener = Inertia.on("finish", () => setLoading(false));
    return () => {
      removeStartListener();
      removeFinishListener();
    };
  }, []);

  useEffect(() => {
    let timeout;
    if (loading && autoHideAfter) {
      timeout = setTimeout(() => {
        // Auto-hide callback could go here
      }, autoHideAfter);
    }
    return () => clearTimeout(timeout);
  }, [loading, autoHideAfter]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-sm">
      <div className="relative w-20 h-20">
        {/* Glowing ring */}
        <div className="absolute inset-0 rounded-full border-4 border-primary opacity-30 animate-ping" />

        {/* Smooth rotating ring */}
        <div className="absolute inset-0 border-4 border-t-primary border-b-transparent border-l-transparent border-r-primary dark:border-t-primary dark:border-r-blue-500 rounded-full animate-custom-spin" />

        {/* Center Icon/Text */}
        <div className="absolute inset-0 flex items-center justify-center font-extrabold text-primary dark:text-primary text-2xl">
          
        </div>
      </div>

      {/* Custom animation */}
      <style>
        {`
          @keyframes custom-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .animate-custom-spin {
            animation: custom-spin 1.2s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
