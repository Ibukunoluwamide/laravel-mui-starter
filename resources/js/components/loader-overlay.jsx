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
    <>
      <BrandLoader />
    </>
  );
}


function BrandLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/60 backdrop-blur-md">
      <div className="relative flex flex-col items-center gap-4">

        {/* Outer glowing ring */}
        <div className="absolute w-28 h-28 rounded-full animate-pulse" />

        {/* Spinning gradient ring */}
        <div className="relative w-24 h-24 rounded-full animate-spin
                        bg-gradient-to-r from-primary via-blue-500 to-primary
                        p-[3px]">
          <div className="w-full h-full rounded-full bg-white " />
        </div>

        {/* Brand text */}
        <div className="absolute text-center">

        </div>
        <span className="text-xs text-gray-500  tracking-widest">
          Zekode
        </span>

      </div>
    </div>
  );
}
