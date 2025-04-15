export default function ContactBar() {
  return (
    <div className="fixed bottom-0 right-0 mb-1 mr-2 md:mb-2 md:mr-3 z-20 flex flex-row gap-2 h-16 justify-between opacity-95">
      <a
        className="hover:opacity-90 transition-all duration-100 hover:scale-105"
        href="https://wa.me/38598361865"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          style={{ enableBackground: "new 0 0 64 64" }}
          viewBox="0 0 64 64"
          width={48}
          height={48}
        >
          <path d="M.804 31.804c0 5.5 1.4 11 4.2 15.7l-4.5 16.3 16.6-4.4c4.6 2.5 9.7 3.8 15 3.8 17.3 0 31.4-14.1 31.4-31.4 0-8.4-3.3-16.3-9.2-22.2-5.9-5.9-13.8-9.2-22.2-9.2-17.3 0-31.3 14.1-31.3 31.4z" />
          <path
            d="M543.5 981.7c0-5.5 1.4-11 4.2-15.7l-4.5-16.3 16.6 4.4c4.6-2.5 9.7-3.8 15-3.8 17.3 0 31.4 14.1 31.4 31.4 0 8.4-3.3 16.3-9.2 22.2-5.9 5.9-13.8 9.2-22.2 9.2-17.3 0-31.3-14.1-31.3-31.4z"
            style={{ opacity: ".2" }}
            transform="matrix(1 0 0 -1 -542.696 1013.504)"
          />
          <linearGradient
            id="a"
            x1="-251.323"
            x2="-251.323"
            y1="38.399"
            y2="-32.961"
            gradientTransform="matrix(.8515 0 0 .8553 246.022 29.45)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style={{ stopColor: "#20b038" }} />
            <stop offset="1" style={{ stopColor: "#60d66a" }} />
          </linearGradient>
          <path
            d="M1.9 31.5c0 5.3 1.4 10.5 4 15.1L1.6 62.3l16-4.2c4.4 2.4 9.4 3.7 14.5 3.7 16.7 0 30.2-13.6 30.3-30.2 0-8.1-3.1-15.7-8.9-21.4-5.7-5.7-13.3-8.9-21.4-8.9-16.6 0-30.2 13.5-30.2 30.2"
            style={{ fill: "url(#a)" }}
          />
          <linearGradient
            id="b"
            x1="-241.634"
            x2="-241.634"
            y1="30.364"
            y2="-43.556"
            gradientTransform="matrix(.8515 0 0 .8553 237.775 37.416)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style={{ stopColor: "#f9f9f9" }} />
            <stop offset="1" style={{ stopColor: "#fff" }} />
          </linearGradient>
          <path
            d="M.8 31.5C.8 37 2.2 42.4 5 47.2L.5 63.4 17.2 59c4.6 2.5 9.7 3.8 15 3.8 17.3 0 31.3-14.1 31.3-31.3 0-8.4-3.3-16.2-9.2-22.2C48.4 3.4 40.5.1 32.1.1 14.9.2.8 14.2.8 31.5zm9.9 14.8-.6-1c-2.6-4.1-4-8.9-4-13.9 0-14.4 11.7-26 26.1-26 7 0 13.5 2.7 18.4 7.6 4.9 4.9 7.6 11.5 7.6 18.4 0 14.4-11.7 26-26 26-4.7 0-9.3-1.3-13.3-3.6l-1-.6L8 55.8l2.7-9.5z"
            style={{ fill: "url(#b)" }}
          />
          <path
            d="M24.3 18.4c-.6-1.3-1.2-1.3-1.8-1.4H21c-.5 0-1.4.2-2.1 1-.7.8-2.7 2.7-2.7 6.5 0 3.9 2.8 7.6 3.2 8.1.4.5 5.4 8.7 13.4 11.8 6.6 2.6 8 2.1 9.4 2 1.4-.1 4.6-1.9 5.3-3.7.7-1.8.7-3.4.5-3.7-.2-.3-.7-.5-1.5-.9s-4.6-2.3-5.4-2.5c-.7-.3-1.2-.4-1.8.4-.5.8-2 2.5-2.5 3.1-.5.5-.9.6-1.7.2-.8-.4-3.3-1.2-6.3-3.9-2.3-2.1-3.9-4.6-4.4-5.4-.5-.8 0-1.2.3-1.6.4-.4.8-.9 1.2-1.4.4-.5.5-.8.8-1.3.3-.5.1-1-.1-1.4-.1-.5-1.6-4.4-2.3-5.9"
            style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#fff" }}
          />
        </svg>
      </a>
    </div>
  );
}
