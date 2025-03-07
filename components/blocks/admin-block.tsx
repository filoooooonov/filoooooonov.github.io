"use client";

import { Settings2 } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";

export function AdminPanelBlock() {
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 h-full bento-card">
      <div className="h-full flex flex-col bento-card-content">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">Admin Panel</h3>
          <p className="text-[#a99b8c] text-sm">Easy content management</p>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="relative w-full max-w-[180px] aspect-video bg-[#252019] rounded-lg overflow-hidden border border-[#352f29]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {/* Admin panel mockup */}
            <div className="h-3 w-full bg-[#352f29] flex items-center px-1.5">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7355]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#a99b8c]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#a99b8c]"></div>
              </div>
            </div>
            <div className="p-2 flex flex-col h-[calc(100%-12px)]">
              <div className="flex gap-1 mb-1.5">
                <div className="w-1/3 h-1.5 bg-[#352f29] rounded-sm"></div>
                <div className="w-1/4 h-1.5 bg-[#8B7355] rounded-sm"></div>
              </div>
              <div className="flex gap-1 flex-1">
                <div className="w-1/4 h-full bg-[#352f29] rounded-sm"></div>
                <div className="flex-1 flex flex-col gap-1">
                  <div className="h-1.5 bg-[#352f29] rounded-sm"></div>
                  <div className="h-1.5 w-3/4 bg-[#352f29] rounded-sm"></div>
                  <div className="h-1.5 w-1/2 bg-[#8B7355] rounded-sm"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-[#8B7355] flex items-center justify-center">
              <Settings2 className="w-3 h-3 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </BackgroundGradient>
  );
}
