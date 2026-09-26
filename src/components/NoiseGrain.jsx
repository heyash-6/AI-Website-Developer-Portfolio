import React, { useId } from 'react';

/**
 * Animated film-grain / TV noise SVG overlay component.
 * Applies a distinct animated noise texture on hover over cards, buttons, and images.
 */
export default function NoiseGrain({ opacity = 0.22, isHovered = false }) {
  const rawId = useId();
  // Sanitize id for SVG url reference
  const filterId = `noise-filter-${rawId.replace(/:/g, '')}`;

  return (
    <div
      className={`absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[inherit] overflow-hidden z-20 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* SVG Grain Filter Definition */}
      <svg className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] pointer-events-none">
        <defs>
          <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.75;0.9;0.8;0.95;0.75"
                dur="0.25s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="monoNoise"
            />
            <feComponentTransfer>
              <feFuncR type="linear" slope="1.5" />
              <feFuncG type="linear" slope="1.5" />
              <feFuncB type="linear" slope="1.5" />
            </feComponentTransfer>
          </filter>
        </defs>

        <rect
          width="100%"
          height="100%"
          filter={`url(#${filterId})`}
          opacity={opacity}
          className="mix-blend-screen"
        />
      </svg>

      {/* Secondary CSS Grain Flicker Layer for guaranteed visibility */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay animate-grain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='staticNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23staticNoise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />
    </div>
  );
}
