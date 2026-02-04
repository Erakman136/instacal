const InstagramLogo = ({ className = "w-14 h-14" }: { className?: string }) => {
  return (
    <div className={`instagram-logo-gradient rounded-2xl p-2.5 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1.5" fill="white" stroke="none" />
      </svg>
    </div>
  );
};

export default InstagramLogo;
