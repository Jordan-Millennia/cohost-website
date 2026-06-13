"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ───────────────────────────── Revenue data ───────────────────────────── */
const revenueData: Record<
  number,
  { avgWeekly: number; monthly: number; annual: number }
> = {
  3: { avgWeekly: 700, monthly: 9100, annual: 109200 },
  4: { avgWeekly: 700, monthly: 12133, annual: 145600 },
  5: { avgWeekly: 700, monthly: 15166, annual: 181200 },
  6: { avgWeekly: 700, monthly: 18200, annual: 218400 },
};

const TRADITIONAL_MONTHLY = 1800;
const TRADITIONAL_ANNUAL = 21600;

/* ────────────────────────── Fast count-up hook ────────────────────────── */
function useCountUp(target: number, duration = 300) {
  const [display, setDisplay] = useState(target);
  const prev = useRef(target);

  useEffect(() => {
    const from = prev.current;
    const diff = target - from;
    if (diff === 0) return;

    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + diff * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        prev.current = target;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return display;
}

/* ──────────────────────── Format currency helpers ─────────────────────── */
function fmt(n: number) {
  return n.toLocaleString("en-US");
}

/* ─────────────────────────── Room definitions ─────────────────────────── */
interface RoomDef {
  id: number;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

const allRooms: RoomDef[] = [
  { id: 1, label: "Room 1", x: 20, y: 60, w: 130, h: 100 },
  { id: 2, label: "Room 2", x: 20, y: 180, w: 130, h: 100 },
  { id: 3, label: "Room 3", x: 170, y: 60, w: 130, h: 100 },
  { id: 4, label: "Room 4", x: 170, y: 180, w: 130, h: 100 },
  { id: 5, label: "Room 5", x: 320, y: 60, w: 130, h: 100 },
  { id: 6, label: "Room 6", x: 320, y: 180, w: 130, h: 100 },
];

/* ──────────────────────── SVG Floor Plan Component ───────────────────── */
function FloorPlan({
  mode,
  rooms,
}: {
  mode: "traditional" | "coliving";
  rooms: number;
}) {
  const activeRooms = allRooms.slice(0, rooms);
  const inactiveRooms = allRooms.slice(rooms);

  return (
    <svg
      viewBox="0 0 470 360"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer walls */}
      <rect
        x="10"
        y="10"
        width="450"
        height="340"
        rx="6"
        stroke="rgba(201,168,76,0.25)"
        strokeWidth="2"
        fill="rgba(20,20,19,0.6)"
      />

      {/* Common area */}
      <rect
        x="320"
        y="290"
        width="130"
        height="50"
        rx="4"
        fill="rgba(201,168,76,0.06)"
        stroke="rgba(201,168,76,0.15)"
        strokeWidth="1"
      />
      <text
        x="385"
        y="320"
        textAnchor="middle"
        className="text-[10px]"
        fill="rgba(201,168,76,0.4)"
      >
        Common Area
      </text>

      {/* Kitchen area */}
      <rect
        x="170"
        y="290"
        width="130"
        height="50"
        rx="4"
        fill="rgba(201,168,76,0.06)"
        stroke="rgba(201,168,76,0.15)"
        strokeWidth="1"
      />
      <text
        x="235"
        y="320"
        textAnchor="middle"
        className="text-[10px]"
        fill="rgba(201,168,76,0.4)"
      >
        Kitchen
      </text>

      {/* Bathrooms */}
      <rect
        x="20"
        y="290"
        width="130"
        height="50"
        rx="4"
        fill="rgba(201,168,76,0.04)"
        stroke="rgba(201,168,76,0.12)"
        strokeWidth="1"
        strokeDasharray="4 2"
      />
      <text
        x="85"
        y="320"
        textAnchor="middle"
        className="text-[10px]"
        fill="rgba(201,168,76,0.3)"
      >
        2 BA
      </text>

      {/* Hallway line */}
      <line
        x1="10"
        y1="285"
        x2="460"
        y2="285"
        stroke="rgba(201,168,76,0.12)"
        strokeWidth="1"
        strokeDasharray="6 3"
      />
      <text
        x="235"
        y="280"
        textAnchor="middle"
        className="text-[8px] uppercase tracking-wider"
        fill="rgba(201,168,76,0.2)"
      >
        Hallway
      </text>

      {/* Door indicators on rooms */}
      {activeRooms.map((room) => (
        <line
          key={`door-${room.id}`}
          x1={room.x + room.w / 2 - 10}
          y1={room.y + room.h}
          x2={room.x + room.w / 2 + 10}
          y2={room.y + room.h}
          stroke="rgba(201,168,76,0.35)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}

      {/* Inactive rooms (greyed out) */}
      {inactiveRooms.map((room) => (
        <g key={`inactive-${room.id}`}>
          <rect
            x={room.x}
            y={room.y}
            width={room.w}
            height={room.h}
            rx="4"
            fill="rgba(255,255,255,0.02)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
          <text
            x={room.x + room.w / 2}
            y={room.y + room.h / 2 + 4}
            textAnchor="middle"
            className="text-[11px]"
            fill="rgba(255,255,255,0.12)"
          >
            {room.label}
          </text>
        </g>
      ))}

      {/* Active rooms */}
      {activeRooms.map((room, i) => (
        <g key={`room-${room.id}`}>
          {/* Room rectangle */}
          <motion.rect
            x={room.x}
            y={room.y}
            width={room.w}
            height={room.h}
            rx="4"
            stroke={
              mode === "coliving"
                ? "rgba(201,168,76,0.5)"
                : "rgba(255,255,255,0.12)"
            }
            strokeWidth={mode === "coliving" ? 1.5 : 1}
            initial={false}
            animate={{
              fill:
                mode === "coliving"
                  ? "rgba(201,168,76,0.15)"
                  : "rgba(255,255,255,0.03)",
            }}
            transition={{ duration: 0.4, delay: mode === "coliving" ? i * 0.2 : 0 }}
          />

          {/* Room label */}
          <text
            x={room.x + room.w / 2}
            y={room.y + room.h / 2 - (mode === "coliving" ? 4 : 0)}
            textAnchor="middle"
            className="text-[11px] font-medium"
            fill={
              mode === "coliving"
                ? "rgba(201,168,76,0.9)"
                : "rgba(255,255,255,0.25)"
            }
          >
            {room.label}
          </text>

          {/* Price label — co-living mode only */}
          <AnimatePresence>
            {mode === "coliving" && (
              <motion.text
                x={room.x + room.w / 2}
                y={room.y + room.h / 2 + 16}
                textAnchor="middle"
                className="text-[12px] font-semibold"
                fill="#C9A84C"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.2 + 0.15,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                $750/wk
              </motion.text>
            )}
          </AnimatePresence>
        </g>
      ))}

      {/* Floor plan title */}
      <text
        x="235"
        y="36"
        textAnchor="middle"
        className="text-[10px] uppercase tracking-widest font-medium"
        fill="rgba(201,168,76,0.35)"
      >
        {rooms}BR / 2BA Floor Plan
      </text>
    </svg>
  );
}

/* ───────────────────── Toggle Switch Sub-component ────────────────────── */
function ModeToggle({
  mode,
  onChange,
}: {
  mode: "traditional" | "coliving";
  onChange: (m: "traditional" | "coliving") => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={`text-sm font-medium transition-colors duration-300 ${
          mode === "traditional" ? "text-white" : "text-white/30"
        }`}
      >
        Traditional Rental
      </span>
      <button
        type="button"
        aria-label="Toggle between traditional and co-living mode"
        onClick={() =>
          onChange(mode === "traditional" ? "coliving" : "traditional")
        }
        className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        style={{
          backgroundColor:
            mode === "coliving"
              ? "rgba(201,168,76,0.35)"
              : "rgba(255,255,255,0.12)",
        }}
      >
        <motion.div
          className="absolute top-0.5 w-6 h-6 rounded-full"
          style={{
            backgroundColor:
              mode === "coliving" ? "#C9A84C" : "rgba(255,255,255,0.5)",
          }}
          animate={{ left: mode === "coliving" ? "calc(100% - 1.625rem)" : "2px" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      <span
        className={`text-sm font-medium transition-colors duration-300 ${
          mode === "coliving" ? "text-gold" : "text-white/30"
        }`}
      >
        Co-Living with CoHost
      </span>
    </div>
  );
}

/* ════════════════════════ MAIN COMPONENT ═════════════════════════════════ */
export default function CoLivingCalculator() {
  const [mode, setMode] = useState<"traditional" | "coliving">("traditional");
  const [rooms, setRooms] = useState(3);

  const data = revenueData[rooms];
  const delta = data.annual - TRADITIONAL_ANNUAL;

  const animatedMonthly = useCountUp(data.monthly, 300);
  const animatedAnnual = useCountUp(data.annual, 300);
  const animatedDelta = useCountUp(delta, 300);
  const animatedWeeklyTotal = useCountUp(rooms * data.avgWeekly, 300);

  const handleSlider = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setRooms(val);
    if (mode === "traditional") setMode("coliving");
  }, [mode]);

  return (
    <section id="calculator" className="py-24 lg:py-32 bg-[#141413] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Section header ── */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            The Model
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            One Property. Multiple Income Streams.
          </h2>
          <p className="mt-6 text-lg text-white/40 leading-relaxed">
            See how co-living changes your numbers — and why most landlords never go back.
          </p>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ════════ LEFT — Interactive Floor Plan ════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Toggle */}
            <div className="mb-6">
              <ModeToggle mode={mode} onChange={setMode} />
            </div>

            {/* Floor plan SVG */}
            <div className="rounded-2xl border border-white/[0.06] bg-[rgba(20,20,19,0.7)] p-6 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <FloorPlan mode={mode} rooms={rooms} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Range slider */}
            <div className="mt-6 px-2">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-white/50 font-medium">
                  Rentable Rooms
                </label>
                <span className="text-sm font-semibold text-gold">{rooms}</span>
              </div>
              <input
                type="range"
                min={3}
                max={6}
                step={1}
                value={rooms}
                onChange={handleSlider}
                className="gold-range w-full cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                {[3, 4, 5, 6].map((n) => (
                  <span
                    key={n}
                    className={`text-xs font-medium transition-colors ${
                      n <= rooms ? "text-gold/70" : "text-white/20"
                    }`}
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ════════ RIGHT — Revenue Comparison ════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-0"
          >
            {/* Card 1 — Traditional */}
            <div className="rounded-t-2xl border border-white/[0.06] bg-[#FAF9F5] p-6 sm:p-8">
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-charcoal/40 font-semibold mb-4">
                Traditional Rental
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
                    ${fmt(TRADITIONAL_MONTHLY)}
                    <span className="text-base font-normal text-charcoal/30">
                      /mo
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-charcoal/40">Annual</div>
                  <div className="font-display text-xl font-bold text-charcoal">
                    ${fmt(TRADITIONAL_ANNUAL)}
                    <span className="text-xs font-normal text-charcoal/30">
                      /yr
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-1.5 rounded-full bg-charcoal/[0.06] overflow-hidden">
                <div className="h-full w-[15%] rounded-full bg-charcoal/20" />
              </div>
            </div>

            {/* VS divider */}
            <div className="relative flex items-center justify-center -my-px z-10">
              <div className="absolute inset-x-0 h-px bg-gold/20" />
              <span className="relative z-10 bg-[#141413] border border-gold/30 text-gold text-xs font-bold tracking-wider px-4 py-1.5 rounded-full">
                VS
              </span>
            </div>

            {/* Card 2 — Co-Living */}
            <div className="rounded-b-2xl border border-gold/20 bg-[#1A1A1A] p-6 sm:p-8">
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-gold font-semibold mb-4">
                Co-Living with CoHost
              </div>

              {/* Room breakdown */}
              <div className="text-sm text-white/40 mb-1">
                <span className="text-white font-semibold">{rooms}</span> Rooms
                {" "}
                <span className="mx-1 text-white/20">&times;</span>
                {" "}
                <span className="text-white font-semibold">
                  ${fmt(data.avgWeekly)}
                </span>
                /wk avg
              </div>
              <div className="text-xs text-white/25 mb-5">
                = ${fmt(animatedWeeklyTotal)}/wk
              </div>

              {/* Monthly & Annual */}
              <div className="flex items-end justify-between">
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                    ${fmt(animatedMonthly)}
                    <span className="text-base font-normal text-white/25">
                      /mo
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/30">Annual</div>
                  <div className="font-display text-xl font-bold text-white">
                    ${fmt(animatedAnnual)}
                    <span className="text-xs font-normal text-white/25">
                      /yr
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 h-1.5 rounded-full bg-gold/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gold"
                  initial={false}
                  animate={{ width: `${Math.min((data.annual / 220000) * 100, 100)}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Management fee + net */}
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-white/30">CoHost management fee: ~10%</span>
                <span className="text-white/50 font-semibold">
                  Net est: ${fmt(Math.round(data.annual * 0.9))}/yr
                </span>
              </div>

              {/* Delta */}
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                  Additional Annual Revenue
                </div>
                <div className="font-display text-4xl sm:text-5xl font-bold text-gold tracking-tight">
                  +${fmt(animatedDelta)}
                  <span className="text-lg font-normal text-gold/50">/yr</span>
                </div>
                <div className="mt-1 text-sm text-gold/50">
                  {((data.annual / TRADITIONAL_ANNUAL) * 100 - 100).toFixed(0)}%
                  more than traditional rental
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="pt-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors"
              >
                <span>See what my specific property could earn</span>
                <span className="text-gold/40 group-hover:text-gold/70 transition-colors">
                  &rarr;
                </span>
                <span className="ml-1 px-3 py-1 rounded-full bg-gold/10 text-sm text-gold font-semibold group-hover:bg-gold/20 transition-colors">
                  Run Free Analysis
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
