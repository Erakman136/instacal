const MetaLogo = ({ className = "h-4" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 400 80" className={className} fill="currentColor">
      <text x="0" y="60" fontSize="65" fontWeight="400" fontFamily="system-ui, sans-serif">
        <tspan>○○</tspan>
        <tspan dx="5">Meta</tspan>
      </text>
    </svg>
  );
};

export default MetaLogo;
