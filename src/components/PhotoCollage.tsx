import photo1 from "@/assets/collage-1.jpg";
import photo2 from "@/assets/collage-2.jpg";
import photo3 from "@/assets/collage-3.jpg";

const PhotoCollage = () => {
  return (
    <div className="relative w-[420px] h-[380px]">
      {/* Left photo */}
      <div className="absolute left-0 top-12 w-[180px] h-[240px] rounded-3xl overflow-hidden rotate-[-8deg] shadow-2xl z-10">
        <img src={photo1} alt="" className="w-full h-full object-cover" />
        {/* Emoji reaction */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-foreground/90 rounded-full px-3 py-1 flex gap-1 text-sm">
          <span>🥹</span>
          <span>😍</span>
          <span>🤩</span>
        </div>
        {/* Heart reaction */}
        <div className="absolute bottom-16 -left-2 w-8 h-8 bg-gradient-to-br from-instagram-pink to-instagram-red rounded-full flex items-center justify-center shadow-lg">
          <span className="text-foreground text-sm">❤️</span>
        </div>
        {/* Bottom bar */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
          <div className="flex-1 h-8 bg-foreground/20 backdrop-blur-sm rounded-full" />
          <div className="text-foreground">♡</div>
        </div>
      </div>

      {/* Center photo */}
      <div className="absolute left-[120px] top-0 w-[180px] h-[280px] rounded-3xl overflow-hidden z-20 shadow-2xl">
        <img src={photo2} alt="" className="w-full h-full object-cover" />
        {/* Green star badge */}
        <div className="absolute top-[55%] right-0 translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background" style={{ backgroundColor: '#22c55e' }}>
          <span className="text-foreground text-xs">★✓</span>
        </div>
      </div>

      {/* Right photo */}
      <div className="absolute right-0 top-20 w-[160px] h-[200px] rounded-3xl overflow-hidden rotate-[6deg] shadow-2xl z-10">
        <img src={photo3} alt="" className="w-full h-full object-cover" />
        {/* Circle avatar */}
        <div className="absolute bottom-12 -right-2 w-12 h-12 rounded-full overflow-hidden border-2 border-instagram-pink">
          <img src={photo3} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <div className="w-24 h-8 bg-foreground/20 backdrop-blur-sm rounded-full" />
        <div className="text-foreground">♡</div>
      </div>
    </div>
  );
};

export default PhotoCollage;
