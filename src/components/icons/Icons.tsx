type IconProps = { size?: number; color?: string; opacity?: number; style?: React.CSSProperties };

const base = (size: number, color: string, children: React.ReactNode) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {children}
  </svg>
);

export const IconScissors = ({ size = 18, color = "currentColor" }: IconProps) => base(size, color,
  <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="M8.12 8.12 12 12" /></>
);

export const IconRazor = ({ size = 18, color = "currentColor" }: IconProps) => base(size, color,
  <><path d="M11 6a3 3 0 0 1-3 3" /><path d="M3 13a4 4 0 0 1 4-4" /><path d="M21 16 10.5 5.5" /><path d="m14 19 3 3" /><path d="m11 16 3-3" /><path d="M5 12h.01" /><path d="M10 20a4 4 0 0 1-4-4v-1.5a1.5 1.5 0 0 0-3 0V16a7 7 0 0 0 7 7" /></>
);

export const IconBarberChair = ({ size = 18, color = "currentColor" }: IconProps) => base(size, color,
  <><path d="M7 16V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8" /><path d="M5 12h14" /><path d="M9 19h6" /><path d="M12 16v3" /><path d="M19 6h-2" /><path d="M5 6h2" /></>
);

export const IconHand = ({ size = 18, color = "currentColor" }: IconProps) => base(size, color,
  <><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" /><path d="M14 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" /><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v11a4 4 0 0 0 4 4" /><path d="M18 8a2 2 0 0 1 2 2v3a5 5 0 0 1-5 5h-2c-.3 0-.6.1-.8.3l-3.3 2.6c-.6.5-1.5.1-1.5-.7" /></>
);

export const IconNailPolish = ({ size = 18, color = "currentColor" }: IconProps) => base(size, color,
  <><path d="M9 13V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v8" /><path d="M12 3v10" /><path d="M18 13.5a4 4 0 0 1-1.2 2.8c-1 .8-1.8 1.8-1.8 3.2V21H9v-1.5c0-1.4-.8-2.4-1.8-3.2A4 4 0 0 1 6 13.5" /></>
);

export const IconMassage = ({ size = 18, color = "currentColor" }: IconProps) => base(size, color,
  <><circle cx="12" cy="5" r="2" /><path d="M12 17v-6" /><path d="M12 11 8 13h4.15L15 13" /><path d="M16 19v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M9 11v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6" /></>
);

export const IconPadelRacket = ({ size = 18, color = "currentColor" }: IconProps) => base(size, color,
  <><ellipse cx="12" cy="8.5" rx="7" ry="6.5" /><path d="M12 15v6" /><path d="M9.5 21h5" /><path d="M8 8.5h8" /><path d="M12 5v7" /><circle cx="12" cy="8.5" r=".5" fill={color} /><circle cx="9.5" cy="7" r=".5" fill={color} /><circle cx="14.5" cy="7" r=".5" fill={color} /><circle cx="10" cy="10" r=".5" fill={color} /><circle cx="14" cy="10" r=".5" fill={color} /></>
);

export const IconClock = ({ size = 18, color = "currentColor" }: IconProps) => base(size, color,
  <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>
);

export const IconArrowRight = ({ size = 18, color = "currentColor" }: IconProps) => base(size, color,
  <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>
);
