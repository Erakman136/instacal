const footerLinks = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Locations",
  "Instagram Lite",
  "Meta AI",
  "Threads",
  "Contact Uploading & Non-Users",
  "Meta Verified",
];

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-4xl mx-auto">
        {footerLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-xs text-muted-foreground hover:underline transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
