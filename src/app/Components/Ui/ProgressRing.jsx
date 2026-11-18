export default function ProgressRing({ value = 0, size = 148, stroke = 12, children }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" role="img" aria-label={`${value}% of goal reached`}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={stroke} className="stroke-stone/70" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          className="ring-progress stroke-plum"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            "--ring-circ": circumference,
            "--ring-offset": offset,
          }}
        />
      </svg>
      <div className="absolute text-center">{children}</div>
    </div>
  );
}