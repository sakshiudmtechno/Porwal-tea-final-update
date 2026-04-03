export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+971564171070"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-green-400/40 hover:scale-110 transition-transform duration-300">
          <svg
            viewBox="0 0 32 32"
            fill="white"
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.352.633 4.643 1.836 6.645L2.667 29.333l6.872-1.803A13.266 13.266 0 0 0 16.004 29.333C23.372 29.333 29.333 23.364 29.333 16c0-7.364-5.961-13.333-13.329-13.333zm0 24.254a11.012 11.012 0 0 1-5.611-1.535l-.403-.24-4.076 1.069 1.089-3.972-.263-.409A10.988 10.988 0 0 1 5.009 16c0-6.068 4.936-11.004 11.004-11.004 6.068 0 10.996 4.936 10.996 11.004 0 6.068-4.928 10.921-11.005 10.921zm6.04-8.23c-.33-.165-1.955-.965-2.258-1.075-.303-.11-.523-.165-.744.165-.22.33-.852 1.075-1.044 1.296-.193.22-.385.248-.715.083-.33-.165-1.394-.514-2.655-1.638-.981-.876-1.643-1.957-1.836-2.287-.193-.33-.021-.508.145-.673.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.744-1.793-1.019-2.455-.269-.644-.541-.557-.744-.567l-.633-.011a1.213 1.213 0 0 0-.88.413c-.303.33-1.155 1.129-1.155 2.752 0 1.624 1.183 3.193 1.348 3.413.165.22 2.327 3.554 5.641 4.985.789.34 1.404.543 1.884.695.791.252 1.512.216 2.082.131.635-.095 1.955-.799 2.231-1.571.275-.771.275-1.432.193-1.571-.082-.138-.303-.22-.633-.385z" />
          </svg>
        </div>
      </div>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0B1D3F] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none">
        Chat with us!
      </div>
    </a>
  );
}
