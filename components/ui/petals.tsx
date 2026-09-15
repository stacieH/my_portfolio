import type { CSSProperties } from "react";

const petals = [
  { left: "8%", top: "6%", size: 14, duration: 16, delay: 0, drift: 60, rotate: 20 },
  { left: "22%", top: "38%", size: 10, duration: 19, delay: 4, drift: -40, rotate: -30 },
  { left: "41%", top: "14%", size: 12, duration: 14, delay: 8, drift: 50, rotate: 45 },
  { left: "63%", top: "52%", size: 16, duration: 21, delay: 2, drift: -60, rotate: 10 },
  { left: "78%", top: "22%", size: 11, duration: 17, delay: 6, drift: 30, rotate: -15 },
  { left: "90%", top: "64%", size: 13, duration: 20, delay: 10, drift: -50, rotate: 35 },
  { left: "52%", top: "78%", size: 9, duration: 15, delay: 12, drift: 40, rotate: -40 },
];

const petalPath = "M12 22C6 17 4 11 7 5c1-2 3-3 4-2l1 2 1-2c1-1 3 0 4 2 3 6 1 12-5 17z";

export function Petals() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((petal) => (
        <svg
          key={`${petal.left}-${petal.top}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={petal.size}
          height={petal.size}
          focusable="false"
          className="petal absolute text-sakura opacity-70"
          style={
            {
              left: petal.left,
              top: petal.top,
              rotate: `${petal.rotate}deg`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              "--petal-drift": `${petal.drift}px`,
            } as CSSProperties
          }
        >
          <path fill="currentColor" d={petalPath} />
        </svg>
      ))}
    </div>
  );
}
